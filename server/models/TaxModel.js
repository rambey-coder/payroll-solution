import UserModel from './UserModel.js';
import { Sequelize } from 'sequelize';
import db from '../configs/Database.js';

const { DataTypes } = Sequelize;

const TaxModel = db.define(
    'Tax',
    {
        taxName: {
            type: DataTypes.STRING,
        },
        taxDescription: {
            type: DataTypes.STRING
        },
        taxRate:{
            type: DataTypes.DECIMAL
        }
    },
    {
        freezeTableName: true,
    }
);

(async () => {
    await db.sync();
  })();  

export default TaxModel;


