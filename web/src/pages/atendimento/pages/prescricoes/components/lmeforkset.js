import React from 'react'
import LMEList from '../../lmes/components/lmelist'
import { ListGroup, Container } from 'react-bootstrap';

export default function LMEForkSet(props) {

    const cliente = props.cliente
    const prescricao = props.prescricao
    const medicamento = props.medicamento

    return (
        <div>
            <Container className="mt-2" >
                <ListGroup.Item
                 onClick={() => props.redirect({ pathname: `/lmes/${cliente.id}/insert`, state: { cliente, prescricao, medicamento } })} // ver depois se passa o props direto
                >Criar uma nova LME
                </ListGroup.Item>
                <br/>
                <LMEList cliente={cliente} /> 
            </Container>
        </div>
    )
}
