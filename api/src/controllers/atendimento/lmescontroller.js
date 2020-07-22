const Lmes = require('../../models/atendimento/lmes')
const Prescricoes = require('../../models/atendimento/prescricoes')
const Relatorios = require('../../models/atendimento/relatorios')

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

exports.SearchAll = (req, res, next) => {
    const id = req.params.id;
    //Lmes.findAll({ where: { clienteId: idcliente }, include: [Relatorios, Prescricoes,] })
    Lmes.findAll({ where: { clienteId: id } })
        .then((lme) => {
            return res.json(lme)
        })
}

exports.SearchOne = (req, res, next) => {
    const id = req.params.id;
    Lmes.findAll({ where: { id: id }, include: [Relatorios, Prescricoes] })
        .then((lmes) => {
            return res.json(lmes)
        })
}

exports.Update = (req, res, next) => {

    console.log('req.body', req.body)

    const idlme = req.params.id;
    Lmes.update(
        req.body, { where: { id: idlme } }
    ).then((data) => { 
        req.body.prescricoes.map(presc => {
            Prescricoes.update(
                presc, { where: { id: presc.id } }
            ).then((data) => {
                console.log('data do update prescricao', data )
            })
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