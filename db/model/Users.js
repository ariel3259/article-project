const {Model, DataTypes} = require("sequelize");

const sequelize = require("../db");

class Users extends Model { }

Users.init({

    name:  DataTypes.STRING,

    last_name: DataTypes.STRING,

    email:  {
        type: DataTypes.STRING,
        unique: true
    },

    password: DataTypes.STRING

},{

    sequelize,

    modelName: "users"

});

module.exports = Users;