import Sequelize from 'sequelize';
import db from '../configs/Database.js';
import UserModel from './UserModel.js';
import EmployeeModel from './EmployeeModel.js';
import DepartmentModel from './DepartmentModel.js';
import PositionModel from './PositionModel.js';
import TaxModel from './TaxModel.js';
import IncentiveModel from './IncentiveModel.js';
import DeductionModel from './DeductionModel.js';
import PositionAccessModel from './PositionAccessModel.js';
import AccessModel from './AccessModel.js';

UserModel.hasMany(EmployeeModel, {
    as: 'employees'
});

EmployeeModel.belongsTo(UserModel, {
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

PositionAccessModel.belongsTo(PositionModel,
    {
    as: 'position'}
)
PositionModel.hasMany(PositionAccessModel,
    {foreignKey: 'positionId',
    as: 'positionAccess'}
)
PositionAccessModel.belongsTo(AccessModel,
    {
    as: 'access'}
)


const models = {
    User: UserModel,
    Employee: EmployeeModel,
    Department: DepartmentModel,
    Position: PositionModel,
    Tax: TaxModel,
    Incentive: IncentiveModel,
    Deduction: DeductionModel,
    PositionAccess: PositionAccessModel,
    Access: AccessModel,
    sequelize: db,
    Sequelize
};


export default models;
