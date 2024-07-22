import { DuplicateException } from "../exceptions/DuplicateException.js";
import { NotFoundException } from "../exceptions/NotFoundException.js";
import { IncentiveService } from "../services/IncentiveService.js";

export class IncentiveController{
    static incentiveService = new IncentiveService()
    static createIncentive = async(req, res) => {
        try{
            await IncentiveController.incentiveService.createIncentive(req, res)
            res.json({
                message: "Incentive created"
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
      
      static getIncentiveById = async (req, res) => {
        try{
            const Incentive = await IncentiveController.incentiveService.getIncentiveById(req)
            res.json({
                data: Incentive
            })
        }
        catch(err){
            res.status(500).json({
                message: err.message
            })
        }
      };

      static getIncentives = async(req, res) =>{
        try{
            const Incentives = await IncentiveController.incentiveService.getIncentives()
            res.json({
                data: Incentives
            })
        }
        catch(err){
            res.json({
                message: err.message
            })
        }
      }

      static updateIncentive = async (req, res) =>{
        try{
            const Incentive = await IncentiveController.incentiveService.updateIncentiveById(req)
            res.json({
                message: "Incentive updated"
            })
        }
        catch(err){
            res.status(500).json({
                message: err.message
            })
        }
      }

      static deleteIncentive = async (req, res) =>{
        try{
            const Incentive = await IncentiveController.incentiveService.deleteIncentiveById(req)
            res.json({
                message: "Incentive deleted"
            })
        }
        catch(err){
            res.status(500).json({
                message: err.message
            })
        }
      }

      
}