import db from '../configs/Database.js';
import { accesses } from '../data/InitialAccess.js';
import AccessModel from '../models/AccessModel.js';

const initializeData = async () => {
    try {
        await db.sync();
    
        for (const accessName of accesses) {
          const [access, created] = await AccessModel.findOrCreate({
            where: { accessName: accessName },
            defaults: { accessName: accessName }
          });
    
          if (created) {
            console.log(`Access "${accessName}" was created.`);
          } else {
            console.log(`Access "${accessName}" already exists.`);
          }
        }
      } catch (error) {
        console.error('Error initializing data:', error);
      } finally {
        await db.close();
      }
};

initializeData();
