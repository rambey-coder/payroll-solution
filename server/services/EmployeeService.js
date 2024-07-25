import db from "../configs/Database.js";
import { BadRequestException } from "../exceptions/BadRequestException.js";
import { NotFoundException } from "../exceptions/NotFoundException.js";
import PositionModel from "../models/PositionModel.js";
import models from "../models/index.js";
import { UserService } from "./UserService.js";


export class EmployeeService {
    userService = new UserService()
    createEmployee = async (req, res, transaction) => {
        const transaction = await db.transaction()
        const existingPosition = await models.Position.findOne({
            id: req.body.positionId
        })
        if (!existingPosition) {
            throw new BadRequestException("Position must exist before an employee can be added")
        }
        const profilePicture = new File(req.file)
        if (profilePicture) {
            if (profilePicture.isValidFile && profilePicture.isInvalidSize()) {
                throw new BadRequestException(
                    "The file is greater than 250kb"
                )
            }

            if (profilePicture.isValidFile && profilePicture.isInvalidType()) {
                throw new BadRequestException(
                    "The file extension is not supported"
                )
            }
            req.body.profilePicture = profilePicture
        }
        const newUser = {
            email: req.body.email,
            password: req.body.email,
        }
        await models.Employee.create(req.body, {transaction})
        await EmployeeService.userService.createEmployee(newUser, transaction)
    }


    getEmployeeById = async (req) => {
        return await models.Employee.findByPk(req.params.id, {
            include: {
                model: PositionModel,
                as: "position",
                attributes: ["id", "title"]
            }
        });
    };

    getEmployees = async () => {
        return await models.Employee.findAll({
            include: {
                model: PositionModel,
                as: "position",
                attributes: ["id", "title"]
            }
        })
    }

    updateEmployeeById = async (req) => {
        const existingPosition = await models.Position.findOne({
            where: {
                id: req.body.positionId
            }
        })
        if (!existingPosition) {
            throw new BadRequestException("Position must exist before an employee can be added")
        }
        return await models.Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    };

    updateEmployeeStatus = async (req) => {
        const existingEmployee = await models.Employee.findOne({
            where: {
                id: req.body.id
            }
        })
        if (!existingEmployee) {
            throw new BadRequestException("Employee not found")
        }
        await models.Employee.update({ status: req.body.status }, {
            where: {
                id: req.body.id
            }
        })
    }

    deleteEmployeeById = async (req) => {
        return await models.Employee.findByIdAndDelete(req.params.id);
    };

    static uploadEmployeeProfilePicture = async (req, res) => {
        const existingEmployee = await models.Employee.findOne({
            where: {
                id: req.params.id
            }
        })
        if (!existingEmployee) {
            throw new BadRequestException("Position must exist before an employee can be added")
        }
        const profilePicture = new File(req.file)
        if (profilePicture) {
            if (profilePicture.isValidFile && profilePicture.isInvalidSize()) {
                throw new BadRequestException(
                    "The file is greater than 250kb"
                )
            }

            if (profilePicture.isValidFile && profilePicture.isInvalidType()) {
                throw new BadRequestException(
                    "The file extension is not supported"
                )
            }
            await models.Employee.update({profilePicture},
                {where:{id: req.params.id}}
            )
            res.json({
                message: "Employee profile picture uploaded"
            })
        }

    }
}