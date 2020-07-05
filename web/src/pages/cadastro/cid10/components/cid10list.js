import React, { useState, useEffect } from 'react';
import { ListGroup, Container, FormControl } from 'react-bootstrap';

export default function CID10List(props) {

    const [cid10, setcid10] = useState([])
    const [cidsfiltrados, setcidsfiltrados] = useState([])

    useEffect(() => {
        fetch('http://localhost:4001/api.appmed/cid10')
            .then(response => response.json())
            .then(response => setcid10(response))
            .catch(err => console.log(err))
    }, [])

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
                            onClick={props.passcid(cid)}
                        >{cid.cid10} - {cid.descricao}
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </Container>
        </div>
    )
}
