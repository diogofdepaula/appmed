import React, { useEffect, useState } from 'react'
import { Container, ListGroup, FormControl } from 'react-bootstrap'

export default function MedicamentoSet(props) {

    const [medicamentos, setmedicamentos] = useState([])
    const [medicamentosfiltrados, setmedicamentosfiltrados] = useState([])

    useEffect(() => {

        // fazer algo depois para ele ir buscando as incluções somente o que for selecionado
        // para não precisar trazer todo o bando de medicamento com inclusões junto
        // do tipo http://localhost:4001/api.appmed/medicamentos/parcial ou completa
        fetch('http://localhost:4001/api.appmed/medicamentos')
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
                    {medicamentosfiltrados.map(medicamento =>
                        <ListGroup.Item
                            key={medicamento.id}
                            onClick={props.passMedicamento(medicamento)}
                        >{medicamento.farmaco} {medicamento.abreviatura && "(" + medicamento.abreviatura + ")"}
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </Container>
        </div>
    )
}