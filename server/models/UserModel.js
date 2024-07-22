import { Sequelize } from 'sequelize';
import db from '../configs/Database.js';
import EmployeeModel from './EmployeeModel.js';

const { DataTypes } = Sequelize;

const UserModel = db.define(
    'users',
    {
        first_name: {
            type: DataTypes.STRING,
        },
        last_name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        confirmPassword: {
            type: DataTypes.STRING,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt:{
            type: DataTypes.DATE
        }
    },
    {
        freezeTableName: true,
    }
);

(async () => {
    await db.sync();
  })();  


export default UserModel;

