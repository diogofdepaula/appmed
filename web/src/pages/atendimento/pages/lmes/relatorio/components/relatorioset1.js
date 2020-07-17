import React, { useContext } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { RelatorioContent } from '../relatoriovarset'

export default function RelatorioSet1() {

    const { relatorioContext, setRelatorioContext, setStepContext } = useContext(RelatorioContent)

    const handleChange = event => {
        setRelatorioContext({ ...relatorioContext, [event.target.name]: event.target.value })
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
                            //value={relatorioContext.tempodoencaanos}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="text"
                            name="tempodoencameses"
                            placeholder="Meses"
                            //value={relatorioContext.tempodoencameses}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="text"
                            name="vhs"
                            placeholder="VHS"
                            //value={relatorioContext.vhs}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="text"
                            name="pcr"
                            placeholder="PCR"
                            //value={relatorioContext.pcr}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="text"
                            name="pcrvn"
                            placeholder="PCR NL"
                            //value={relatorioContext.pcrvn}
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
                    onClick={() => {
                        setRelatorioContext(relatorioContext)
                        setStepContext(2)
                    }}
                > Próximo
                </Button>
            </Container>
        </div>
    )
}