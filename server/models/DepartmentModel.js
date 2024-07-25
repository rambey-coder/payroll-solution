import UserModel from './UserModel.js';
import { Sequelize } from 'sequelize';
import db from '../configs/Database.js';

const { DataTypes } = Sequelize;

const DepartmentModel = db.define(
    'department',
    {
        departmentName: {
            type: DataTypes.STRING,
        },
        departmentDescription: {
            type: DataTypes.STRING
        }
    },
    {
        freezeTableName: true,
    }
);

(async () => {
    await db.sync();
  })();  

export default DepartmentModel;


