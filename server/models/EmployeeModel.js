import UserModel from './UserModel.js';
import { Sequelize } from 'sequelize';
import db from '../configs/Database.js';

const { DataTypes } = Sequelize;

const EmployeeModel = db.define(
    'employee',
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
        profilePicture: {
            type: DataTypes.STRING,
        },
        address: {
            type: DataTypes.STRING,
        },
        department: {
            type: DataTypes.STRING,
        },
        sex: {
            type: DataTypes.STRING,
        },
        role: {
            type: DataTypes.STRING,
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        updatedAt:{
            type: DataTypes.DATE,
            allowNull: true
        }
    },
    {
        freezeTableName: true,
    }
);

(async () => {
    await db.sync();
  })();  

export default EmployeeModel;


