import React, { useContext } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { PrescricaoEditorContext, MedicamentoEditorContext } from '../editor'

export default function PrescricaoVarSet(props) {

    const { prescricaoContext, setPrescricaoContext, setStepContext } = useContext(PrescricaoEditorContext)
    const { medicamentoContext } = useContext(MedicamentoEditorContext)

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
                                    checked={prescricaoContext.continuo}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicImprimir">
                                <Form.Check
                                    className="mt-2"
                                    type="checkbox"
                                    label="Imprimir orientações"
                                    name="imprimirorientacoes"
                                    checked={prescricaoContext.imprimirorientacoes}
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
                    disabled={!medicamentoContext.lme}
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

