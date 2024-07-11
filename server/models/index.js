import Sequelize from 'sequelize';
import db from '../configs/Database.js';
import UserModel from './UserModel.js';
import EmployeeModel from './EmployeeModel.js';
import DepartmentModel from './DepartmentModel.js';
import PositionModel from './PositionModel.js';

UserModel.hasMany(EmployeeModel, {
    foreignKey: 'userId',
    as: 'employees'
});

EmployeeModel.belongsTo(UserModel, {
    foreignKey: 'userId',
    as: 'user'
});

PositionModel.belongsTo(DepartmentModel, {
    foreignKey: "departmentId",
    as: "department"
})

DepartmentModel.hasMany(PositionModel, {
    foreignKey: 'departmentId',
    as: 'positions'
});

PositionModel.hasMany(EmployeeModel,
    {foreignKey: 'positionId',
    as: 'employees'}
)

EmployeeModel.belongsTo(PositionModel,
    {foreignKey: 'positionId',
    as: 'position'}
)

const models = {
    User: UserModel,
    Employee: EmployeeModel,
    Department: DepartmentModel,
    Position: PositionModel,
    sequelize: db,
    Sequelize
};

export default models;
