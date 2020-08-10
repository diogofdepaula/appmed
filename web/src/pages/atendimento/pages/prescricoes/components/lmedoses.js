import React, { useContext, useEffect, useState, useCallback } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { PrescricaoEditorContext } from '../editor'

export default function LMEDoses(props) {

    const { prescricaoContext, setPrescricaoContext, setStepContext } = useContext(PrescricaoEditorContext)
    const [indices, setIndices] = useState([])

    const funcaoTeste = useCallback(() => {
        setIndices([
            ['lmemes1', '1º mês', prescricaoContext.lmemes1],
            ['lmemes2', '2º mês', prescricaoContext.lmemes2],
            ['lmemes3', '3º mês', prescricaoContext.lmemes3],
            ['lmemes4', '4º mês', prescricaoContext.lmemes4],
            ['lmemes5', '5º mês', prescricaoContext.lmemes5],
            ['lmemes6', '6º mês', prescricaoContext.lmemes6]
        ])
    }, [prescricaoContext])

    useEffect(() => {
        funcaoTeste()
    }, [funcaoTeste])

    const handleChange = event => {
        setPrescricaoContext({ ...prescricaoContext, [event.target.name]: event.target.value })
    }

    const nextStep = () => {
        setPrescricaoContext(prescricaoContext)
        if (prescricaoContext.lmeId){
            setStepContext(1) // manda para o lmeupdate
        } else {
            setStepContext(61) // continua a edição
        }
    }

    return (
        <div>
            <h5>Doses referente a cada mês</h5>
            <Container>
                <Row>
                    {indices && indices.map((w) =>
                        <Col key={w[0]}>
                            <Form.Control
                                type="text"
                                name={w[0]}
                                placeholder={w[1]}
                                value={w[2]}
                                onChange={handleChange}
                            />
                        </Col>
                    )}
                </Row>
            </Container>
            <Container className="mt-2">
                <Button
                    className="ml-1"
                    variant="outline-success"
                    onClick={() => nextStep()}
                > Próximo
                    </Button>
            </Container>
        </div>
    )
}

