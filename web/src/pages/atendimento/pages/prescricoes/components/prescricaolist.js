import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { ClienteContext, PageContext, PrescricaoMainContext } from '../..';

export default function PrescricaoList() {

    const cliente = useContext(ClienteContext)
    const setPage = useContext(PageContext)
    const { setPrescricaoMain } = useContext(PrescricaoMainContext)
    const [prescricoes, setPrescricoes] = useState([])

    const fetchData = useCallback(async () => {
        const res = await fetch(`http://localhost:4001/api.appmed/prescricoes/all/${cliente.id}`)
        const json = await res.json();
        setPrescricoes(json);
    }, [cliente])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return (
        <div>
            <h5 className="mt-1 ml-3">Em uso atual</h5>
            <ListGroup className="mt-2">
                {prescricoes && prescricoes.map(prescricao =>
                    prescricao.emuso && (
                        <ListGroup.Item
                            key={prescricao.id}
                            onClick={() => setPrescricaoMain(prescricao)}
                        >{prescricao.medicamento.farmaco} ({prescricao.apresentaco.descricao})
                            <Button
                                variant="link"
                                size="sm"
                                onClick={() => {
                                    setPrescricaoMain(prescricao.id)
                                    setPage('prescricaoupdate')
                                }}
                            >Editar
                            </Button>
                            <Button
                                variant="link"
                                size="sm"
                                onClick={() => {
                                    setPrescricaoMain(prescricao)
                                    setPage('prescricaodelete')
                                }}
                            >Suspender
                            </Button>
                            <>
                                {prescricao.lmeId !== null && '(LME)'}
                            </>
                        </ListGroup.Item>
                    )
                )}
                <ListGroup.Item disabled>Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
            <h5 className="mt-1 ml-3">Fez uso</h5>
            <ListGroup className="mt-2">
                {prescricoes && prescricoes.map(prescricao =>
                    !prescricao.emuso && (
                        <ListGroup.Item
                            key={prescricao.id}
                            onClick={() => setPrescricaoMain(prescricao)}
                        >{prescricao.medicamento.farmaco} ({prescricao.apresentaco.descricao})
                            <Button
                                variant="link"
                                size="sm"
                                onClick={() => {
                                    setPrescricaoMain(prescricao)
                                    setPage('prescricaodelete')
                                }}
                            >Remover
                            </Button>
                        </ListGroup.Item>
                    )
                )}
                <ListGroup.Item disabled>Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>

        </div>
    )
}
