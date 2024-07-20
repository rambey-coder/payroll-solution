import { DuplicateException } from "../exceptions/DuplicateException.js";
import { NotFoundException } from "../exceptions/NotFoundException.js";
import { TaxService } from "../services/TaxService.js";

export class TaxController{
    static taxService = new TaxService()
    static createTax = async(req, res) => {
        try{
            await TaxController.taxService.createTax(req, res)
            res.json({
                message: "Tax created"
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
      
      static getTaxById = async (req, res) => {
        try{
            const Tax = await TaxController.taxService.getTaxById(req)
            res.json({
                data: Tax
            })
        }
        catch(err){
            res.status(500).json({
                message: err.message
            })
        }
      };

      static getTaxs = async(req, res) =>{
        try{
            const Taxs = await TaxController.taxService.getTaxs()
            res.json({
                data: Taxs
            })
        }
        catch(err){
            res.json({
                message: err.message
            })
        }
      }

      static updateTax = async (req, res) =>{
        try{
            const Tax = await TaxController.taxService.updateTaxById(req)
            res.json({
                message: "Tax updated"
            })
        }
        catch(err){
            res.status(500).json({
                message: err.message
            })
        }
      }

      static deleteTax = async (req, res) =>{
        try{
            const Tax = await TaxController.taxService.deleteTaxById(req)
            res.json({
                message: "Tax deleted"
            })
        }
        catch(err){
            res.status(500).json({
                message: err.message
            })
        }
      }

      
}