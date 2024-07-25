import { DuplicateException } from "../exceptions/DuplicateException.js";
import { NotFoundException } from "../exceptions/NotFoundException.js";
import { DepartmentService } from "../services/DepartmentService.js";

export class DepartmentController{
    static departmentService = new DepartmentService()
    static createDepartment = async(req, res) => {
        try{
            await DepartmentController.departmentService.createDepartment(req, res)
            res.json({
                message: "Department created"
            })
        }
        catch(err){
            if(err instanceof NotFoundException){
               return res.status(400).json({
                    message: err.message
                })
            }
            if(err instanceof DuplicateException){
                return res.status(409).json({
                     message: err.message
                 })
             }
            res.status(500).json({
                message: err.message
            })
        }
      };
      
      static getDepartmentById = async (req, res) => {
        try{
            const Department = await DepartmentController.departmentService.getDepartmentById(req)
            res.json({
                data: Department
            })
        }
        catch(err){
            res.status(500).json({
                message: err.message
            })
        }
      };

      static getDepartments = async(req, res) =>{
        try{
            const Departments = await DepartmentController.departmentService.getDepartments()
            res.json({
                data: Departments
            })
        }
        catch(err){
            res.json({
                message: err.message
            })
        }
      }

      static updateDepartment = async (req, res) =>{
        try{
            const Department = await DepartmentController.departmentService.updateDepartmentById(req)
            res.json({
                message: "Department updated"
            })
        }
        catch(err){
            res.status(500).json({
                message: err.message
            })
        }
      }

      static deleteDepartment = async (req, res) =>{
        try{
            const Department = await DepartmentController.departmentService.deleteDepartmentById(req)
            res.json({
                message: "Department deleted"
            })
        }
        catch(err){
            res.status(500).json({
                message: err.message
            })
        }
      }

      
}