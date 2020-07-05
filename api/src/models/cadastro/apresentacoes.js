const { DataTypes, Model } = require('sequelize');
const database = require('../../database/database')
const sequelize = database.sequelize;

class Apresentacoes extends Model { }

Apresentacoes.init({
    descricao: {
        type: DataTypes.STRING,
        
    },
    uso: {
        type: DataTypes.STRING,
    }
}, {
    sequelize,
    modelName: 'apresentacoes'
});

module.exports = Apresentacoes;