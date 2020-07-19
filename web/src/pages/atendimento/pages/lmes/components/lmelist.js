import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { ClienteContext } from '../..';
import { LMEEditorContext } from '../editor';

export default function LMEList(props) {

    const cliente = useContext(ClienteContext)
    const { setLmeContext, setStepContext } = useContext(LMEEditorContext)

    const [lmes, setlmes] = useState([])

    const fetchData = useCallback(async () => {
        const res = await fetch(`http://localhost:4001/api.appmed/lmes/all/${cliente.id}`)
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
                            setLmeContext(lme)
                            setStepContext(21)
                        }}
                    >{lme.cid10} - {lme.diagnostico}
                    </ListGroup.Item>
                )}
            </ListGroup>
        </div>
    )
}
