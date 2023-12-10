// dbConfig.js
import { Sequelize } from 'sequelize';
const dbConfig = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '1234',
    DB: 'jardin',
    dialect: 'mysql',
    
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
        
    },
    dialectOptions: {
        charset: 'utf8',
    },
};

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        },
        dialectOptions: {
            charset: dbConfig.dialectOptions.charset,
        },
    }
);

export { sequelize }; 
export default dbConfig;
