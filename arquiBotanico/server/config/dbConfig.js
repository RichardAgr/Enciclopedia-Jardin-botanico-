// dbConfig.js
import { Sequelize } from 'sequelize';
import {db_HOST,db_NAME,db_PASSWORD,db_USER,db_PORT} from '../src/config.js'
const dbConfig = {
    HOST: db_HOST,
    USER: db_USER,
    PASSWORD: db_PASSWORD,
    DB: db_NAME,
    dialect: 'mysql',
    port:db_PORT,
    
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
