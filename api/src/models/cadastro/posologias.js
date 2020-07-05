const { DataTypes, Model } = require('sequelize');
const database = require('../../database/database')
const sequelize = database.sequelize;

class Posologias extends Model { }

Posologias.init({
    posologia: {
        type: DataTypes.TEXT,
    },
    quantidade: {
        type: DataTypes.STRING,
    },
    forma: {
        type: DataTypes.STRING,
    }
}, {
    sequelize,
    modelName: 'posologias'
});

module.exports = Posologias;