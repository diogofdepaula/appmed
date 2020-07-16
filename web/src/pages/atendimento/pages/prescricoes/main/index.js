import React, { useContext } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import PrescricaoList from '../components/prescricaolist';
import PrescricaoData from '../components/prescricaodata'
import { PageContext } from '../..';

export default function Main(props) {

    const page = useContext(PageContext)
    
    const indices = [
        ['prescricaoinsert', 'Nova Prescrição'],
        ['prescricaoupdate', 'Editar Prescricao'],
        ['xxxxxxxxxxx', 'XXXXXX'],
        ['yyyyyyy', 'YYYYYYY'],
        ['zzzzzzzzzz', 'ZZZZZZ'],
    ]

    return (
        <div>
            <Container fluid className="mt-2">
                {indices.map(x =>
                    <Button
                        key={x[0]}
                        variant="outline-primary"
                        className="ml-2"
                        onClick={() => {
                            page(x[0])
                        }}
                    >{x[1]}
                    </Button>
                )}
            </Container>
            <Container>
                <Row>
                    <Col sm={4}>
                        <PrescricaoList />
                    </Col>
                    <Col sm={6}>
                        <PrescricaoData />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}