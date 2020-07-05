const Prescricoes = require('../../models/atendimento/prescricoes')
const Medicamentos = require("../../models/cadastro/medicamentos")
const Apresentacoes = require("../../models/cadastro/apresentacoes")
const Posologias = require("../../models/cadastro/posologias")

exports.Insert = (req, res, next) => {

    Prescricoes.create(req.body)
        .then(prescricao => {
            if (prescricao) {
                res.send("sucesso do cadastro do prescricao")
            } else {
                res.send("inssucesso do cadastro do prescricao")
            }
        })
        .catch(error => next(error))
}

exports.SearchAll = (req, res) => {

    const idcliente = req.params.idcliente;
    Prescricoes.findAll({ where: { clienteId: idcliente }, include: [ Apresentacoes, Medicamentos, Posologias] })
        .then((prescricao) => {
            return res.json(prescricao)
        })
}

exports.SearchOne = (req, res) => {
    const id = req.params.id;
    Prescricoes.findByPk(id)
        .then((prescricao) => {
            return res.json(prescricao)
        })
}

exports.Update = (req, res) => {

    const id = req.params.id;
    Prescricoes.findByPk(id)
        .then(prescricao => {
            prescricao.update(
                req.body,
                { where: { id: id } })
        }).then((prescricao) => {
            return res.json(prescricao)
        })
}

exports.Delete = (req, res) => {
    const id = req.params.id;
    Prescricoes.findByPk(id)
        .then(prescricao => {
            prescricao.destroy(req.body, { where: { id: id }, })
        }).then((prescricao) => {
            return res.json(prescricao)
        })
}