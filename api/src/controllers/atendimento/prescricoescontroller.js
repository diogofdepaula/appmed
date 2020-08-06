const Prescricoes = require('../../models/atendimento/prescricoes')
const Medicamentos = require("../../models/cadastro/medicamentos")
const Apresentacoes = require("../../models/cadastro/apresentacoes")
const Posologias = require("../../models/cadastro/posologias")
const { findByPk, findAll } = require('../../models/cadastro/apresentacoes')

exports.Insert = (req, res, next) => {

    Prescricoes.create(req.body)
        .then(prescricao => {
            if (prescricao) {
                res.send("sucesso do cadastro do prescricao")
            } else {
                res.send("inssucesso do cadastro do prescricao")
            }
        }).catch(error => next(error))
}

exports.SearchAll = (req, res) => {
    const id = req.params.id; // nesse caso é o idCliente 
    Prescricoes.findAll({ where: { clienteId: id }, include: [Apresentacoes, Medicamentos, Posologias] })
        .then((prescricao) => {
            return res.json(prescricao)
        })
}


// dever ter o mesmo problemas que no lmecontroller em que o findByPk vem sem includes (não tem como por)
// tem que fazer um findAll e lá na web tem que colocar [0], pois ele manda uma array de um
// não adianta colocar aqui [0] pois ele continua mandando uma array
exports.SearchOne = (req, res) => {
    const id = req.params.id;
    Prescricoes.findByPk(id)
        .then((prescricao) => {
            return res.json(prescricao)
        })
}

exports.Update = (req, res) => {
    const id = req.params.id;
    Prescricoes.update( req.body, { where: { id: id } })
        .then((prescricao) => {
            return res.json(prescricao)
        })


    // const id = req.params.id;
    // Prescricoes.findByPk(id)
    //     .then(prescricao => {
    //         prescricao.update(
    //             req.body,
    //             { where: { id: id } })
    //     }).then((prescricao) => {
    //         return res.json(prescricao)
    //     })
}

exports.Delete = (req, res) => {
    const id = req.params.id;
    Prescricoes.destroy({ where: { id: id } })
        .then((prescricao) => {
            return res.json(prescricao)
        })


    // const id = req.params.id;
    // Prescricoes.findByPk(id)
    //     .then(prescricao => {
    //         prescricao.destroy(req.body, { where: { id: id }, })
    //     }).then((prescricao) => {
    //         return res.json(prescricao)
    //     })
}