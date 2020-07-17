import React, { useContext } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { LMEContext } from '../insert';
import LMEList from './lmelist';

export default function LMEForkSet() {

    const { lmeContext, setLmeContext, setStepContext } = useContext(LMEContext)

    return (
        <div>
            <h5>Escolha a qual LME</h5>
            <Container className="mt-2" >
                <ListGroup.Item
                 onClick={() => {
                    setLmeContext(lmeContext)
                    setStepContext(21)                     
                 }}
                >Criar uma nova LME
                </ListGroup.Item>
                <br/>
                <LMEList /> 
            </Container>
        </div>
    )
}