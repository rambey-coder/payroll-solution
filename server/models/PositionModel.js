import UserModel from './UserModel.js';
import { Sequelize } from 'sequelize';
import db from '../configs/Database.js';

const { DataTypes } = Sequelize;

const PositionModel = db.define(
    'position',
    {
        title: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING
        },
        baseSalary:{
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

export default PositionModel;


