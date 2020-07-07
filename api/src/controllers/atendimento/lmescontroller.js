const Lmes = require('../../models/atendimento/lmes')
const Prescricoes = require('../../models/atendimento/prescricoes')
const Relatorios = require('../../models/atendimento/relatorios')

exports.Insert = (req, res, next) => {

    Lmes.create(
        req.body, {
        include: [Prescricoes, Relatorios] // quando cria uma lme presume-se que virá com uma nova prescricao também
    }
    ).then(lme => {
        if (lme) {
            res.send("sucesso do cadastro do LME")
        } else {
            res.send("inssucesso do cadastro do LME")
        }
    }).catch(error => next(error))
}

exports.SearchAll = (req, res, next) => {
    const idcliente = req.params.idcliente;
    //Lmes.findAll({ where: { clienteId: idcliente }, include: [Relatorios, Prescricoes,] })
    Lmes.findAll({ where: { clienteId: idcliente } })
        .then((lmes) => {
            return res.json(lmes)
        })
}

exports.SearchOne = (req, res, next) => {
    const id = req.params.id;
    Lmes.findByPk(id)
        .then((lme) => {
            return res.json(lme)
        })
}

exports.Update = (req, res, next) => {

    // presume-se que já tenha prescrições na LME

    const id = req.params.id;
    Lmes.findByPk(id)
        .then(lme => {
            lme.update(
                req.body,
                { where: { id: id } })
        }).then((lme) => {
            return res.json(lme)
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