import React, { useState } from 'react'
import { Container, Form, Button, Col, Row } from 'react-bootstrap'

export default function PrescricaoVarSet(props) {

    const [variaveis, setvariaveis] = useState({
        continuo: false, // optei para deixar como false como padrão. Se resolver mudar para true como padrão então deixe '' aqui e true lá no model
        imprimirorientacoes: false,
        orientacoes: '',
        inicio: new Date().toISOString().slice(0, 10), //"yyyy-MM-dd"
    })

    const handleChange = event => {
        setvariaveis({ ...variaveis, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <h5>Defina as outras variáveis</h5>
            <Container>
                <Form>
                    <Row>

                        <Col>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    label="Contínuo"
                                    name="continuo"
                                    value={variaveis.continuo}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicImprimir">
                                <Form.Check
                                    className="mt-2"
                                    type="checkbox"
                                    label="Imprimir orientações"
                                    name="imprimirorientacoes"
                                    value={variaveis.imprimirorientacoes}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Control
                                className="mt-2"
                                type="date"
                                name="inicio"
                                value={variaveis.inicio}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control
                                className="mt-2"
                                as="textarea"
                                rows="5"
                                name="orientacoes"
                                placeholder="Orientações adicionais"
                                value={variaveis.orientacoes}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                </Form>
            </Container>
            <Container fluid className="mt-2">
                <Button
                    variant="outline-primary"
                    onClick={props.passVariaveis(variaveis, false)}
                >Encerrar
                </Button>
                <Button
                    className="ml-2"
                    variant="outline-primary"
                    onClick={props.passVariaveis(variaveis, true)}
                >vincular a uma LME
                </Button>
            </Container>
        </div>
    )
}