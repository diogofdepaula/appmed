import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';

function Update(props) {

    const [medicamento, setmedicamento] = useState({
        farmaco: '',
        orientacoes: '',
        abreviatura: '',
        lme: '',
        controlado: '',
        favorito: '',
        classe: '',
        nomescomerciais: [{
            nomefantasia: '',
        }].splice(1, 1),
        apresentacoes: [{
            descricao: '',
            uso: ''
        }].splice(1, 1),
        posologias: [{
            posologia: '',
            quantidade: '',
            forma: ''
        }].splice(1, 1)
    })
    const [redirect, setredirect] = useState(false)

    const classes = [
        'Analgésicos',
        'Anticonvulsivante',
        'Antidepressivo',
        'Antimicrobiano',
        'Convencional',
        'Corticóide',
        'MMCDbiológico',
        'MMCDsintético',
        'MMCDpequenamolécula',
        'Opióide',
        'Osteometabolico',
        'Suplemento',
        'Vasoativo',
        'Antiinflamatório'
    ]

    useEffect(() => {

        const { id } = props.match.params

        fetch(`http://localhost:4001/api.appmed/medicamentos/${id}`)
            .then(response => response.json())
            .then(response => setmedicamento(response))
            .catch(err => console.log(err))

    }, [props])

    const handleChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.name === 'lme' ? target.checked : target.name === 'controlado' ? target.checked : target.name === 'favorito' ? target.checked : target.value;

        setmedicamento({
            ...medicamento, [name]: value
        })
    }

    const handleChangeNomeComercial = param => event => {
        let newArr = [...medicamento.nomescomerciais]
        newArr[param.index].nomefantasia = event.target.value
        setmedicamento({ ...medicamento, nomescomerciais: newArr })
    }

    const handleAddNomeComercial = () => {

        let ncnomefantasia = document.getElementById('nomefantasia')
        let ncvariaveis = {
            nomefantasia: ncnomefantasia.value,
        }
        let nc = medicamento.nomescomerciais.concat(ncvariaveis)

        setmedicamento({ ...medicamento, nomescomerciais: nc })

        ncnomefantasia.value = ""
    }

    const handleDeleteNomecomercial = param => event => {
        // método usado para retirar da lista
        //let nc = medicamento.nomescomerciais.filter((w, ind) => ind !== param.index)
        //setmedicamento({ ...medicamento, nomescomerciais: nc })

        // optei por deixar o medicamentoId = null para deletar (destroir) lá na API

        let newArr = [...medicamento.nomescomerciais]
        newArr[param.index].medicamentoId = ''
        setmedicamento({ ...medicamento, nomescomerciais: newArr })


    }

    const handleChangeApresentacao = param => event => {
        let newArr = [...medicamento.apresentacoes]
        newArr[param.index] = { ...newArr[param.index], [event.target.name]: event.target.value }
        setmedicamento({ ...medicamento, apresentacoes: newArr })
    }

    const handleAddApresentacao = () => {

        let apdescricao = document.getElementById('descricao')
        let apuso = document.getElementById('uso')
        let apvariaveis = {
            descricao: apdescricao.value,
            uso: apuso.value
        }
        let ap = medicamento.apresentacoes.concat(apvariaveis)

        setmedicamento({ ...medicamento, apresentacoes: ap })

        apdescricao.value = ""
        apuso.value = ""
    }

    const handleDeleteApresentacao = param => event => {
        let newArr = [...medicamento.apresentacoes]
        newArr[param.index].medicamentoId = ''
        setmedicamento({ ...medicamento, apresentacoes: newArr })
    }

    const handleChangePosologia = param => event => {
        let newArr = [...medicamento.posologias]
        newArr[param.index] = { ...newArr[param.index], [event.target.name]: event.target.value }
        setmedicamento({ ...medicamento, posologias: newArr })
    }

    const handleAddPosologia = () => {

        let ppposologia = document.getElementById('posologia')
        let ppquantidade = document.getElementById('quantidade')
        let ppforma = document.getElementById('forma')
        let ppvariaveis = {
            posologia: ppposologia.value,
            quantidade: ppquantidade.value,
            forma: ppforma.value
        }
        let pp = medicamento.posologias.concat(ppvariaveis)

        setmedicamento({ ...medicamento, posologias: pp })

        ppposologia.value = ""
        ppquantidade.value = ""
        ppforma.value = ""
    }

    const handleDeletePosologia = param => () => {
        let newArr = [...medicamento.posologias]
        newArr[param.index].medicamentoId = ''
        setmedicamento({ ...medicamento, posologias: newArr })
    }

    const handleSubmit = event => {

        event.preventDefault();

        const { id } = props.match.params

        fetch(`http://localhost:4001/api.appmed/medicamentos/${id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(medicamento)
        })
            .then(data => {
                if (data.ok) {
                    setredirect(true)
                }
            })
    }

    if (redirect) {
        return <Redirect to="/medicamentos" />
    } else {
        return (
            <div>
                <Form>
                    <h4>Cadastro de Medicamentos</h4>
                    {JSON.stringify(medicamento)}
                    <br />
                    <br />
                    <div>
                        <Row>
                            <Col sm={10}>
                                <Form.Group>
                                    <Form.Label>Fármaco</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="farmaco"
                                        placeholder="Nome do farmaco"
                                        value={medicamento.farmaco}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm={2}>
                                <Form.Group>
                                    <Form.Label>Abreviatura</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="abreviatura"
                                        placeholder="abreviatura"
                                        value={medicamento.abreviatura}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Check
                                        type="checkbox"
                                        label="LME"
                                        name="lme"
                                        value={medicamento.lme}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Check
                                        type="checkbox"
                                        label="Controlado"
                                        name="controlado"
                                        value={medicamento.controlado}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Check
                                        type="checkbox"
                                        label="Favorito"
                                        name="favorito"
                                        value={medicamento.favorito}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    {/* <Form.Label>Classe</Form.Label> */}
                                    <Form.Control
                                        as="select"
                                        name="classe"
                                        value={medicamento.classe}
                                        onChange={handleChange}
                                    >
                                        <option></option>
                                        {classes.map((cla, index) =>
                                            <option
                                                key={index}
                                            // value={cla}
                                            >{cla}
                                            </option>
                                        )}
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Orientações</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows="5"
                                        name="orientacoes"
                                        placeholder="orientacoes"
                                        value={medicamento.orientacoes}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <h4>Nomes comerciais</h4>
                        {medicamento.nomescomerciais && medicamento.nomescomerciais.map((nc, index) =>

                            nc.medicamentoId !== '' && (
                                <div key={index}>
                                    <Row>
                                        <Col sm={10}>
                                            <Form.Group>
                                                <Form.Control
                                                    type="text"
                                                    value={nc.nomefantasia}
                                                    onChange={handleChangeNomeComercial({ index })}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col sm={2}>
                                            <Button
                                                variant="primary"
                                                onClick={handleDeleteNomecomercial({ index })}
                                            >X
                                    </Button>
                                        </Col>
                                    </Row>
                                </div>
                            )
                        )}

                        <Row>
                            <Col sm={10}>
                                <Form.Group>
                                    <Form.Label>Nome Fantasia</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="nomefantasia"
                                        name="nomefantasia"
                                        placeholder="Nome comercial"
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm={2}>
                                <Button
                                    variant="primary"
                                    onClick={handleAddNomeComercial}
                                >Adicionar Nc
                                    </Button>
                            </Col>
                        </Row>

                        <h4>Apresentação</h4>

                        {medicamento.apresentacoes && medicamento.apresentacoes.map((ap, index) =>

                            ap.medicamentoId !== '' && (
                                <div key={index}>
                                    <Row>
                                        <Col sm={6}>
                                            <Form.Group>
                                                <Form.Control
                                                    type="text"
                                                    name="descricao"
                                                    value={ap.descricao}
                                                    onChange={handleChangeApresentacao({ index })}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col sm={4}>
                                            <Form.Group>
                                                <Form.Control
                                                    type="text"
                                                    name="uso"
                                                    value={ap.uso}
                                                    onChange={handleChangeApresentacao({ index })}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col sm={2}>
                                            <Button
                                                variant="primary"
                                                onClick={handleDeleteApresentacao({ index })}
                                            >X
                                    </Button>
                                        </Col>
                                    </Row>
                                </div>
                            )
                        )}

                        <Row>
                            <Col sm={6}>
                                <Form.Group>
                                    <Form.Label>Descricao</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="descricao"
                                        name="descricao"
                                        placeholder="Apresentação"
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm={4}>
                                <Form.Group>
                                    <Form.Label>Uso</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="uso"
                                        name="uso"
                                        placeholder="Uso"
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm={2}>
                                <Button
                                    variant="primary"
                                    onClick={handleAddApresentacao}
                                >Adicionar AP
                                    </Button>
                            </Col>
                        </Row>

                        <h4>Posologias</h4>

                        {medicamento.posologias && medicamento.posologias.map((pp, index) =>

                            pp.medicamentoId !== '' && (
                                <div key={index}>
                                    <Row>
                                        <Col sm={6}>
                                            <Form.Group>
                                                <Form.Control
                                                    as="textarea"
                                                    rows="4"
                                                    name="posologia"
                                                    value={pp.posologia}
                                                    onChange={handleChangePosologia({ index })}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col sm={2}>
                                            <Form.Group>
                                                <Form.Control
                                                    type="text"
                                                    name="quantidade"
                                                    value={pp.quantidade}
                                                    onChange={handleChangePosologia({ index })}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col sm={2}>
                                            <Form.Group>
                                                <Form.Label>Forma</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="forma"
                                                    value={pp.forma}
                                                    onChange={handleChangePosologia({ index })}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col sm={2}>
                                            <Button
                                                variant="primary"
                                                onClick={handleDeletePosologia({ index })}
                                            >X
                                    </Button>
                                        </Col>
                                    </Row>
                                </div>
                            )
                        )}

                        <Row>
                            <Col sm={6}>
                                <Form.Group>
                                    <Form.Label>Posologia</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows="4"
                                        id="posologia"
                                        name="posologia"
                                        placeholder="Posologia Padronizada"
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm={2}>
                                <Form.Group>
                                    <Form.Label>Quantidade</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="quantidade"
                                        name="quantidade"
                                        placeholder="Quantidade"
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm={2}>
                                <Form.Group>
                                    <Form.Label>Forma</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="forma"
                                        name="forma"
                                        placeholder="Forma"
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm={2}>
                                <Button
                                    variant="primary"
                                    onClick={handleAddPosologia}
                                >Adicionar PP
                                    </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Button
                                variant="primary"
                                type="submit"
                                onClick={handleSubmit}
                            >Salvar
                            </Button>
                            <Link to='/medicamentos'>
                                <Button type="button" className="ml-2">Cancelar</Button>
                            </Link>
                        </Row>
                    </div>

                </Form>
            </div >
        );
    }
}

export default Update