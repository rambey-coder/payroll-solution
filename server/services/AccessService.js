import { BadRequestException } from "../exceptions/BadRequestException.js";
import AccessModel from "../models/Access.js";
import PositionModel from "../models/PositionModel.js";
import models from "../models/index.js";

export class AccessService{
    async getAllAccess(){
        const accesses = models.Access.findAll()
        return accesses
    }

    async addPositionAccess(req, res){
        const existingAccess = models.PositionAccess.findByPk(req.body.access_id)
        if(!existingAccess){
            throw new BadRequestException(`Access with id ${req.body.access_id} not found`)
        }
        return await models.PositionAccess.create(req.body)
    }

    async getAllPositionAccess(req, res){
        const positionAccess = models.PositionAccess.findAll({
            include: {
                model: PositionModel,
                as:"position",
                attributes: ["id"]
            }  ,
            include: {
                model: AccessModel,
                as:"access",
                attributes: ["id", "accessName"]
            }            
        })
        return positionAccess
    }
}
