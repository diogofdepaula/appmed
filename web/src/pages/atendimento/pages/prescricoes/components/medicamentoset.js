import React, { useEffect, useState, useCallback } from 'react'
import { Container, ListGroup, FormControl } from 'react-bootstrap'

export default function MedicamentoSet(props) {

    const [prescricao, setPrescricao] = useState(props.prescricao)
    const [medicamentos, setMedicamentos] = useState([])
    const [medicamentosfiltrados, setmedicamentosfiltrados] = useState([])
    const [validacao, setValidacao] = useState(false)

    const fetchData = useCallback(async () => {
        const res = await fetch('http://localhost:4001/api.appmed/medicamentos/short')
        const json = await res.json();
        setMedicamentos(json);
    }, [])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    const filterMedicamento = event => {

        if (event.target.value.length >= 2) {
            let filtro = [...medicamentos].filter(w =>
                w.farmaco.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1 ||
                w.abreviatura.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
            )
            if (filtro.length === 0) {
                filtro.push({
                    id: 0,
                    farmaco: "nenhum medicamento encontrado"
                })
            }
            setmedicamentosfiltrados(filtro)
        } else {
            setmedicamentosfiltrados([])
        }
    }

    const handleChange = param => () => {
        setPrescricao({ ...prescricao, medicamentoId: param.id })
        setValidacao(true) // nesse caso fica aqui dentro, mas para os outros fica no botão ou seja depois de terminar
    }

    const sendNextStep = useCallback(
        props.passNextStep(prescricao, 21),
        [prescricao, props]
    )

    useEffect(() => {
        if (validacao){
            sendNextStep()
        }
    }, [validacao, sendNextStep])
 

    return (
        <div>
            <h5>Escolha o fármaco</h5>
            <Container>
                <FormControl
                    autoFocus
                    type="text"
                    placeholder="Insira o nome do fármaco"
                    className="mt-2 mb-2"
                    onChange={filterMedicamento}
                />
            </Container>
            <Container className="mt-2" >
                <ListGroup className="mt-2">
                    {medicamentosfiltrados.map((medicamento, index) =>
                        <ListGroup.Item
                            key={index}
                            onClick={handleChange(medicamento)}
                        >{medicamento.farmaco} {medicamento.abreviatura && "(" + medicamento.abreviatura + ")"}
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </Container>
        </div>
    )
}
