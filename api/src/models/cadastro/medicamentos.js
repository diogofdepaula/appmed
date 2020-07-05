const { DataTypes, Model } = require('sequelize');
const database = require('../../database/database')
const sequelize = database.sequelize;
const Nomescomerciais = require('./nomescomerciais')
const Apresentacoes = require('./apresentacoes')
const Posologias = require('./posologias')

class Medicamentos extends Model { }

Medicamentos.init({
    farmaco: {
        type: DataTypes.STRING,
    },
    orientacoes: {
        type: DataTypes.TEXT,
    },
    abreviatura: {
        type: DataTypes.STRING,
    },
    lme: {
        type: DataTypes.BOOLEAN,
    },
    controlado: {
        type: DataTypes.BOOLEAN,
    },
    favorito: {
        type: DataTypes.BOOLEAN,
    },
    classe: {
        type: DataTypes.STRING,
    }
}, {
    sequelize,
    modelName: 'medicamentos'
});

Medicamentos.hasMany(Nomescomerciais);
Medicamentos.hasMany(Apresentacoes);
Medicamentos.hasMany(Posologias);

module.exports = Medicamentos;