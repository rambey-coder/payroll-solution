import db from "../configs/Database.js";
import { BadRequestException } from "../exceptions/BadRequestException.js";
import { NotFoundException } from "../exceptions/NotFoundException.js";
import PositionModel from "../models/PositionModel.js";
import models from "../models/index.js";
import { UserService } from "./UserService.js";
import { File } from "../utils/File.js"
import AccessModel from "../models/AccessModel.js";
import PositionAccessModel from "../models/PositionAccessModel.js";
import EmployeeModel from "../models/EmployeeModel.js";
import { DuplicateException } from "../exceptions/DuplicateException.js";
import UserModel from "../models/UserModel.js";

export class EmployeeService {
    setUserService(userService){
        this.userService = userService
    }
    createEmployee = async (req, transaction) => {
        const existingEmployee = await EmployeeModel.findOne({
            where: {email: req.body.email, positionId: req.body.positionId}
        })
        if(existingEmployee){
            throw new DuplicateException("Employee already exists in this position")
        }
        const existingPosition = await models.Position.findOne({
            id: req.body.positionId
        })
        if (!existingPosition) {
            throw new BadRequestException("Position must exist before an employee can be added")
        }
        if (req.file != undefined) {
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
                req.body.profilePicture = req.file.filename
            }
        }
      
        const newEmployee = await models.Employee.create(req.body, { transaction })
        const newUser = {
            email: req.body.email,
            password: req.body.email,
            employeeId: newEmployee.id
        }
        await this.userService.createUser(newUser, transaction)
    }


    getEmployeeById = async (id) => {
        return await models.Employee.findByPk(id, {
            include: {
                model: PositionModel,
                as: "position",
                attributes: ["id", "title"],
                include :{
                    model: PositionAccessModel,
                    as: "positionAccess",
                    attributes: ["id"],
                    include:{
                        model: AccessModel,
                        as: "access",
                        attributes:["accessName"]
                    }
                }
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
        },
        {
            include: {
                model: UserModel,
                as: "user",
                attributes: ["id"]
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

    uploadEmployeeProfilePicture = async (req, res) => {
        const existingEmployee = await models.Employee.findOne({
            where: {
                id: req.params.id
            }
        })
        if (!existingEmployee) {
            throw new BadRequestException("Position must exist before an employee can be added")
        }
        if (!req.file || req.file == undefined) {
            throw new BadRequestException("File cannot be empty")
        }
        const profilePicture = new File(req.file)
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
        req.body.profilePicture = req.file.filename
        // await models.Employee.update({profilePicture},
        //     {where:{id: req.params.id}}
        // )
        res.json({
            message: "Employee profile picture uploaded"
        })

    }
}