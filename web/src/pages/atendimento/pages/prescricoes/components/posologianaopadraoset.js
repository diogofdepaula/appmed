import React, { useEffect, useState, useCallback } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'

export default function PosologiaNaoPadraoSet(props) {

    const [prescricao, setPrescricao] = useState(props.prescricao)
    const [validacao, setValidacao] = useState(false)

    const handleChange = event => {
        setPrescricao({ ...prescricao, [event.target.name]: event.target.value })
    }

    const sendNextStep = useCallback(
        props.passNextStep(prescricao, 41),
        [prescricao, props]
    )

    useEffect(() => {
        if (validacao) {
            sendNextStep()
        }
    }, [validacao, sendNextStep])

    return (
        <div>
            <h5>Defina uma Posologia Não Padronizada</h5>
            <Container className="mt-2" >
                <Row>
                    <Form.Control
                        as="textarea"
                        rows="4"
                        name="posologianaopadrao"
                        placeholder="Posologia não padronizada"
                        onChange={handleChange}
                    />
                </Row>
                <Row className="mt-2 mb-3">
                    <Col>
                        <Form.Control
                            type="text"
                            name="quantidadenaopadrao"
                            placeholder="Quantidade"
                            onChange={handleChange}
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="text"
                            name="formanaopadrao"
                            placeholder="Forma"
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
            </Container>
            <Button
                className="mt-2"
                variant="outline-danger"
                onClick={() => setValidacao(true)}
            >Usar posologia não padronizada
            </Button>
        </div>
    )
}