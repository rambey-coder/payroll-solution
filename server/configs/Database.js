import { Sequelize } from 'sequelize';


const db = new Sequelize(
  'infonom1_payroll',
  'infonom1_infonom',
  'infonomicsng',
  {
    dialect: 'mysql',
    host: '176.74.18.130',
    port: 3306,
    logging: false
    // host: process.env.DB_HOST,
    // port: process.env.DB_PORT,
  }
);

export default db;