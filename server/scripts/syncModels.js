import db from "../configs/Database.js";


const syncModels = async () => {
  try {
    await db.sync({ alter: true });
    console.log('Models synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing models:', error);
  } finally {
    await db.close();
  }
};

syncModels();