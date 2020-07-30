import React, { useContext } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import LMEList from '../../lmes/components/lmelist';
import { PrescricaoEditorContext } from '../editor';

export default function LMEForkSet() {

    const { setStepContext } = useContext(PrescricaoEditorContext)

    return (
        <div>
            <h5>Escolha a qual LME</h5>
            <Container className="mt-2" >
                <ListGroup.Item
                    onClick={() => {
                        // irá manter o prescricaoContext.lmeId = null
                        setStepContext(21)
                    }}
                >Criar uma nova LME
                </ListGroup.Item>
                <br />
                <LMEList />
            </Container>
        </div>
    )
}