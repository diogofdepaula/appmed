import React, { useContext } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { ClienteContext } from '../pages';

export default function ClienteHeader() {

    const cliente = useContext(ClienteContext)

    return (
        <div>
            <Card className="mt-2">
                <Row className="justify-content-md-center">
                    <Col sm={7}>
                        <h2>{cliente.nome}</h2>
                    </Col>
                    <Col sm={3}>
                        <h4>{cliente.nascimento} ({cliente.id})</h4>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}