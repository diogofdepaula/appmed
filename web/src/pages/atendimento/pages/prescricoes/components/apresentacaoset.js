import React, { useEffect, useState, useCallback } from 'react'
import { Container, ListGroup } from 'react-bootstrap'

export default function ApresentacaoSet(props) {

    const [prescricao, setPrescricao] = useState(props.prescricao)
    const [medicamentocominclude, setMedicamentoComInclude] = useState(props.medicamento)
    const [validacao, setValidacao] = useState(false)

    const fetchData = useCallback(async () => {
        const res = await fetch(`http://localhost:4001/api.appmed/medicamentos/${props.prescricao.medicamentoId}`)
        const json = await res.json();
        setMedicamentoComInclude(json);
    }, [props])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    const handleChange = param => () => {
        setPrescricao({ ...prescricao, apresentacoId: param.id })
        setValidacao(true)
    }

    const sendNextStep = useCallback(
        props.passNextStep(prescricao, 31),
        [prescricao, props]
    )

    useEffect(() => {
        if (validacao){
            sendNextStep()
        }
    }, [validacao, sendNextStep])
 
    return (
        <div>
            <h5>Escolha uma Apresentação</h5>
            <Container className="mt-2" >
                <ListGroup className="mt-2">
                    {medicamentocominclude && medicamentocominclude.apresentacoes && medicamentocominclude.apresentacoes.map(apresentacao =>
                        <ListGroup.Item
                            key={apresentacao.id}
                            onClick={handleChange(apresentacao)}
                        >{apresentacao.descricao}
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </Container>
        </div>
    )
}