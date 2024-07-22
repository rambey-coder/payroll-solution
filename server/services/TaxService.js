import models from "../models/index.js";

export class TaxService {
    createTax = async (req, res) => {
          const existingTax = await models.Tax.findOne({
            where:{
                taxName: req.body.taxName
            }
          })
          if(existingTax){
            throw new DuplicateException(`Tax already exists`)
          }
           await models.Tax.create(req.body)
    }


    getTaxById = async (req) => {
        return await models.Tax.findByPk(req.params.id);
    };

    getTaxs = async() =>{
        return await models.Tax.findAll()
    }

    updateTaxById = async (req) => {
        const existingTax = await models.Tax.findOne({
            where:{
                taxName: req.body.taxName
            }
          })
        return await models.Tax.findByIdAndUpdate(req.params.id, req.body, { new: true });
    };

    deleteTaxById = async (req) => {
        return await models.Tax.findByIdAndDelete(req.params.id);
    };

}