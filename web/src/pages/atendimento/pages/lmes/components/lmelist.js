import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { ClienteContext, LMEMainContext, PageContext } from '../..';

export default function LMEList() {

    const cliente = useContext(ClienteContext)
    const setPage = useContext(PageContext)    
    const { setLmeMain } = useContext(LMEMainContext)
    const [lmes, setlmes] = useState([])

    const fetchData = useCallback(async () => {
        const res = await fetch(`http://localhost:4001/api.appmed/lmes/allfat/${cliente.id}`)
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
                            setLmeMain(lme)
                        }}
                    >{lme.cid10} - {lme.diagnostico}
                    <Button
                                variant="link"
                                size="sm"
                                onClick={() => {
                                    setLmeMain(lme)
                                    setPage('lmedelete')
                                }}
                            >Remover
                            </Button>
                    </ListGroup.Item>
                )}
            </ListGroup>
        </div>
    )
}
