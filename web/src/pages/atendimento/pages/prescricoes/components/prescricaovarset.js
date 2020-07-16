import React, { useEffect, useState, useCallback } from 'react'
import { Container, Form, Button, Col, Row } from 'react-bootstrap'

export default function PrescricaoVarSet(props) {

    const [prescricao, setPrescricao] = useState(props.prescricao)
    const [validacao, setValidacao] = useState(false)
    const howcalls = props.passHowCalls

    const handleChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.name === 'continuo' ? target.checked : target.name === 'imprimirorientacoes' ? target.checked : target.value;
        setPrescricao({ ...prescricao, [name]: value })
    }

    const sendNextStep = useCallback(
        props.passNextStep(prescricao, 0),
        [prescricao, props]
    )

    useEffect(() => {
        if (validacao) {
            sendNextStep()
        }
    }, [validacao, sendNextStep])

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
                                    value={prescricao.continuo}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicImprimir">
                                <Form.Check
                                    className="mt-2"
                                    type="checkbox"
                                    label="Imprimir orientações"
                                    name="imprimirorientacoes"
                                    value={prescricao.imprimirorientacoes}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Control
                                className="mt-2"
                                type="date"
                                name="inicio"
                                value={prescricao.inicio}
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
                                value={prescricao.orientacoes}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                </Form>
            </Container>
            <Container fluid className="mt-2">
                {howcalls === 'insert' ?
                    <>
                        <Button
                            variant="outline-primary"
                            onClick={() => setValidacao(true)}
                        >Encerrar
                        </Button>
                        <Button
                            className="ml-2"
                            variant="outline-primary"
                            onClick={() => props.passNextStep(prescricao, 51)}
                        >vincular a uma LME
                        </Button>
                    </>
                    :
                    <>
                        <Button
                            variant="outline-primary"
                            onClick={() => setValidacao(true)}
                        >Atualizar
                        </Button>
                        <Button
                            className="ml-2"
                            variant="outline-primary"
                            // onClick={useCallback(
                            //     props.passNextStep(prescricao, 51),
                            //     [prescricao, props]
                            // )}
                        >Editar LME
                </Button>
                    </>
                }

            </Container>
        </div>
    )
}

