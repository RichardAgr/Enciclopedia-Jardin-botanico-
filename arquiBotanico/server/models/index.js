import dbConfig from '../config/dbConfig.js';
import { Sequelize, DataTypes } from 'sequelize';
import defineProductModel from './productModel.js';

//Configuracion de nuestra base de datos
export const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        //operatorsAliases: false,
        logging: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle

        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('Conectado a la base de datos')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
const Product = defineProductModel(sequelize);
db.products = defineProductModel(sequelize, DataTypes);


//Sincroniza la base de datos
db.sequelize.sync({ force: false })
.then(() => {
    console.log('Sincronizacion Completa con exito')
})
export default db;