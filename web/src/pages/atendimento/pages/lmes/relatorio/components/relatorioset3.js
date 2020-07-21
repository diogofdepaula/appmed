import React, { useContext } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { RelatorioContent } from '../relatoriovarset'

export default function RelatorioSet3(props) {

    const { relatorioContext, setRelatorioContext, setStepContext } = useContext(RelatorioContent)

    const handleChange = event => {
        setRelatorioContext({ ...relatorioContext, [event.target.name]: event.target.value })
    }

    const indices = [
        [

            ['medicamento1', relatorioContext.medicamento1],
            ['dose1', relatorioContext.dose1],
            ['inicio1', relatorioContext.inicio1],
            ['fim1', relatorioContext.fim1],
            ['motivo1', relatorioContext.motivo1],
        ],
        [

            ['medicamento2', relatorioContext.medicamento2],
            ['dose2', relatorioContext.dose2],
            ['inicio2', relatorioContext.inicio2],
            ['fim2', relatorioContext.fim2],
            ['motivo2', relatorioContext.motivo2],
        ],
        [

            ['medicamento3', relatorioContext.medicamento3],
            ['dose3', relatorioContext.dose3],
            ['inicio3', relatorioContext.inicio3],
            ['fim3', relatorioContext.fim3],
            ['motivo3', relatorioContext.motivo3],
        ],
        [

            ['medicamento4', relatorioContext.medicamento4],
            ['dose4', relatorioContext.dose4],
            ['inicio4', relatorioContext.inicio4],
            ['fim4', relatorioContext.fim4],
            ['motivo4', relatorioContext.motivo4],
        ],
        [

            ['medicamento5', relatorioContext.medicamento5],
            ['dose5', relatorioContext.dose5],
            ['inicio5', relatorioContext.inicio5],
            ['fim5', relatorioContext.fim5],
            ['motivo5', relatorioContext.motivo5],
        ],
        [

            ['medicamento6', relatorioContext.medicamento6],
            ['dose6', relatorioContext.dose6],
            ['inicio6', relatorioContext.inicio6],
            ['fim6', relatorioContext.fim6],
            ['motivo6', relatorioContext.motivo6],
        ],
        [

            ['medicamento7', relatorioContext.medicamento7],
            ['dose7', relatorioContext.dose7],
            ['inicio7', relatorioContext.inicio7],
            ['fim7', relatorioContext.fim7],
            ['motivo7', relatorioContext.motivo7],
        ],
    ]

    return (
        <div>
            <Container>
                <Card body>
                    {indices.map((z, index) =>
                        <div key={index}>
                            <Form.Group>
                                <Row>
                                    <Col xs={6}>
                                        <Form.Control
                                            type="text"
                                            name={z[0][0]}
                                            placeholder='Medicamento'
                                            value={z[0][1]}
                                            onChange={handleChange}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            name={z[1][0]}
                                            placeholder="Dose"
                                            value={z[1][1]}
                                            onChange={handleChange}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            name={z[2][0]}
                                            placeholder="Início"
                                            value={z[2][1]}
                                            onChange={handleChange}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            name={z[3][0]}
                                            placeholder="Fim"
                                            value={z[3][1]}
                                            onChange={handleChange}
                                        />
                                    </Col>
                                </Row>
                                <Form.Control
                                    className='mt-2'
                                    type="text"
                                    name={z[4][0]}
                                    placeholder="Motivo"
                                    value={z[4][1]}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </div>
                    )}
                </Card>
            </Container>

            <Container className="mt-2">
                <Button
                    variant="outline-success"
                    onClick={() => {
                        setRelatorioContext(relatorioContext)
                        setStepContext(2)
                    }}
                > Anterior
                </Button>
                <Button
                    className="ml-1"
                    variant="outline-success"
                    onClick={() => {
                        setRelatorioContext(relatorioContext)
                        setStepContext(4)
                    }}
                > Próximo
                </Button>
            </Container>
        </div>
    )
}

