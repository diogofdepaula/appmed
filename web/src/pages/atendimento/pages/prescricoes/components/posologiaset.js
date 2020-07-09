import React, { useState, useEffect, useCallback } from 'react'
import { Button, Container, ListGroup } from 'react-bootstrap'

export default function PosologiaSet(props) {

    const [medicamentoId] = useState(props.prescricao.medicamentoId)
    const [prescricao, setPrescricao] = useState(props.prescricao)
    const [medicamentocominclude, setMedicamentoComInclude] = useState(props.medicamento)
    const [validacao, setValidacao] = useState(false)

    const fetchData = useCallback(async () => {
        const res = await fetch(`http://localhost:4001/api.appmed/medicamentos/${medicamentoId}`)
        const json = await res.json();
        setMedicamentoComInclude(json);
    }, [medicamentoId])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    const handleChange = param => () => {
        setPrescricao({
            ...prescricao,
            usoposologiapadrao: true,
            posologiaId: param.id
        })
        setValidacao(true)
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
            <h5>Escolha uma Posologia</h5>
            <Container className="mt-2" >
                <ListGroup className="mt-2">
                    {medicamentocominclude && medicamentocominclude.posologias && medicamentocominclude.posologias.map(posologia =>
                        <ListGroup.Item
                            key={posologia.id}
                            onClick={handleChange(posologia)}
                        >{posologia.posologia}
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </Container>
            <Button
                className="mt-2"
                variant="outline-danger"
                onClick={
                    useCallback(
                        props.passNextStep(prescricao, 32),
                        [prescricao, props]
                    )
                }
            >Usar posologia não padronizada
                    </Button>
        </div>
    )
}