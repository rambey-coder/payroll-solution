import { BadRequestException } from "../exceptions/BadRequestException.js";
import { DuplicateException } from "../exceptions/DuplicateException.js";
import { NotFoundException } from "../exceptions/NotFoundException.js";
import { EmployeeService } from "../services/EmployeeService.js";

export class EmployeeController{
    static employeeService = new EmployeeService()
    static createEmployee = async(req, res) => {
        try{
            await EmployeeController.employeeService.createEmployee(req, res)
            res.json({
                message: "Employee created"
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
             if(err instanceof BadRequestException){
                return res.status(409).json({
                     message: err.message
                 })
             }
            res.status(500).json({
                message: err.message
            })
        }
      };
      
      static getEmployeeById = async (req, res) => {
        try{
            const employee = await EmployeeController.employeeService.getEmployeeById(req)
            res.json({
                data: employee
            })
        }
        catch(err){
            res.status(500).json({
                message: err.message
            })
        }
      };

      static getEmployees = async(req, res) =>{
        try{
            const employees = await EmployeeController.employeeService.getEmployees()
            res.json({
                data: employees
            })
        }
        catch(err){
            res.json({
                message: err.message
            })
        }
      }

      static updateEmployee = async (req, res) =>{
        try{
            const employee = await EmployeeController.employeeService.updateEmployeeById(req)
            res.json({
                message: "employee updated"
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
              if(err instanceof BadRequestException){
                 return res.status(409).json({
                      message: err.message
                  })
              }
            res.status(500).json({
                message: err.message
            })
        }
      }

      static updateEmployeeStatus = async(req, res) =>{
        try{
            await EmployeeController.employeeService.updateEmployeeStatus(req)
            res.json({
                message: "employee status updated"
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
              if(err instanceof BadRequestException){
                 return res.status(409).json({
                      message: err.message
                  })
              }
            res.status(500).json({
                message: err.message
            })
        }
      }

      static deleteEmployee = async (req, res) =>{
        try{
            const employee = await EmployeeController.employeeService.deleteEmployeeById(req)
            res.json({
                message: "employee deleted"
            })
        }
        catch(err){
            res.status(500).json({
                message: err.message
            })
        }
      }

      
}