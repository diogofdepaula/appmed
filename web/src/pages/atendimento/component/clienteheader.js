import React from 'react'
import { Col, Row, Container } from 'react-bootstrap';

export default function ClienteHeader(props) {

    return (
        <div>
            <Container>
                <Row className="align-middle">
                    <Col sm={7}>
                        <h2>{props.cliente.nome}</h2>
                    </Col>
                    <Col sm={3}>
                        <h4>{props.cliente.nascimento}({props.cliente.id})</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}