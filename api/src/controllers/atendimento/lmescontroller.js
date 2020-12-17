const Lmes = require('../../models/atendimento/lmes')
const Prescricoes = require('../../models/atendimento/prescricoes')
const Relatorios = require('../../models/atendimento/relatorios')
const Apresentacoes = require('../../models/cadastro/apresentacoes')
const Medicamentos = require('../../models/cadastro/medicamentos')
const Posologias = require('../../models/cadastro/posologias')

exports.Insert = (req, res, next) => {

    Lmes.create(
        req.body, {
        include: [Prescricoes, Relatorios] // quando cria uma lme presume-se que virá com uma nova prescricao também
    }).then(lme => {
        if (lme) {
            res.send("sucesso do cadastro do LME")
        } else {
            res.send("inssucesso do cadastro do LME")
        }
    }).catch(error => next(error))
}

exports.SearchAllFat = (req, res, next) => {
    const id = req.params.id;
    Lmes.findAll({
        where: { clienteId: id }, include: [
            Relatorios,
            {
                model: Prescricoes,
                include: [Apresentacoes, Medicamentos, Posologias],
                required: true
            }
        ]
    })
        .then((lme) => {
            return res.json(lme)
        })
}

exports.SearchAllFit = (req, res, next) => {
    const id = req.params.id;
    Lmes.findAll({ where: { clienteId: id } })
        .then((lme) => {
            return res.json(lme)
        })
}

exports.SearchOne = (req, res, next) => {
    const id = req.params.id;
    // findOne não trás os includes
    Lmes.findAll({ where: { id: id }, include: [Relatorios, Prescricoes] })
        .then((lmes) => {
            return res.json(lmes)
        })
}

exports.Update = (req, res, next) => {

    const idlme = req.params.id;
    Lmes.update(
        req.body, { where: { id: idlme } }
    ).then((data) => {
        req.body.prescricoes.map(presc => {
            if (presc.id === undefined) {
                Prescricoes.create(presc)
            } else {
                Prescricoes.update(
                    presc, { where: { id: presc.id } }
                )
            }
        })
        if (req.body.relatorio !== null) {
            Relatorios.update(
                req.body.relatorio, { where: { id: req.body.relatorio.id } }
            )
        }
    }).then((data) => {
        return res.json(data)
    })
}

exports.Delete = (req, res, next) => {
    const id = req.params.id;
    Lmes.findByPk(id)
        .then(lme => {
            lme.destroy(req.body, { where: { id: id }, })
        }).then((lme) => {
            return res.json(lme)
        })
}