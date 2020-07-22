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

    const idlme = req.params.id;
    Lmes.update(
        req.body, { where: { id: idlme } }
    ).then((lme) => {
        return res.json(lme)
    })


    ELE ATUALIZA A LME, MAS NÃO ATUALIZA AS INCLUDES
    VEM DE LÁ DA WEB UM ARRAY DE PRESCRICOES E UM RELATORIO (lme.relatorio)


    // const id = req.params.id;
    // Lmes.findByPk(id)
    //     .then(lme => {
    //         lme.update(
    //             req.body,
    //             { where: { id: id } })
    //     }).then((lme) => {
    //         return res.json(lme)
    //     })
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