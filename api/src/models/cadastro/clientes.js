const { DataTypes, Model } = require('sequelize');
const database = require('../../database/database')
const sequelize = database.sequelize;

class Clientes extends Model { }

Clientes.init({
    nome: {
        type: DataTypes.STRING,
    },
    nascimento: {
        type: DataTypes.DATEONLY
    },
    sexo: {
        type: DataTypes.BOOLEAN  // 0 = F  1 = M
    },
    peso: {
        type: DataTypes.STRING,
    },
    altura: {
        type: DataTypes.STRING,
    },
    endereco: {
        type: DataTypes.STRING,
    },
    telefone: {
        type: DataTypes.STRING,
    },
    celular: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    cns: {
        type: DataTypes.STRING,
    },
    cpf: {
        type: DataTypes.STRING
    },
    mae: {
        type: DataTypes.STRING,
    }
}, {
    sequelize,
    modelName: 'clientes'
});

module.exports = Clientes;