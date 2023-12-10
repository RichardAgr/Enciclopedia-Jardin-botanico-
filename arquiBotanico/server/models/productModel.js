
import { Sequelize, DataTypes } from 'sequelize';

const defineProductModel = (sequelize) => {
    const Product = sequelize.define("productos", {
        imagen: {
            type: DataTypes.STRING
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.TEXT
        },
    });

    return Product;
};

export default defineProductModel;
