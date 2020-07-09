import React, { useEffect, useState, useCallback } from 'react'
import { Container, ListGroup } from 'react-bootstrap'

export default function ApresentacaoSet(props) {

    const [prescricao, setPrescricao] = useState(props.prescricao)
    const [medicamentocominclude, setmedicamentocominclude] = useState(props.medicamento)

    useEffect(() => {
        fetch(`http://localhost:4001/api.appmed/medicamentos/${prescricao.medicamentoId.id}`)
            .then(response => response.json())
            .then(response => setmedicamentocominclude(response))
            .catch(err => console.log(err))
    }, [prescricao])

   // console.log('pre', pre)
    console.log('medicamentocominclude', medicamentocominclude)

    const handleChange = param => {
        setPrescricao({ ...prescricao, apresentacoId: param.id })
    }

    const sendNextStep = useCallback(
        props.passNextStep(prescricao, 31),
        [prescricao, props]
    );


    return (
        <div>
            <h5>Escolha uma Apresentação</h5>
            <Container className="mt-2" >
                <ListGroup className="mt-2">
                    {medicamentocominclude.apresentacoes && medicamentocominclude.apresentacoes.map(apresentacao =>
                        <ListGroup.Item
                            key={apresentacao.id}
                            onClick={() => {
                                handleChange(medicamentocominclude)
                                sendNextStep()
                            }}
                        >{apresentacao.descricao}
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </Container>
        </div>
    )
}