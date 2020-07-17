import React, { useContext } from 'react'
import { Container, Form, Button, Col, Row } from 'react-bootstrap'
import { PrescricaoContext } from '../insert'

export default function PrescricaoVarSet(props) {

    const { prescricaoContext, setPrescricaoContext, setStepContext } = useContext(PrescricaoContext)

    const handleChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.name === 'continuo' ? target.checked : target.name === 'imprimirorientacoes' ? target.checked : target.value;
        setPrescricaoContext({ ...prescricaoContext, [name]: value })
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
                                    value={prescricaoContext.continuo}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicImprimir">
                                <Form.Check
                                    className="mt-2"
                                    type="checkbox"
                                    label="Imprimir orientações"
                                    name="imprimirorientacoes"
                                    value={prescricaoContext.imprimirorientacoes}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Control
                                className="mt-2"
                                type="date"
                                name="inicio"
                                value={prescricaoContext.inicio}
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
                                value={prescricaoContext.orientacoes}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                </Form>
            </Container>
            <Container fluid className="mt-2">
                <Button
                    variant="outline-primary"
                    onClick={() => {
                        setPrescricaoContext(prescricaoContext)
                        setStepContext(0)
                    }}
                >{!prescricaoContext.id ? 'Encerrar' : 'Atualizar'}
                </Button>
                <Button
                    className="ml-2"
                    variant="outline-primary"
                    onClick={() => {
                        setPrescricaoContext(prescricaoContext)
                        setStepContext(51)
                    }}
                >{!prescricaoContext.id ? 'Vincular a uma LME' : 'Editar LME'}
                </Button>
            </Container>
        </div >
    )
}

