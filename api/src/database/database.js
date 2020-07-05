const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'C:/Projetos/appmed/api/src/database/appmeddb.sqlite'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Conexão estabelecida com sucesso.');
    })
    .catch(err => {
        console.error('Não foi possível conectar ao banco de dados:', err);
    });

(async () => {
    await sequelize
        .sync()
        .then(() => {
            const MedicamentosData = require('./initialdata/MedicamentoData')
            const CID10 = require('./initialdata/CID10Data')
        })
})();

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

// sequelize
// .sync()
// .then(() => {
//     const MedicamentosData = require('./initialdata/MedicamentoData')
//     const CID10 = require('./initialdata/CID10Data')
// })