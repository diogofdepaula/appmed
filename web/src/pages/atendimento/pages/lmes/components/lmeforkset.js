import React from 'react'
import LMEList from './lmelist'
import { ListGroup, Container } from 'react-bootstrap';

export default function LMEForkSet(props) {

    return (
        <div>
            <h5>Escolha a qual LME</h5>
            <Container className="mt-2" >
                <ListGroup.Item
                 onClick={props.passNextStep(props.lme, 21)}
                >Criar uma nova LME
                </ListGroup.Item>
                <br/>
                <LMEList clienteId={props.lme.clienteId} /> 
            </Container>
        </div>
    )
}