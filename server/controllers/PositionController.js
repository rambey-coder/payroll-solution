import { BadRequestException } from "../exceptions/BadRequestException.js";
import { DuplicateException } from "../exceptions/DuplicateException.js";
import { NotFoundException } from "../exceptions/NotFoundException.js";
import { PositionService } from "../services/PositionService.js";

export class PositionController {
    static positionService = new PositionService()
    static createPosition = async(req, res) => {
        try{
            await PositionController.positionService.createPosition(req, res)
            res.json({
                message: "Position created"
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
      
      static getPositionById = async (req, res) => {
        try{
            const Position = await PositionController.positionService.getPositionById(req)
            res.json({
                data: Position
            })
        }
        catch(err){
            res.status(500).json({
                message: err.message
            })
        }
      };

      static getPositions = async(req, res) =>{
        try{
            const Positions = await PositionController.positionService.getPositions()
            res.json({
                data: Positions
            })
        }
        catch(err){
            res.json({
                message: err.message
            })
        }
      }

      static updatePosition = async (req, res) =>{
        try{
            const Position = await PositionController.positionService.updatePositionById(req)
            res.json({
                message: "Position updated"
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

      static deletePosition = async (req, res) =>{
        try{
            const Position = await PositionController.positionService.deletePositionById(req)
            res.json({
                message: "Position deleted"
            })
        }
        catch(err){
            res.status(500).json({
                message: err.message
            })
        }
      }

      
}