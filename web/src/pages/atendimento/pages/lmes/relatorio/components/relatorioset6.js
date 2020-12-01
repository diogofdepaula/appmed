import React, { useContext } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { RelatorioContent } from '../relatoriovarset'

export default function RelatorioSet6 (props) {

    const { relatorioContext, setRelatorioContext, setStepContext } = useContext(RelatorioContent)

    const handleChange = event => {
        setRelatorioContext({ ...relatorioContext, [event.target.name]: event.target.value })
    }

    const indices = [
        ['das28', relatorioContext.das28],
        ['cdai', relatorioContext.cdai],
        ['sdai', relatorioContext.sdai],
        ['basdai', relatorioContext.basdai],
        ['asdas', relatorioContext.asdas],
        ['mda', relatorioContext.mda],
        ['eva', relatorioContext.eva],
    ]

    return (
        <div>
            <Container>
                <Row>
                    {indices && indices.map((w) =>
                        <Col key={w[0]}>
                            <Form.Control
                                type="text"
                                label={w[0]}
                                name={w[0]}
                                placeholder={w[0].toLocaleUpperCase()}
                                value={w[1]}
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

