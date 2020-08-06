import React, { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { PageContext } from '../..';
import LMEData from '../components/lmedata';
import LMEList from '../components/lmelist';

export default function LMEMain() {

    const setPage = useContext(PageContext)
   
    const indices = [
        ['prescricaoinsert', '(Nova) LME'],  // deixei aqui por deixar, pois a LME é iniciada na prescricao
        ['lmeprint', 'Imprimir LME'],
        ['rrrrrr', 'RRRRRR'],
        ['uuuuu', 'UUUUU'],
        ['oooooo', 'OOOOOO'],
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
                                setPage(x[0])
                            }}
                        >{x[1]}
                        </Button>
                    )}
                </Container>
                <Container  className="mt-2">
                    <Row>
                        <Col sm={6}>
                            <LMEList />
                        </Col>
                        <Col sm={4}>
                            <LMEData />
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}