import React, { useEffect, useState } from 'react'
import { Container, ListGroup } from 'react-bootstrap'

export default function ApresentacaoSet(props) {

    const [medicamentocominclude, setmedicamentocominclude] = useState(props.medicamento)

    useEffect(() => {
        fetch(`http://localhost:4001/api.appmed/medicamentos/${props.medicamento.id}`)
            .then(response => response.json())
            .then(response => setmedicamentocominclude(response))
            .catch(err => console.log(err))
    }, [props.medicamento])

    return (
        <div>
            <h5>Escolha uma Apresentação</h5>
            <Container className="mt-2" >
                <ListGroup className="mt-2">
                    {medicamentocominclude.apresentacoes && medicamentocominclude.apresentacoes.map(apresentacao =>
                        <ListGroup.Item
                            key={apresentacao.id}
                            onClick={props.passApresentacao(medicamentocominclude, apresentacao)}  // passei o medicamento aqui para não ter que buscar posologias de novo
                        >{apresentacao.descricao}
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </Container>
        </div>
    )
}