import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'


export default function RelatorioSet3(props) {

    const [relatorio, setRelatorio] = useState(props.relatorio)

    const handleChange = event => {
        setRelatorio({ ...relatorio, [event.target.name]: event.target.value })
    }

    const indices = ['das28', 'cdai', 'sdai', 'basdai', 'asdas', 'mda', 'eva']

    return (
        <div>
            <Container>
                <Row>
                    {indices && indices.map((w) =>
                        <Col key={w}>
                            <Form.Control
                                type="text"
                                label={w}
                                name={w}
                                placeholder={w.toLocaleUpperCase()}
                                // value={w}
                                onChange={handleChange}
                            />
                        </Col>
                    )}
                </Row>
            </Container>
            <Container className="mt-2">
                <Button
                    variant="outline-success"
                    onClick={props.passPrevious}
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

