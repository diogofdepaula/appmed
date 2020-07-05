const { DataTypes, Model } = require('sequelize');
const database = require('../../database/database')
const sequelize = database.sequelize;

class Nomescomerciais extends Model { }

Nomescomerciais.init({
    nomefantasia: {
        type: DataTypes.STRING,
    }
}, {
    sequelize,
    modelName: 'nomescomerciais'
});

module.exports = Nomescomerciais;