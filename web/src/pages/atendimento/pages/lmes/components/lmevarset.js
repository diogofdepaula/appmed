import React, { useContext } from 'react';
import { Accordion, Button, Card, Container, Form } from 'react-bootstrap';
import { LMEContext } from '../insert';

export default function LMEVarSet(props) {

    const { lmeContext, setLmeContext, setStepContext } = useContext(LMEContext)

    const handleChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.name === 'tratamentoprevio' ? target.checked : target.name === 'atestadocapacidade' ? target.checked : target.value;;
        setLmeContext({ ...lmeContext, [name]: value })
    }

    return (
        <div>
            <Container>
                <Form>
                    <Form.Group>
                        <Form.Label>História clínica</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows="4"
                            id="anamnese"
                            name="anamnese"
                            placeholder="Insira os dados clínicos"
                            value={lmeContext.anamnese}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Editar outras variáveis
                        </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <div>
                                        <Form.Group controlId="formBasicCheckboxA">
                                            <Form.Check
                                                type="checkbox"
                                                label="Tratamento Prévio"
                                                name="tratamentoprevio"
                                                value={lmeContext.tratamentoprevio}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                        {lmeContext.tratamentoprevio &&
                                            <Form.Group>
                                                <Form.Control
                                                    type="text"
                                                    id="tratamentopreviotexto"
                                                    name="tratamentopreviotexto"
                                                    placeholder="Descrever tratamentos prévios"
                                                    value={lmeContext.tratamentopreviotexto}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        }
                                        <Form.Group controlId="formBasicCheckboxB">
                                            <Form.Check
                                                type="checkbox"
                                                label="Atestado de capacidade"
                                                name="atestadocapacidade"
                                                value={lmeContext.atestadocapacidade}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Preenchido por</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="preenchidopor"
                                                name="preenchidopor"
                                                placeholder="Preenchido por"
                                                value={lmeContext.preenchidopor}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>CPF do preenchedor</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="preenchidoporCPF"
                                                name="preenchidoporCPF"
                                                placeholder="CPF"
                                                value={lmeContext.preenchidoporCPF}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Raça</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="raca"
                                                name="raca"
                                                placeholder="raca"
                                                value={lmeContext.raca}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Form>
            </Container>
            <Container fluid className="mt-2">
                <Button
                    variant="outline-primary"
                    onClick={() => {
                        setLmeContext(lmeContext)
                        setStepContext(0)                     
                     }}
                >Encerrar
                </Button>
                <Button
                    className="ml-2"
                    variant="outline-primary"
                    onClick={() => {
                        setLmeContext(lmeContext)
                        setStepContext(41)                     
                     }}
                >preencher Relatório
                </Button>
            </Container>
        </div>
    )
}