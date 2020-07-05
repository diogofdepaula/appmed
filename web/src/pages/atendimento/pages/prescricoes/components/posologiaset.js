import React from 'react'
import { Container, ListGroup, Button } from 'react-bootstrap'

export default function PosologiaSet(props) {

    return (
        <div>
            <h5>Escolha uma Posologia</h5>
            <Container className="mt-2" >
                <ListGroup className="mt-2">
                    {props.medicamento.posologias && props.medicamento.posologias.map(posologia =>
                        <ListGroup.Item
                            key={posologia.id}
                            onClick={props.passPosologia(posologia)}
                        >{posologia.posologia}
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </Container>
            <Button
                className="mt-2"
                variant="outline-danger"
                onClick={() => props.naoPadrao()}
            >Usar posologia não padronizada
                    </Button>
        </div>
    )
}