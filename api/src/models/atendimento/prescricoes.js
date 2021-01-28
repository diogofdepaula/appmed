const { DataTypes, Model } = require('sequelize');
const database = require('../../database/database')
const sequelize = database.sequelize;
const Clientes = require('../cadastro/clientes')
const Medicamentos = require('../cadastro/medicamentos')
const Apresentacoes = require('../cadastro/apresentacoes')
const Posologias = require('../cadastro/posologias')

class Prescricoes extends Model { }

Prescricoes.init({
    
    continuo: {
        type: DataTypes.BOOLEAN
    },
    imprimirorientacoes: {
        type: DataTypes.BOOLEAN
    },
    emuso: {
        type: DataTypes.BOOLEAN
    },
    usoposologiapadrao: {
        type: DataTypes.BOOLEAN
    },
    orientacoes: {
        type: DataTypes.TEXT,
    },
    posologianaopadrao: {
        type: DataTypes.TEXT,
    },
    quantidadenaopadrao: {
        type: DataTypes.STRING,
    },
    formanaopadrao: {
        type: DataTypes.STRING,
    },
    lmemes1: {
        type: DataTypes.STRING,
    },
    lmemes2: {
        type: DataTypes.STRING,
    },
    lmemes3: {
        type: DataTypes.STRING,
    },
    lmemes4: {
        type: DataTypes.STRING,
    },
    lmemes5: {
        type: DataTypes.STRING,
    },
    lmemes6: {
        type: DataTypes.STRING,
    },
    inicio: {
        type: DataTypes.DATEONLY
    },
    termino: {
        type: DataTypes.DATEONLY
    },
    motivotermico: {
        type: DataTypes.STRING,
    }
}, {
    sequelize,
    modelName: 'prescricoes'
});

// No belongsTo a forentkey fica aqui // no HasOne a chave fila lá // sempre deixa com o mais fraco que ser apagado não apaga o outro da relação
//Prescricoes.belongsTo(Clientes)
Prescricoes.belongsTo(Medicamentos) 
Prescricoes.belongsTo(Apresentacoes)
Prescricoes.belongsTo(Posologias)

module.exports = Prescricoes