import React, { useState, useEffect, useCallback } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'

export default function RelatorioSet3(props) {

    const [relatorio, setRelatorio] = useState(props.relatorio)

    const handleChange = event => {
        setRelatorio({ ...relatorio, [event.target.name]: event.target.value })
    }

    const [meds, setMeds] = useState([])

    const getMeds = useCallback((param) => {
        setMeds([...Array(param)].map((v, i) => i + 1).map(x => {
            return ['medicamento'.concat(x), 'dose'.concat(x), 'inicio'.concat(x), 'fim'.concat(x), 'motivo'.concat(x)]
        }))
    }, [])

    useEffect(() => {
        getMeds(1)
    }, [getMeds])

    const [numb, setNumb] = useState(2)
    const increment = () => {

        if (numb === 8) {
            alert('O limite são 7 (sete) medicamentos')
        } else {
            setNumb(numb + 1)
            getMeds(numb)
        }
    }

    return (
        <div>
            <Container>
                <Card body>
                    {meds.map(med =>
                        <div key={med}>
                            <Form.Group>
                                <Row>
                                    <Col xs={6}>
                                        <Form.Control
                                            type="text"
                                            name={med[0]}
                                            placeholder='Medicamento'
                                            // value={med[0]}
                                            onChange={handleChange}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            name={med[1]}
                                            placeholder="Dose"
                                            //  value={med[1]}
                                            onChange={handleChange}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            name={med[2]}
                                            placeholder="Início"
                                            // value={med[2]}
                                            onChange={handleChange}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            name={med[3]}
                                            placeholder="Fim"
                                            //  value={med[3]}
                                            onChange={handleChange}
                                        />
                                    </Col>
                                </Row>
                                <Form.Control
                                    className='mt-2'
                                    type="text"
                                    name={med[4]}
                                    placeholder="Motivo"
                                    // value={med[4]}
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
                    onClick={props.passPrevious}
                > Anterior
                </Button>
                <Button
                    className="ml-1"
                    variant="outline-warning"
                    onClick={increment}
                > Adicionar novo
                </Button>
                <Button
                    className="ml-1"
                    variant="outline-success"
                    onClick={props.passNext(relatorio)}
                > Próximo
                </Button>
            </Container>
        </div>
    )
}