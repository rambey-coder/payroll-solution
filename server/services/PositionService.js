import { DuplicateException } from "../exceptions/DuplicateException.js";
import { NotFoundException } from "../exceptions/NotFoundException.js";
import DepartmentModel from "../models/DepartmentModel.js";
import PositionModel from "../models/PositionModel.js";
import models from "../models/index.js";


export class PositionService {
    createPosition = async (req, res) => {
          const existingDepartment = await models.Department.findOne({
            where:{
                id: req.body.departmentId
            }
          })
          if(!existingDepartment){
            throw new NotFoundException(`Position must exist before a postion can be added`)
          }
           await models.Position.create(req.body)
    }


    getPositionById = async (req) => {
        return await models.Position.findByPk(req.params.id,
            {include:{
                model: DepartmentModel,
                as: "department",
                attributes: ["id", "departmentName"]
            }}
        );
    };

    getPositions = async() =>{
        return await models.Position.findAll({
            include:{
                model: DepartmentModel,
                as: "department",
                attributes: ["id", "departmentName"]
            }
        })
    }

    updatePositionById = async (req) => {
        const existingPosition = await models.Position.findOne({
            where:{
                id: req.body.PositionId
            }
          })
          if(!existingPosition){
            throw new NotFoundException(`Position must exist before a postion can be added`)
          }
        return await models.Position.findByIdAndUpdate(req.params.id, req.body, { new: true });
    };

    deletePositionById = async (req) => {
        return await models.Position.findByIdAndDelete(req.params.id);
    };

}