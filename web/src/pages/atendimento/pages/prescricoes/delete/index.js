import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import { AtendimentoContext } from '../../..';

export default function PrescricaoDelete() {

    const { setPageContentContext, prescricaoOnDuty, setPrescricaoOnDuty } = useContext(AtendimentoContext)
    const [lme, setLme] = useState()
    const [change, setChange] = useState(0)

    const fetchData = useCallback(async () => {
        const res = await fetch(`http://localhost:4001/api.appmed/lmes/one/${prescricaoOnDuty.lmeId}`)
        const json = await res.json();
        setLme(json[0]);
    }, [prescricaoOnDuty])

    useEffect(() => {
        if (prescricaoOnDuty && prescricaoOnDuty.lmeId) {
            fetchData();
        }
    }, [prescricaoOnDuty, fetchData])

    const handleDeletePrescricao = () => event => {

        event.preventDefault();
        fetch(`http://localhost:4001/api.appmed/prescricoes/${prescricaoOnDuty.id}`, {
            method: 'delete',
        }).then(data => {
            if (data.ok) {
                setPrescricaoOnDuty(null)
                setPageContentContext('prescricoes')
            }
        })
    }

    const handleDeletePrescricaoLME = () => event => {

        event.preventDefault();
        fetch(`http://localhost:4001/api.appmed/lmes/${prescricaoOnDuty.lmeId}`, {
            method: 'delete',
        }).then(data => {
            if (data.ok) {
                setPrescricaoOnDuty(null)
                setPageContentContext('prescricoes')
            }
        })
    }

    const changeEmUso = useCallback(() => {
        setPrescricaoOnDuty({
            ...prescricaoOnDuty,
            emuso: false,
            termino: new Date().toISOString().slice(0, 10)
        })
        setChange(2)
    }, [setPrescricaoOnDuty, prescricaoOnDuty])

    const updateEmUso = useCallback(async () => {

        fetch(`http://localhost:4001/api.appmed/prescricoes/${prescricaoOnDuty.id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(prescricaoOnDuty)
        }).then(data => {
            if (data.ok) {
                setChange(3)
            }
        })
    }, [prescricaoOnDuty])

    useEffect(() => {
        if (change === 1) {
            changeEmUso()
        } else if (change === 2) {
            updateEmUso()
        } else if (change === 3) {
            setPrescricaoOnDuty(null)
            setPageContentContext('prescricoes')
        }
    }, [change, changeEmUso, updateEmUso, setPrescricaoOnDuty, setPageContentContext])

    return (
        <div>
            {prescricaoOnDuty &&
                <>
                    <Container>
                        <Card body className="mt-2">
                            <h5>{prescricaoOnDuty.medicamento.farmaco} ({prescricaoOnDuty.apresentaco.descricao})</h5>
                            {prescricaoOnDuty.lmeId ?
                                <div>

                                    <h4>Prescrição vinculada a LME</h4>
                                    {lme && lme.prescricoes.length - 1 === 0 && <h5>Há outras prescrições na LME</h5>}

                                </div>
                                :
                                <div>
                                    <p>Medicamento não vinculado a LME</p>
                                </div>
                            }
                        </Card>
                    </Container>
                    <Container>
                        <Row>
                            <Button
                                className="mt-2 ml-2"
                                variant="outline-danger"
                                onClick={() => setChange(1)}
                            >Interromper o uso da prescrição (enviado a lista de Fez uso. Será mantida no bando de dados)
                            </Button>
                        </Row>
                        <Row>
                            <Button
                                className="mt-2 ml-2"
                                variant="outline-danger"
                                onClick={handleDeletePrescricao()}
                            >Remover a prescrição (apagará do bando de dados)
                            </Button>
                        </Row>
                        {prescricaoOnDuty.lmeId &&
                            <Row>
                                <Button
                                    className="mt-2 ml-2"
                                    variant="outline-danger"
                                    onClick={handleDeletePrescricaoLME()}
                                >Remover a prescrição e a LME (apagará ambos do bando de dados)
                                </Button>
                            </Row>
                        }
                    </Container>
                </>
            }
        </div>
    )
}