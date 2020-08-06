import React, { useCallback, useContext, useState, useEffect } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { ClienteContext } from '../..';
import { PrescricaoEditorContext } from '../editor';

export default function LMEForkSet() {

    const cliente = useContext(ClienteContext)
    const { prescricaoContext, setPrescricaoContext, setStepContext } = useContext(PrescricaoEditorContext)
    const [lmes, setlmes] = useState([])

    const fetchData = useCallback(async () => {
        const res = await fetch(`http://localhost:4001/api.appmed/lmes/allfit/${cliente.id}`)
        const json = await res.json();
        setlmes(json);
    }, [cliente])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return (
        <div>
            <h5>Escolha a qual LME</h5>
            <Container className="mt-2" >
                <ListGroup.Item
                    onClick={() => {
                        // irá manter o prescricaoContext.lmeId = null
                        setStepContext(1)
                    }}
                >Criar uma nova LME
                </ListGroup.Item>
                <br />
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
            </Container>
        </div>
    )
}