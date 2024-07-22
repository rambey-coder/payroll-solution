import { Sequelize } from 'sequelize';
import db from '../configs/Database.js';

const { DataTypes } = Sequelize;

const DeductionModel = db.define(
    'Deduction',
    {
        deductionName: {
            type: DataTypes.STRING,
        },
        deductionDescription: {
            type: DataTypes.STRING
        },
        amount:{
            type: DataTypes.INTEGER
        }
    },
    {
        freezeTableName: true,
    }
);

(async () => {
    await db.sync();
  })();  

export default DeductionModel;


