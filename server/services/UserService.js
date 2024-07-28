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

export class UserService {
    setEmployeeService(employeeService){
        this.employeeService = employeeService
    }
    createUser = async (userData, transaction=null) => {
        const existingUser = await models.User.findOne({
           where:{
            email: userData.email
           }
        })
        if(existingUser){
            throw new DuplicateException("user already exists")
        }
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const user = new models.User({
            ...userData,
            password: hashedPassword
        });
        await user.save({transaction});
    };

    login = async (email, password) => {
        const user = await models.User.findOne({where:{email}});
        if (!user) {
            const msg = "User not found"
            throw new Error(msg)
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            const msg = "Invalid password"
            throw new BadRequestException(msg)
        }
        if(await this.#userHasNoAccess(user)){
            throw new AuthException("Access denied")
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return {token, user}
    }

    async #hashPassword(password) {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            return hashedPassword;
        } catch (error) {
            logger.error("Error while hashing password", error.message)
            throw new Error(message);
        }
    }

    getUser = async(req) =>{
        const users = await models.User.findAll({
            attributes: ["id", "first_name", "last_name", "email", "phone"]
    })
        return users
    }

    getUserById = async (id) => {
        const sqlQuery = `SELECT DISTINCT
                          u.id AS userId,  u.email,  e.id AS employeeId,  e.positionId,  p.title AS positionTitle,
                          pa.id AS positionAccessId, a.accessName AS accessName 
                          FROM users u LEFT JOIN employee e ON u.employeeId = e.id LEFT JOIN position p ON e.positionId = p.id
                          LEFT JOIN PositionAccess pa ON p.id = pa.positionId LEFT JOIN Access a ON pa.accessId = a.id
                         where u.id=:userId;
                          `
      const user = await db.query(sqlQuery, {replacements: {userId: +id, type: db.QueryTypes.SELECT}
      })
      return user
    };

    updateUserById = async (userId, userData) => {
        return await models.User.findByIdAndUpdate(userId, userData, { new: true });
    };

    deleteUserById = async (userId) => {
        return await models.User.findByIdAndDelete(userId);
    };

    async #userHasNoAccess(user){
        const sqlQuery = `SELECT DISTINCT
                          u.id AS userId,  u.email,  e.id AS employeeId,  e.positionId,  p.title AS positionTitle,
                          pa.id AS positionAccessId, a.accessName AS accessName 
                          FROM users u LEFT JOIN employee e ON u.employeeId = e.id LEFT JOIN position p ON e.positionId = p.id
                          LEFT JOIN PositionAccess pa ON p.id = pa.positionId LEFT JOIN Access a ON pa.accessId = a.id
                         where u.id=:userId;
                          `
      const userData = (await db.query(sqlQuery, {replacements: {userId: user.id, type: db.QueryTypes.SELECT}})).flat()
      return userData.every(data => !data.accessName)
    }

   async changeUserPassword(req){
        const existingUser = await UserModel.findOne({
            where:{id: req.params.id}
        })
        if(!existingUser){
            throw new BadRequestException("user not found")
        }
        await UserModel.findByIdAndUpdate({password:  this.#hashPassword(req.body.password)}, {where:{id: req.params.id}})
    }
}