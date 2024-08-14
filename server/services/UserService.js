import models from "../models/index.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { EmployeeService } from "./EmployeeService.js";
import { BadRequestException } from "../exceptions/BadRequestException.js";
import { DuplicateException } from "../exceptions/DuplicateException.js";
import EmployeeModel from "../models/EmployeeModel.js";
import db from "../configs/Database.js";
import { AuthException } from "../exceptions/AuthException.js";
import UserModel from "../models/UserModel.js";
import { where } from "sequelize";
import { NotFoundException } from "../exceptions/NotFoundException.js";

export class UserService {
    setEmployeeService(employeeService) {
        this.employeeService = employeeService
    }
    createUser = async (userData, transaction = null) => {
        const existingUser = await models.User.findOne({
            where: {
                email: userData.email
            }
        })
        if (existingUser) {
            throw new DuplicateException("user already exists")
        }
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const user = new models.User({
            ...userData,
            password: hashedPassword
        });
        await user.save({ transaction });
    };

    login = async (email, password) => {
        const sqlQuery = `SELECT DISTINCT
        u.id AS userId, u.password, u.first_name, u.last_name,  u.phone, u.email,  e.id AS employeeId,  e.positionId,  p.title AS positionTitle,
        pa.id AS positionAccessId, a.accessName AS accessName 
        FROM users u LEFT JOIN employee e ON u.employeeId = e.id LEFT JOIN position p ON e.positionId = p.id
        LEFT JOIN PositionAccess pa ON p.id = pa.positionId LEFT JOIN Access a ON pa.accessId = a.id
       where u.email=:email;
        `
        const userData = (await db.query(sqlQuery, { replacements: { email, type: db.QueryTypes.SELECT } })).flat()

        console.log(userData)

        if (!userData || userData.length < 1) {
            const msg = "User not found"
            throw new NotFoundException(msg)
        }

        const isPasswordValid = await bcrypt.compare(password, userData[0]?.password);
        if (!isPasswordValid) {
            const msg = "Invalid password"
            throw new BadRequestException(msg)
        }
        const userPositionAndAccess = Array.from(
            new Map(
                userData.map(data => [
                    `${data.accessName}_${data.positionId}`, // Create a unique key using accessName and positionId
                    {
                        accessName: data.accessName,
                        position: {
                            positionId: data.positionId,
                            positionTitle: data.positionTitle,
                        }
                    }
                ])
            ).values() // Extract the values (without duplicates)
        );
        const user = {
            id: userData[0].userId,
            email: userData[0].email,
            first_name: userData[0].first_name,
            last_name: userData[0].last_name,
            phone: userData[0].phone,
            accesses: userPositionAndAccess.map(access => (access.accessName)),
            positions: userPositionAndAccess.map(position => (position.position))
        }
        const token = jwt.sign({ id: userData[0].userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return {
            token,  user
        }
    }

    async #hashPassword(password) {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            return hashedPassword;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    getUser = async (req) => {
        const users = await models.User.findAll({
            attributes: ["id", "first_name", "last_name", "email", "phone"]
        })
        return users
    }

    getUserById = async (id) => {

        const user = await UserModel.findByPk(id)
        return user
    };

    updateUserById = async (userId, userData) => {
        return await models.User.findByIdAndUpdate(userId, userData, { new: true });
    };

    deleteUserById = async (userId) => {
        return await models.User.findByIdAndDelete(userId);
    };

    async #userHasNoAccess(user) {
        const sqlQuery = `SELECT DISTINCT
                          u.id AS userId,  u.email,  e.id AS employeeId,  e.positionId,  p.title AS positionTitle,
                          pa.id AS positionAccessId, a.accessName AS accessName 
                          FROM users u LEFT JOIN employee e ON u.employeeId = e.id LEFT JOIN position p ON e.positionId = p.id
                          LEFT JOIN PositionAccess pa ON p.id = pa.positionId LEFT JOIN Access a ON pa.accessId = a.id
                         where u.id=:userId;
                          `
        const userData = (await db.query(sqlQuery, { replacements: { userId: user.id, type: db.QueryTypes.SELECT } })).flat()
        return userData.every(data => !data.accessName)
    }

    async changeUserPassword(req) {
        try {
            const existingUser = await UserModel.findOne({
                where: { id: req.params.id }
            })
            if (!existingUser) {
                throw new BadRequestException("user not found")
            }
            const isPasswordValid = await bcrypt.compare(req.body.currentPassword, existingUser.password);
            if (!isPasswordValid) {
                throw new BadRequestException("Incorrect password")
            }
            if (await this.#hashPassword(req.body.password) == existingUser.password) {
                throw new BadRequestException("Old password and new password cannot be the same")
            }
            await UserModel.findByIdAndUpdate({ password: this.#hashPassword(req.body.password) }, { where: { id: req.user.id } })

        }
        catch (err) {
            throw new Error(err.message)
        }
    }
}