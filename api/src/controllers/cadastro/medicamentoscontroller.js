const Medicamentos = require('../../models/cadastro/medicamentos')
const Apresentacoes = require('../../models/cadastro/apresentacoes')
const Nomescomerciais = require('../../models/cadastro/nomescomerciais')
const Posologias = require('../../models/cadastro/posologias')

exports.Insert = (req, res, next) => {

    Medicamentos.create(
        req.body, {
        include: [Nomescomerciais, Apresentacoes, Posologias]
    }).then(medicamento => {
        if (medicamento) {
            res.send("sucesso do cadastro do medicamento")
        } else {
            res.send("inssucesso do cadastro do medicamento")
        }
    }).catch(error => next(error))
}

exports.SearchAll = (req, res, next) => {
    Medicamentos.findAll({ include: [Nomescomerciais] })
        .then((medicamentos) => {
            return res.json(medicamentos)
        }).catch(error => next(error))
}

exports.SearchAllShort = (req, res, next) => {
    Medicamentos.findAll({
        attributes: ['id', 'farmaco', 'abreviatura', 'favorito']
    }).then((medicamentos) => {
        return res.json(medicamentos)
    }).catch(error => next(error))
}

exports.SearchOne = (req, res, next) => {
    const id = req.params.id;
    Medicamentos.findByPk(id, { include: [Nomescomerciais, Apresentacoes, Posologias] })
        .then((medicamento) => {
            return res.json(medicamento)
        })
}

exports.Update = (req, res, next) => {

    const id = req.params.id;
    Medicamentos.findByPk(id)
        .then(medicamento => {
            medicamento.update(
                req.body,
                { where: { id: id } })
        }).then(medicamento => {

            //Nomes comerciais
            req.body.nomescomerciais.map(nc => {
                if (nc.medicamentoId !== '') {
                    //Atualizando Nomes comerciais
                    Nomescomerciais.upsert({
                        id: nc.id,
                        nomefantasia: nc.nomefantasia,
                        medicamentoId: id
                    })
                } else {
                    //Deletando Nomes comerciais 
                    Nomescomerciais.destroy({
                        where: {
                            id: nc.id
                        }
                    })
                }
            })

            //Apresentações
            req.body.apresentacoes.map(ap => {
                if (ap.medicamentoId !== '') {
                    //Atualizando Apresentações
                    Apresentacoes.upsert({
                        id: ap.id,
                        descricao: ap.descricao,
                        uso: ap.uso,
                        medicamentoId: id
                    })
                } else {
                    //Deletando Apresentações
                    Apresentacoes.destroy({
                        where: {
                            id: ap.id
                        }
                    })
                }
            })

            //Posologias
            req.body.posologias.map(pp => {
                if (pp.medicamentoId !== '') {
                    //Atualizando Posologias
                    Posologias.upsert({
                        id: pp.id,
                        posologia: pp.posologia,
                        quantidade: pp.quantidade,
                        forma: pp.forma,
                        medicamentoId: id
                    })
                } else {
                    //Deletando Nomes comerciais 
                    Posologias.destroy({
                        where: {
                            id: pp.id
                        }
                    })
                }
            })
        }).then((medicamento) => {
            return res.json(medicamento)
        })
}

exports.Delete = (req, res, next) => {
    const id = req.params.id;
    Medicamentos.findByPk(id)
        .then(medicamento => {
            medicamento.destroy({ where: { id: id } })
        }).then((medicamento) => {
            return res.json(medicamento)
        })
}