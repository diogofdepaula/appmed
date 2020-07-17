import React, { useContext } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { RelatorioContent } from '../relatoriovarset'

export default function RelatorioSet3(props) {

    const { relatorioContext, setRelatorioContext, setStepContext } = useContext(RelatorioContent)

    const handleChange = event => {
        setRelatorioContext({ ...relatorioContext, [event.target.name]: event.target.value })
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
                    onClick={() => {
                        setRelatorioContext(relatorioContext)
                        setStepContext(5)
                    }}
                > Anterior
                    </Button>
                <Button
                    className="ml-1"
                    variant="outline-success"
                    onClick={() => {
                        setRelatorioContext(relatorioContext)
                        setStepContext(7)
                    }}
                > Finalizar
                    </Button>
            </Container>
        </div>
    )
}

