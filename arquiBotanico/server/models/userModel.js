// productModel.js
import { Sequelize, DataTypes } from 'sequelize';

const defineUserModel = (sequelize) => {
  const User = sequelize.define("usuarios", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  });

  return User;
};

export default defineUserModel;
