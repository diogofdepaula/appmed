import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import { PrescricaoMainContext } from '../../..';
import { PageContentContext } from '../../../../../App';

export default function PrescricaoDelete() {

    const { setPageContentContext } = useContext(PageContentContext)
    const { prescricaoMain, setPrescricaoMain } = useContext(PrescricaoMainContext)
    const [lme, setLme] = useState()
    const [change, setChange] = useState(0)

    const fetchData = useCallback(async () => {
        const res = await fetch(`http://localhost:4001/api.appmed/lmes/one/${prescricaoMain.lmeId}`)
        const json = await res.json();
        setLme(json[0]);
    }, [prescricaoMain])

    useEffect(() => {
        if (prescricaoMain && prescricaoMain.lmeId) {
            fetchData();
        }
    }, [prescricaoMain, fetchData])

    const handleDeletePrescricao = () => event => {

        event.preventDefault();
        fetch(`http://localhost:4001/api.appmed/prescricoes/${prescricaoMain.id}`, {
            method: 'delete',
        }).then(data => {
            if (data.ok) {
                setPrescricaoMain(null)
                setPageContentContext('prescricoes')
            }
        })
    }

    const handleDeletePrescricaoLME = () => event => {

        event.preventDefault();
        fetch(`http://localhost:4001/api.appmed/lmes/${prescricaoMain.lmeId}`, {
            method: 'delete',
        }).then(data => {
            if (data.ok) {
                setPrescricaoMain(null)
                setPageContentContext('prescricoes')
            }
        })
    }

    const changeEmUso = useCallback(() => {
        setPrescricaoMain({
            ...prescricaoMain,
            emuso: false,
            termino: new Date().toISOString().slice(0, 10)
        })
        setChange(2)
    }, [setPrescricaoMain, prescricaoMain])

    const updateEmUso = useCallback(async () => {

        fetch(`http://localhost:4001/api.appmed/prescricoes/${prescricaoMain.id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(prescricaoMain)
        }).then(data => {
            if (data.ok) {
                setChange(3)
            }
        })
    }, [prescricaoMain])

    useEffect(() => {
        if (change === 1) {
            changeEmUso()
        } else if (change === 2) {
            updateEmUso()
        } else if (change === 3) {
            setPrescricaoMain(null)
            setPageContentContext('prescricoes')
        }
    }, [change, changeEmUso, updateEmUso, setPrescricaoMain, setPageContentContext])

    return (
        <div>
            {prescricaoMain &&
                <>
                    <Container>
                        <Card body className="mt-2">
                            <h5>{prescricaoMain.medicamento.farmaco} ({prescricaoMain.apresentaco.descricao})</h5>
                            {prescricaoMain.lmeId ?
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
                        {prescricaoMain.lmeId &&
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