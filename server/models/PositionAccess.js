import { Sequelize } from 'sequelize';
import db from '../configs/Database.js';

const { DataTypes } = Sequelize;

const PositionAccessModel = db.define(
    'PositionAccess',
    {

    },
    {
        freezeTableName: true,
    }
);

(async () => {
    await db.sync();
  })();  

export default PositionAccessModel;


