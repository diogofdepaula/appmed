import React, { useContext } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { RelatorioContent } from '../relatoriovarset'


export default function RelatorioSet3(props) {

    const { relatorioContext, setRelatorioContext, setStepContext } = useContext(RelatorioContent)

    const handleChange = event => {
        setRelatorioContext({ ...relatorioContext, [event.target.name]: event.target.value })
    }

    const handleChangeRadio = event => {
        setRelatorioContext({ ...relatorioContext, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <Container>
                <Form.Group>
                    <Row>
                        <Col xs={3}>
                            <Form.Control
                                type="date"
                                id="ppddata"
                                name="ppddata"
                                placeholder="PPD"
                                value={relatorioContext.ppddata}
                                onChange={handleChange}
                            />
                        </Col>
                        <Col xs={9}>
                            <Form.Group controlId="ppdcheckbox">
                                <Form.Check
                                    inline
                                    label="Até 5 mm"
                                    type='radio'
                                    name='ppdresultado' 
                                    id="ppdresultadoa"
                                    value="a"
                                    checked={relatorioContext.ppdresultado === "a"}
                                    onChange={handleChangeRadio}
                                />
                                <Form.Check
                                defaultChecked
                                    inline
                                    label="Acima de 5 mm"
                                    type='radio'
                                    name='ppdresultado'
                                    id="ppdresultadob"
                                    value="b"
                                    checked={relatorioContext.ppdresultado === "b"}
                                    onChange={handleChangeRadio}
                                />
                                <Form.Check
                                    inline
                                    defaultChecked 
                                    label="Não reator"
                                    type='radio'
                                    name='ppdresultado'
                                    id="ppdresultadoc"
                                    value="c"
                                    checked={relatorioContext.ppdresultado === "c"}
                                    onChange={handleChangeRadio}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col xs={3}>
                            <Form.Control
                                type="date"
                                id="rxtoraxdata"
                                name="rxtoraxdata"
                                placeholder="RxTórax"
                                value={relatorioContext.rxtoraxdata}
                                onChange={handleChange}
                            />
                        </Col>
                        <Col xs={9}>
                        <Form.Group controlId="rxtcheckbox">
                            <Form.Check
                                inline
                                defaultChecked 
                                type="radio"
                                label="Radiografia de tórax normal"
                                name="rxtoraxresultado"
                                id="rxtoraxresultadoa"
                                value="a"
                                checked={relatorioContext.rxtoraxresultado === "a"}
                                onChange={handleChangeRadio}

                            />
                            <Form.Check
                                inline
                                type="radio"
                                label="Radiografia de tórax alterada"
                                name="rxtoraxresultado"
                                id="rxtoraxresultadob"
                                value={"b"}
                                checked={relatorioContext.rxtoraxresultado === "b"}
                                onChange={handleChangeRadio}
                            />
                            </Form.Group>
                        </Col>
                    </Row>
                    {relatorioContext.rxtoraxresultado === "b" &&
                        <Row className="mt-1">
                            <Col>
                                <Form.Control
                                    type="text"
                                    name="rxtoraxalteracao"
                                    placeholder="Resultado do Rx"
                                    value={relatorioContext.rxtoraxalteracao}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>
                    }
                    <Row className="mt-2">
                        <Col xs={3}>
                            <Form.Control
                                type="date"
                                id="bhcgdata"
                                name="bhcgdata"
                                placeholder="Beta-HCG"
                                value={relatorioContext.bhcgdata}
                                onChange={handleChange}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="text"
                                id="bhcgjustificativa"
                                name="bhcgjustificativa"
                                placeholder="Justificativa do Beta-HCG"
                                value={relatorioContext.bhcgjustificativa}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                </Form.Group>
            </Container>
            <Container className="mt-2">
                <Button
                    variant="outline-success"
                    onClick={() => {
                        setRelatorioContext(relatorioContext)
                        setStepContext(3)
                    }}
                > Anterior
                  </Button>
                <Button
                    className="ml-1"
                    variant="outline-success"
                    onClick={() => {
                        setRelatorioContext(relatorioContext)
                        setStepContext(5)
                    }}
                > Próximo
                    </Button>
            </Container>
        </div>
    )
}