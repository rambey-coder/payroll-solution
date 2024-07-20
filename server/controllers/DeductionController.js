import { DuplicateException } from "../exceptions/DuplicateException.js";
import { NotFoundException } from "../exceptions/NotFoundException.js";
import { DeductionService } from "../services/DeductionService.js";

export class DeductionController{
    static deductionService = new DeductionService()
    static createDeduction = async(req, res) => {
        try{
            await DeductionController.createDeductioneductionService.createDeduction(req, res)
            res.json({
                message: "Deduction created"
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
      
      static getDeductionById = async (req, res) => {
        try{
            const Deduction = await DeductionController.deductionService.getDeductionById(req)
            res.json({
                data: Deduction
            })
        }
        catch(err){
            res.status(500).json({
                message: err.message
            })
        }
      };

      static getDeductions = async(req, res) =>{
        try{
            const Deductions = await DeductionController.deductionService.getDeductions()
            res.json({
                data: Deductions
            })
        }
        catch(err){
            res.json({
                message: err.message
            })
        }
      }

      static updateDeduction = async (req, res) =>{
        try{
            const Deduction = await DeductionController.deductionService.updateDeductionById(req)
            res.json({
                message: "Deduction updated"
            })
        }
        catch(err){
            res.status(500).json({
                message: err.message
            })
        }
      }

      static deleteDeduction = async (req, res) =>{
        try{
            const Deduction = await DeductionController.deductionService.deleteDeductionById(req)
            res.json({
                message: "Deduction deleted"
            })
        }
        catch(err){
            res.status(500).json({
                message: err.message
            })
        }
      }

      
}