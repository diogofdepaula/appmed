const { DataTypes, Model } = require('sequelize');
const database = require('../../database/database')
const sequelize = database.sequelize;
const Clientes = require('../cadastro/clientes')
const Relatorios = require('./relatorios')
const Prescricoes = require('./prescricoes')

class Lmes extends Model { }

Lmes.init({
    cid10: {
        type: DataTypes.STRING 
    },
    // optei por não fazer por chave estrangeira para ele não ter que fazer busca no BD toda vez 
    // que chamar uma LME. O tabela de CID ficou com 12500 linhas. 
    // como o a tabela CID é estática (não irá mudar nada do que está lá) e como 
    // o CID da LME é estático (não é editável - o que está definido será definido. se precisar mudar 
    // precisará fazer um nova LME) , optei por deixar fixo, tanto o CID como diagnóstico
    diagnostico: {
        type: DataTypes.STRING
    },
    anamnese: {
        type: DataTypes.TEXT
    },
    tratamentoprevio: {
        type: DataTypes.BOOLEAN
    },
    tratamentopreviotexto: {
        type: DataTypes.TEXT
    },
    atestadocapacidade: {
        type: DataTypes.BOOLEAN
    },
    preenchidopor: {
        type: DataTypes.STRING,
    },
    preenchidoporCPF: {
        type: DataTypes.STRING,
    },
    raca: {
        type: DataTypes.STRING,
    }
}, {
    sequelize,
    modelName: 'lmes'
});

//Lmes.belongsTo(Clientes) 
Lmes.hasOne(Relatorios, {onDelete: 'cascade'})
Lmes.hasMany(Prescricoes, {onDelete: 'cascade'})

module.exports = Lmes