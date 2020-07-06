import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'


export default function RelatorioSet3(props) {

    const [relatorio, setRelatorio] = useState(props.relatorio)

    const handleChange = event => {
        if (event.type === 'checkbox') {
            setRelatorio({ ...relatorio, [event.target.name]: event.target.checked })
        } else {
            setRelatorio({ ...relatorio, [event.target.name]: event.target.value })
        }
    }

    const handleChangeppdresultado = param => () => {
        setRelatorio({ ...relatorio, ppdresultado: param })
    }

    const handleChangerxtoraxresultado = param => () => {
        setRelatorio({ ...relatorio, rxtoraxresultado: param })
    }

    return (
        <div>
            {JSON.stringify(relatorio)}
            <Container>
                <Form.Group>
                    <Row>
                        <Col xs={3}>
                            <Form.Control
                                type="date"
                                id="ppddata"
                                name="ppddata"
                                placeholder="PPD"
                                value={relatorio.ppddata}
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
                                value={relatorio.rxtoraxdata}
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
                    {relatorio.rxtoraxresultado &&
                        <Row className="mt-1">
                            <Col>
                                <Form.Control
                                    type="text"
                                    name="rxtoraxalteracao"
                                    placeholder="Resultado do Rx"
                                    value={relatorio.rxtoraxalteracao}
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
                                value={relatorio.bhcgdata}
                                onChange={handleChange}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="text"
                                id="bhcgjustificativa"
                                name="bhcgjustificativa"
                                placeholder="Justificativa do Beta-HCG"
                                value={relatorio.bhcgjustificativa}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                </Form.Group>
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