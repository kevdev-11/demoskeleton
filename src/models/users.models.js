//en esta sección colocamos son las "CREATE TABLE" que son
// las que creamos así en terminal en PSQL shell
// Aqui solamente estamos transcribiendo lo del lenguaje SQL
// Al lenguaje JS, a continuación es por tanto lo mismo que se define en dbdiagram.io:
const db = require("../utils/database");
const {DataTypes, BOOLEAN} = require('sequelize');

const Users = db.define('users', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    username:{
        type: DataTypes.STRING(20),
        allowNull:false,
    },
    lastname:{
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING(20),
        unique: true,
        allowNull:false,
        validate: {
            isEmail: true,
        }
    },
    isConfirmed:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field: "is_confirmed"
     },
    password: {
        type: DataTypes.STRING(10),
        allowNull: false,
    }
});

module.exports = Users;