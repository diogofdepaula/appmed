import React, { useContext } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { RelatorioContent } from '../relatoriovarset'


export default function RelatorioSet3(props) {

    const { relatorioContext, setRelatorioContext, setStepContext } = useContext(RelatorioContent)

    const handleChange = event => {
        if (event.type === 'checkbox') {
            setRelatorioContext({ ...relatorioContext, [event.target.name]: event.target.checked })
        } else {
            setRelatorioContext({ ...relatorioContext, [event.target.name]: event.target.value })
        }
    }

    const handleChangeppdresultado = param => () => {
        setRelatorioContext({ ...relatorioContext, ppdresultado: param })
    }

    const handleChangerxtoraxresultado = param => () => {
        setRelatorioContext({ ...relatorioContext, rxtoraxresultado: param })
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
                            <Form.Group controlId="formHorizontalCheck">
                                <Form.Check
                                    inline
                                    label="Até 5 mm"
                                    type='radio'
                                    name='ppdresultado'  //é o nome que define o grupo do radio  tem que se o mesmo para os item do grupo
                                    id="formHorizontalRadios1"
                                    onChange={handleChangeppdresultado(1)}
                                />
                                <Form.Check
                                    inline
                                    label="Acima de 5 mm"
                                    type='radio'
                                    name='ppdresultado'
                                    id="formHorizontalRadios2"
                                    onChange={handleChangeppdresultado(2)}
                                />
                                <Form.Check
                                    inline
                                    label="Não reator"
                                    type='radio'
                                    name='ppdresultado'
                                    id="formHorizontalRadios3"
                                    onChange={handleChangeppdresultado(3)}
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
                            <Form.Check
                                inline
                                type="radio"
                                label="Radiografia de tórax normal"
                                name="rxtoraxresultado"
                                //value={relatorio.rxtoraxresultado}
                                onChange={handleChangerxtoraxresultado(false)}
                            />
                            <Form.Check
                                inline
                                type="radio"
                                label="Radiografia de tórax alterada"
                                name="rxtoraxresultado"
                                // value={relatorio.rxtoraxresultado}
                                onChange={handleChangerxtoraxresultado(true)}
                            />
                        </Col>
                    </Row>
                    {relatorioContext.rxtoraxresultado &&
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