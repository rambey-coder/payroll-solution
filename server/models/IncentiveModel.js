import { Sequelize } from 'sequelize';
import db from '../configs/Database.js';

const { DataTypes } = Sequelize;

const IncentiveModel = db.define(
    'Incentive',
    {
        incentiveName: {
            type: DataTypes.STRING,
        },
        incentiveDescription: {
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

export default IncentiveModel;


