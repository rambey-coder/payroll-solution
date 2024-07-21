import { Sequelize } from 'sequelize';
import db from '../configs/Database.js';

const { DataTypes } = Sequelize;

const AccessModel = db.define(
    'Access',
    {
        accessName: {
            type: DataTypes.STRING,
        }
    },
    {
        freezeTableName: true,
    }
);

(async () => {
    await db.sync();
  })();  

export default AccessModel;


