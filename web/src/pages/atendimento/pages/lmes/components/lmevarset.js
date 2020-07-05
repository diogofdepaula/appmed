import React, { useState } from 'react';
import { Accordion, Button, Card, Container, Form } from 'react-bootstrap';

export default function LMEDataSet(props) {

    const [lme, setlme] = useState(props.lme)

    const handleChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.name === 'tratamentoprevio' ? target.checked : target.name === 'atestadocapacidade' ? target.checked : target.value;;
        setlme({ ...lme, [name]: value })
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
                            value={lme.anamnese}
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
                                                value={lme.tratamentoprevio}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                        {lme.tratamentoprevio &&
                                            <Form.Group>
                                                <Form.Control
                                                    type="text"
                                                    id="tratamentopreviotexto"
                                                    name="tratamentopreviotexto"
                                                    placeholder="Descrever tratamentos prévios"
                                                    value={lme.tratamentopreviotexto}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        }
                                        <Form.Group controlId="formBasicCheckboxB">
                                            <Form.Check
                                                type="checkbox"
                                                label="Atestado de capacidade"
                                                name="atestadocapacidade"
                                                value={lme.atestadocapacidade}
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
                                                value={lme.preenchidopor}
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
                                                value={lme.preenchidoporCPF}
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
                                                value={lme.raca}
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
            {/* COLOCAR UM IF SE A MEDICAÇÃO FOR SE RELATÓRIO APARECER SOMENTE O BOTAO PREENCHER RELATÓRIO
                    SE NÃO FOR COLOCAR SOMENTE O BOTÃO Encerrar
                    VOU CONFIRGUAR O BOTÃO ENCERRAR POIS O RELATÓRIO AINDA NÃO FOI DEFINIDO */}
            <Container fluid className="mt-2">
                <Button
                    variant="outline-primary"
                    onClick={props.passlme(lme, false)}
                >Encerrar
                </Button>
                <Button
                    className="ml-2"
                    variant="outline-primary"
                    onClick={props.passlme(lme, true)}
                >preencher Relatório
                </Button>
            </Container>
        </div>
    )
}