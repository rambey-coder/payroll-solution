import Sequelize from 'sequelize';
import db from '../configs/Database.js';
import UserModel from './UserModel.js';
import EmployeeModel from './EmployeeModel.js';
import DepartmentModel from './DepartmentModel.js';
import PositionModel from './PositionModel.js';
import TaxModel from './TaxModel.js';
import IncentiveModel from './IncentiveModel.js';
import DeductionModel from './DeductionModel.js';

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
    Tax: TaxModel,
    Incentive: IncentiveModel,
    Deduction: DeductionModel,
    sequelize: db,
    Sequelize
};

export default models;
