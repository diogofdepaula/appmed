import React, { useContext, useState, createContext } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { PageContext } from '../..';
import LMEList from '../components/lmelist';
import LMEData from '../components/lmedata';

export const LMEMainContext = createContext(null)

export default function LMEMain() {

    const setPage = useContext(PageContext)
    const [lmeMain, setLmeMain] = useState()

    const indices = [
        ['prescricaoinsert', '(Nova) LME'],  // deixei aqui por deixar, pois a LME é iniciada na prescricao
        ['lmeprint', 'Imprimir LME'],
        ['rrrrrr', 'RRRRRR'],
        ['uuuuu', 'UUUUU'],
        ['oooooo', 'OOOOOO'],
    ]

    return (
        <div>
            <LMEMainContext.Provider value={{ lmeMain: lmeMain, setLmeMain: setLmeMain }} >
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
                        <Col sm={4}>
                            <LMEList />
                        </Col>
                        <Col sm={6}>
                            <LMEData />
                        </Col>
                    </Row>
                </Container>
            </LMEMainContext.Provider>
        </div>
    )
}