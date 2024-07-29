import db from "../configs/Database.js";
import { BadRequestException } from "../exceptions/BadRequestException.js";
import { DuplicateException } from "../exceptions/DuplicateException.js";
import { NotFoundException } from "../exceptions/NotFoundException.js";

export class EmployeeController{
    constructor(userService, employeeService){
        this.userService = userService
        this.employeeService = employeeService
    }
    createEmployee = async(req, res) => {
    const transaction = await db.transaction()
        try{
            await this.employeeService.createEmployee(req, transaction)
            res.json({
                message: "Employee created"
            })
            await transaction.commit()
        }
        catch(err){
            await transaction.rollback()
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
      
      getEmployeeById = async (req, res) => {
        try{
            if(!req.params.id){
                throw BadRequestException("id cannot be null")
            }
            const employee = await this.employeeService.getEmployeeById(req.params.id)
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

      getEmployees = async(req, res) =>{
        try{
            const employees = await this.employeeService.getEmployees()
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

      updateEmployee = async (req, res) =>{
        try{
            const employee = await this.employeeService.updateEmployeeById(req)
            // const logoFile = new File(req.file)
            // if (logoFile.isValidFile && logoFile.isInvalidSize()) {
            //   return res.status(400).json({
            //     msg: "The file is greater than 250kb"
            //   })
            // }
          
            // if (logo.isValidFile && logoFile.isInvalidType()) {
            //   return res.status(400).json({
            //     msg: "The file extension is not supported"
            //   })
            // }
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

      updateEmployeeStatus = async(req, res) =>{
        try{
            await this.employeeService.updateEmployeeStatus(req)
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

      deleteEmployee = async (req, res) =>{
        try{
            const employee = await this.employeeService.deleteEmployeeById(req)
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

      uploadEmployeeProfilePicture = async(req, res) =>{
        try{
            await this.employeeService.uploadEmployeeProfilePicture(req, res)
            return res.json({
                message: "Profile picture uploaded"
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
                 return res.status(400).json({
                      message: err.message
                  })
              }
            res.status(500).json({
                message: err.message
            })
        }
       
      }
}