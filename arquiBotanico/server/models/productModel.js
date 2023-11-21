//Creamos la tabla productos con sus atributos
module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define("Plantas", {
       
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imagen: {
            type: DataTypes.STRING
        },
        descripcion: {
            type: DataTypes.TEXT
        },
    
    })

    return Product

}