import React, { useEffect, useState, useCallback } from 'react'
import { Container, ListGroup, FormControl } from 'react-bootstrap'

export default function MedicamentoSet(props) {

    const [prescricao, setPrescricao] = useState(props.prescricao)
    const [medicamentos, setmedicamentos] = useState([])
    const [medicamentosfiltrados, setmedicamentosfiltrados] = useState([])
    const [validacao, setValidacao] = useState(false)

    useEffect(() => {
        fetch('http://localhost:4001/api.appmed/medicamentos/short')
            .then(response => response.json())
            .then(response => setmedicamentos(response))
            .catch(err => console.log(err))
    }, [])

    const filterMedicamento = event => {

        if (event.target.value.length >= 3) {
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
            {JSON.stringify(prescricao)}
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
