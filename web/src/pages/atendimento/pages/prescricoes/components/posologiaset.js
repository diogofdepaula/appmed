import React, { useState, useEffect, useCallback, useContext } from 'react'
import { Button, Container, ListGroup } from 'react-bootstrap'
import { PrescricaoContext } from '../insert'

export default function PosologiaSet(props) {

    const { prescricaoContext, setPrescricaoContext, setStepContext } = useContext(PrescricaoContext)
    const [medicamentocominclude, setMedicamentoComInclude] = useState()

    const fetchData = useCallback(async () => {
        const res = await fetch(`http://localhost:4001/api.appmed/medicamentos/${prescricaoContext.medicamentoId}`)
        const json = await res.json();
        setMedicamentoComInclude(json);
    }, [prescricaoContext])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return (
        <div>
            <h5>Escolha uma Posologia</h5>
            <Container className="mt-2" >
                <ListGroup className="mt-2">
                    {medicamentocominclude && medicamentocominclude.posologias && medicamentocominclude.posologias.map(posologia =>
                        <ListGroup.Item
                            key={posologia.id}
                            onClick={() => {
                                setPrescricaoContext({
                                    ...prescricaoContext,
                                    usoposologiapadrao: true,
                                    posologiaId: posologia.id
                                })
                                setStepContext(41)
                            }}
                        >{posologia.posologia}
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </Container>
            <Button
                className="mt-2"
                variant="outline-danger"
                onClick={() => {
                    setPrescricaoContext(prescricaoContext)
                    setStepContext(32)
                }}
            >Usar posologia não padronizada
                </Button>
        </div>
    )
}