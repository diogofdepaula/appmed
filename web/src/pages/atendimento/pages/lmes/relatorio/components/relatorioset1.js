import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

export default function RelatorioSet1(props) {

    const [relatorio, setRelatorio] = useState(props.relatorio)

    const handleChange = event => {
        setRelatorio({ ...relatorio, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Form.Control
                            type="text"
                            name="tempodoencaanos"
                            placeholder="Anos"
                            value={relatorio.tempodoencaanos}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="text"
                            name="tempodoencameses"
                            placeholder="Meses"
                            value={relatorio.tempodoencameses}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="text"
                            name="vhs"
                            placeholder="VHS"
                            value={relatorio.vhs}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="text"
                            name="pcr"
                            placeholder="PCR"
                            value={relatorio.pcr}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="text"
                            name="pcrvn"
                            placeholder="PCR NL"
                            value={relatorio.pcrvn}
                            onChange={handleChange}
                        />
                    </Col>

                </Row>
            </Container>
            <Container className="mt-2">
                <Button
                    disabled
                    variant="outline-success"
                // onClick={props.passPrevious}
                > Anterior
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