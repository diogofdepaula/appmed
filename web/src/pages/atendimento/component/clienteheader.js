import React, {useContext} from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import { ClienteContext } from '../pages';

export default function ClienteHeader() {

    const cliente = useContext(ClienteContext)

    return (
        <div>
            <Container>
                <Row className="align-middle">
                    <Col sm={7}>
                        <h2>{cliente.nome}</h2>
                    </Col>
                    <Col sm={3}>
                        <h4>{cliente.nascimento}({cliente.id})</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}