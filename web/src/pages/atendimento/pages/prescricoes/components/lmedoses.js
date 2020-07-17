import React, { useContext } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { PrescricaoContext } from '../insert'

export default function LMEDoses(props) {

    const { prescricaoContext, setPrescricaoContext, setStepContext } = useContext(PrescricaoContext)

    const indices = [
        ['lmemes1', '1º mês'],
        ['lmemes2', '2º mês'],
        ['lmemes3', '3º mês'],
        ['lmemes4', '4º mês'],
        ['lmemes5', '5º mês'],
        ['lmemes6', '6º mês'],
    ]

    const handleChange = event => {
        setPrescricaoContext({ ...prescricaoContext, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <h5>Doses referente a cada mês</h5>
            <Container>
                <Row>
                    {indices && indices.map((w) =>
                        <Col key={w}>
                            <Form.Control
                                type="text"
                                name={w[0]}
                                placeholder={w[1]}
                                //value={w[0]}
                                onChange={handleChange}
                            />
                        </Col>
                    )}
                </Row>
            </Container>
            <Container className="mt-2">
                {/* <Button
                    variant="outline-success"
                    onClick={props.passPrevious}
                > Anterior
                    </Button> */}
                <Button
                    className="ml-1"
                    variant="outline-success"
                    onClick={() => {
                        setPrescricaoContext(prescricaoContext)
                        setStepContext('lme')
                    }}
                > Próximo
                    </Button>
            </Container>
        </div>
    )
}

