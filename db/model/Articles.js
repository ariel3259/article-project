const { Model, DataTypes } = require("sequelize");

const sequelize = require("../db");

class Articles extends Model {}

Articles.init({
   
    description: DataTypes.STRING,
   
    price: DataTypes.DOUBLE,
   
    stock: DataTypes.INTEGER,

    state: DataTypes.TINYINT

},{

    sequelize,

    modelName: "articles"

});

module.exports = Articles;