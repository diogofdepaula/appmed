import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Container, FormControl, ListGroup } from 'react-bootstrap';
import { LMEEditorContext } from '../../../atendimento/pages/lmes/editor';

export default function CID10List() {

    const { lmeContext, setLmeContext, setStepContext } = useContext(LMEEditorContext)
    const [cid10, setcid10] = useState([])
    const [cidsfiltrados, setcidsfiltrados] = useState([])

    const fetchData = useCallback(async () => {
        const res = await fetch('http://localhost:4001/api.appmed/cid10')
        const json = await res.json();
        setcid10(json);
    }, [])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    const filterCID10 = event => {

        if (event.target.value.length >= 3) {
            let filtro = [...cid10].filter(w =>
                w.cid10.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1 ||
                w.descricao.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
            )
            if (filtro.length === 0) {
                filtro.push({
                    id: 0,
                    farmaco: "nenhum cid encontrado"
                })

                // tem algum erro aqui quando coloca filtra algo que não encontoru não está pondo essa linha "nenhum cid encontrado"
            }
            setcidsfiltrados(filtro)
        } else {
            setcidsfiltrados([])
        }
    }

    return (
        <div>
            <h5>Escolha o CID</h5>
            <Container>
                <FormControl
                    autoFocus
                    type="text"
                    placeholder="Filtrar CIDs (pelo menos 3 digitos)"
                    className="mt-2 mb-2"
                    onChange={filterCID10}
                />
            </Container>
            <Container className="mt-2" >
                <ListGroup className="mt-2">
                    {cidsfiltrados.map(cid =>
                        <ListGroup.Item
                            key={cid.id}
                            onClick={() => {
                                setLmeContext({
                                    ...lmeContext,
                                    cid10: cid.cid10,
                                    diagnostico: cid.descricao,
                                })
                                setStepContext(31)                     
                             }}
                        >{cid.cid10} - {cid.descricao}
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </Container>
        </div>
    )
}
