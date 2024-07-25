import { NotFoundException } from "../exceptions/NotFoundException.js";
import { AccessService } from "../services/AccessService.js";

export class AccessController{
    static accessService = new AccessService()

    static async getAllAccess(req, res){
        try{
            const allAccess = await AccessController.accessService.getAllAccess()
            res.json({
                data: allAccess
            })      
        }
        catch(err){
            res.status(500).json({
                message: err.message
            })
        }
    }

    static async addPositionAccess(req, res){
        try{
            await AccessController.accessService.addPositionAccess(req, res)
            res.json("Permission access added")
        }
        catch(err){
            if(err instanceof NotFoundException){
                return res.status(400).json({message: err.message})
            }
            return res.status(500).json({
                message: err.message
            })
        }
    }

    static async getAllPermissionAccess(req, res){
        try{
            const allAccess = await AccessController.accessService.getAllPositionAccess()
            res.json({
                data: allAccess
            })      
        }
        catch(err){
            res.status(500).json({
                message: err.message
            })
        }
    }
}