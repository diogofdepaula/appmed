import React, { useContext, useState, useCallback, useEffect } from 'react';
import { PrescricaoMainContext, PageContext } from '../..';
import { Container, Button, Card } from 'react-bootstrap';

export default function PrescricaoDelete() {

    const setPage = useContext(PageContext)
    const { prescricaoMain, setPrescricaoMain } = useContext(PrescricaoMainContext)
    const [lme, setLme] = useState()

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
                setPage('prescricoes')
            }
        })
    }

    ///// TEM QUE DIFERENCIAR DESTRUIR (DELETAR) E INTILIZAR (emuso == 0)
    ///// TEM QUE DIFERENCIAR DESTRUIR (DELETAR) E INTILIZAR (emuso == 0)
    ///// TEM QUE DIFERENCIAR DESTRUIR (DELETAR) E INTILIZAR (emuso == 0)
    ///// TEM QUE DIFERENCIAR DESTRUIR (DELETAR) E INTILIZAR (emuso == 0)
    ///// TEM QUE DIFERENCIAR DESTRUIR (DELETAR) E INTILIZAR (emuso == 0)
    ///// TEM QUE DIFERENCIAR DESTRUIR (DELETAR) E INTILIZAR (emuso == 0)
    ///// TEM QUE DIFERENCIAR DESTRUIR (DELETAR) E INTILIZAR (emuso == 0)
    ///// TEM QUE DIFERENCIAR DESTRUIR (DELETAR) E INTILIZAR (emuso == 0)
    ///// TEM QUE DIFERENCIAR DESTRUIR (DELETAR) E INTILIZAR (emuso == 0)

    // NÃO ESTÁ APAGANDO EM CASCATA
    

    const handleDeletePrescricaoLME = () => event => {

        event.preventDefault();
        fetch(`http://localhost:4001/api.appmed/lmes/${prescricaoMain.lmeId}`, {
            method: 'delete',
        }).then(data => {
            if (data.ok) {
                setPrescricaoMain(null)
                setPage('prescricoes')
            }
        })
    }

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
                        <Button
                            className="mt-2"
                            variant="outline-danger"
                            onClick={handleDeletePrescricao()}
                        >Deletar prescrição
                      </Button>
                        {prescricaoMain.lmeId &&
                            <Button
                                className="mt-2 ml-2"
                                variant="outline-danger"
                                onClick={handleDeletePrescricaoLME()}
                            >Deletar a prescrição e a LME
                    </Button>
                        }
                    </Container>
                </>
            }
        </div>
    )
}