import { BadRequestException } from "../exceptions/BadRequestException.js";
import { NotFoundException } from "../exceptions/NotFoundException.js";
import PositionModel from "../models/PositionModel.js";
import models from "../models/index.js";


export class EmployeeService {
    createEmployee = async (req, res) => {
           const existingPosition = await models.Position.findOne({
            id: req.body.positionId
           })
           if(!existingPosition){
            throw new BadRequestException("Position must exist before an employee can be added")
           }
           await models.Employee.create(req.body)
    }


    getEmployeeById = async (req) => {
        return await models.Employee.findByPk(req.params.id);
    };

    getEmployees = async() =>{
        return await models.Employee.findAll({
            include: {
                model: [PositionModel],
                attributes: ["id", "title"]
            }
        })
    }

    updateEmployeeById = async (req) => {
        const existingPosition = await models.Position.findOne({
            where:{
                id: req.body.positionId
            },
            include: {
                model: [PositionModel],
                attributes: ["id", "title"]
            }
           })
           if(!existingPosition){
            throw new BadRequestException("Position must exist before an employee can be added")
           }
        return await models.Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    };

    updateEmployeeStatus = async(req) =>{
        const existingEmployee = await models.Employee.findOne({
           where: {
            id: req.body.id
           }
        })
        if(!existingEmployee){
            throw new BadRequestException("Employee not found")
        }
        await models.Employee.update({status: req.body.status}, {
            where:{
                id: req.body.id
            }
        })
    }

    deleteEmployeeById = async (req) => {
        return await models.Employee.findByIdAndDelete(req.params.id);
    };

}