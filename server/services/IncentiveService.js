import models from "../models/index.js";

export class IncentiveService {
    createIncentive = async (req, res) => {
          const existingIncentive = await models.Incentive.findOne({
            where:{
                incentiveName: req.body.incentiveName
            }
          })
          if(existingIncentive){
            throw new DuplicateException(`Incentive already exists`)
          }
           await models.Incentive.create(req.body)
    }


    getIncentiveById = async (req) => {
        return await models.Incentive.findByPk(req.params.id);
    };

    getIncentives = async() =>{
        return await models.Incentive.findAll()
    }

    updateIncentiveById = async (req) => {
        const existingIncentive = await models.Incentive.findOne({
            where:{
                incentiveName: req.body.incentiveName
            }
          })
        return await models.Incentive.findByIdAndUpdate(req.params.id, req.body, { new: true });
    };

    deleteIncentiveById = async (req) => {
        return await models.Incentive.findByIdAndDelete(req.params.id);
    };

}