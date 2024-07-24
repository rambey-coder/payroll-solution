import { Sequelize } from 'sequelize';


// const db = new Sequelize('school', 'root', 'Ajibolas7', {
//   host: '127.0.0.1',
//   dialect: 'mysql',
//   port: 3307,
// });

const db = new Sequelize( 
  'infonom1_payroll',
  'infonom1_infonom',
  'infonomicsng', {
   dialect: 'mysql',
    host: '176.74.18.130',
    // host: '127.0.0.1',
    port: 3306,
    logging: true
});
// const db = new Sequelize('school', 'root', '', {
//   host: '127.0.0.1',
//   dialect: 'mysql',
//   port: 3306,
// });
// try {
//     await db.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// db.close();

export default db;
