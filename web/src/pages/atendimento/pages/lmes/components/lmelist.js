import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { ClienteContext } from '../..';
import { PrescricaoEditorContext } from '../../prescricoes/editor';

export default function LMEList() {

    const cliente = useContext(ClienteContext)
    const { prescricaoContext, setPrescricaoContext, setStepContext } = useContext(PrescricaoEditorContext)

    const [lmes, setlmes] = useState([])

    const fetchData = useCallback(async () => {
        // fazer uma chamada depois do tipo simple (para não precisar vir com Includes)
        const res = await fetch(`http://localhost:4001/api.appmed/lmes/allfit/${cliente.id}`)
        const json = await res.json();
        setlmes(json);
    }, [cliente])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return (
        <div>
            <ListGroup>
                {lmes && lmes.map(lme =>
                    <ListGroup.Item
                        key={lme.id}
                        onClick={() => {
                            setPrescricaoContext({
                                ...prescricaoContext,
                                lmeId: lme.id
                            })
                            setStepContext(1)
                        }}
                    >{lme.cid10} - {lme.diagnostico}
                    </ListGroup.Item>
                )}
            </ListGroup>
        </div>
    )
}
