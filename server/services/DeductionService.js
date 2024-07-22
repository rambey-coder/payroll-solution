import models from "../models/index.js";

export class DeductionService {
    createDeduction = async (req, res) => {
          const existingDeduction = await models.Deduction.findOne({
            where:{
                deductionName: req.body.deductionName
            }
          })
          if(existingDeduction){
            throw new DuplicateException(`Deduction already exists`)
          }
           await models.Deduction.create(req.body)
    }


    getDeductionById = async (req) => {
        return await models.Deduction.findByPk(req.params.id);
    };

    getDeductions = async() =>{
        return await models.Deduction.findAll()
    }

    updateDeductionById = async (req) => {
        const existingDeduction = await models.Deduction.findOne({
            where:{
                deductionName: req.body.deductionName
            }
          })
        return await models.Deduction.findByIdAndUpdate(req.params.id, req.body, { new: true });
    };

    deleteDeductionById = async (req) => {
        return await models.Deduction.findByIdAndDelete(req.params.id);
    };

}