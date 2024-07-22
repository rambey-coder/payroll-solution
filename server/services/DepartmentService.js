import { DuplicateException } from "../exceptions/DuplicateException.js";
import models from "../models/index.js";


export class DepartmentService {
    createDepartment = async (req, res) => {
          const existingDepartment = await models.Department.findOne({
            where:{
                departmentName: req.body.departmentName
            }
          })
          if(existingDepartment){
            throw new DuplicateException(`department already exists`)
          }
           await models.Department.create(req.body)
    }


    getDepartmentById = async (req) => {
        return await models.Department.findByPk(req.params.id);
    };

    getDepartments = async() =>{
        return await models.Department.findAll()
    }

    updateDepartmentById = async (req) => {
        return await models.Department.findByIdAndUpdate(req.params.id, req.body, { new: true });
    };

    deleteDepartmentById = async (req) => {
        return await models.Department.findByIdAndDelete(req.params.id);
    };

}