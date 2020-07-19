import React, { useState, useContext, useCallback, useEffect } from 'react';
import { ListGroup, Badge } from 'react-bootstrap';
import { ClienteContext, PrescricaoMainContext, PageContext } from '../..';

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
            <ListGroup className="mt-2">
                {prescricoes && prescricoes.map(prescricao =>
                    prescricao.emuso && (
                        <ListGroup.Item
                            key={prescricao.id}
                            onClick={() => setPrescricaoMain(prescricao)}
                        >{prescricao.medicamento.farmaco} ({prescricao.apresentaco.descricao})
                            <Badge
                                variant="light"
                                onClick={() => {
                                    setPrescricaoMain(prescricao)
                                    setPage('prescricaoupdate')
                                }}
                            >Editar
                                    </Badge>
                                    <>
                                    {prescricao.lmeId !== null && '(LME)'}
                                    </>
                        </ListGroup.Item>
                    )
                )}
                <ListGroup.Item disabled>Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
        </div>
    )
}
