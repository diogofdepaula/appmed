import React, { useState } from 'react';
import { Col, ListGroup, Row, Container } from 'react-bootstrap';
import PrescricaoData from './prescricaodata'

export default function PrescricaoList(props) {

    const [prescricao, setprescricao] = useState()

    return (
        <div>
            <Container className="mt-2" >
                <Row>
                    <Col sm={4}>
                        <ListGroup className="mt-2">
                            {props.prescricoes && props.prescricoes.map(prescricao =>
                                prescricao.emuso && (
                                    <ListGroup.Item
                                        key={prescricao.id}
                                        onClick={() => setprescricao(prescricao)}
                                    >{prescricao.medicamento.farmaco} ({prescricao.apresentaco.descricao})
                                    </ListGroup.Item>
                                )
                            )}
                            <ListGroup.Item disabled>Porta ac consectetur ac</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={6}>
                        <PrescricaoData prescricao={prescricao} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
