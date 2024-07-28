import { Sequelize } from 'sequelize';
import db from '../configs/Database.js';
import EmployeeModel from './EmployeeModel.js';

const { DataTypes } = Sequelize;

const UserModel = db.define(
    'users',
    {
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        employeeId: {
            type: DataTypes.STRING,
        },    
    },
    {
        freezeTableName: true,
    }
);

(async () => {
    await db.sync();
  })();  


export default UserModel;

