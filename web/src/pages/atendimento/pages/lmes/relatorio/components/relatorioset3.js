import React, { useContext } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { RelatorioContent } from '../relatoriovarset'

export default function RelatorioSet3(props) {

    const { relatorioContext, setRelatorioContext, setStepContext } = useContext(RelatorioContent)

    const handleChange = event => {
        console.log('event.target.name', event.target.name)
        console.log('event.target.value', event.target.value)
        setRelatorioContext({ ...relatorioContext, [event.target.name]: event.target.value })
    }

   // const [meds, setMeds] = useState([])

    const indices = [
        [relatorioContext.medicamento1, relatorioContext.dose1, relatorioContext.inicio1, relatorioContext.fim1, relatorioContext.motivo1, 1],
        [relatorioContext.medicamento2, relatorioContext.dose2, relatorioContext.inicio2, relatorioContext.fim2, relatorioContext.motivo2, 2],
        [relatorioContext.medicamento3, relatorioContext.dose3, relatorioContext.inicio3, relatorioContext.fim3, relatorioContext.motivo3, 3],
        [relatorioContext.medicamento4, relatorioContext.dose4, relatorioContext.inicio4, relatorioContext.fim4, relatorioContext.motivo4, 4],
        [relatorioContext.medicamento5, relatorioContext.dose5, relatorioContext.inicio5, relatorioContext.fim5, relatorioContext.motivo5, 5],
        [relatorioContext.medicamento6, relatorioContext.dose6, relatorioContext.inicio6, relatorioContext.fim6, relatorioContext.motivo6, 6],
        [relatorioContext.medicamento7, relatorioContext.dose7, relatorioContext.inicio7, relatorioContext.fim7, relatorioContext.motivo7, 7],
    ]

    const outrasvar = [...Array(7)].map((v, i) => i + 1).map(x => {
                 return ['medicamento'.concat(x), 'dose'.concat(x), 'inicio'.concat(x), 'fim'.concat(x), 'motivo'.concat(x)]
    })
    // const getMeds = useCallback((param) => {
    //     setMeds([...Array(param)].map((v, i) => i + 1).map(x => {
    //         return ['medicamento'.concat(x), 'dose'.concat(x), 'inicio'.concat(x), 'fim'.concat(x), 'motivo'.concat(x)]
    //     }))
    // }, [])

    // useEffect(() => {
    //     getMeds(1)
    // }, [getMeds])

    // const [numb, setNumb] = useState(2)
    // const increment = () => {

    //     if (numb === 8) {
    //         alert('O limite são 7 (sete) medicamentos')
    //     } else {
    //         setNumb(numb + 1)
    //         getMeds(numb)
    //     }
    // }

    console.log('indices', indices)
    return (
        <div>
            <Container>
                <Card body>
                    {indices.map(med =>
                        <div key={med[5]}>
                            <Form.Group>
                                <Row>
                                    <Col xs={6}>
                                        <Form.Control
                                            type="text"
                                            name={med[0]}
                                            placeholder='Medicamento'
                                            value={med[0]}
                                            onChange={handleChange}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            name={med[1]}
                                            placeholder="Dose"
                                            value={med[1]}
                                            onChange={handleChange}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            name={med[2]}
                                            placeholder="Início"
                                            value={med[2]}
                                            onChange={handleChange}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            name={med[3]}
                                            placeholder="Fim"
                                            value={med[3]}
                                            onChange={handleChange}
                                        />
                                    </Col>
                                </Row>
                                <Form.Control
                                    className='mt-2'
                                    type="text"
                                    name={med[4]}
                                    placeholder="Motivo"
                                    value={med[4]}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </div>
                    )}
                </Card>
            </Container>

            <Container className="mt-2">
                <Button
                    variant="outline-success"
                    onClick={() => {
                        setRelatorioContext(relatorioContext)
                        setStepContext(2)
                    }}
                > Anterior
                </Button>
                <Button
                    className="ml-1"
                    variant="outline-warning"
                   // onClick={increment}
                > Adicionar novo
                </Button>
                <Button
                    className="ml-1"
                    variant="outline-success"
                    onClick={() => {
                        setRelatorioContext(relatorioContext)
                        setStepContext(4)
                    }}
                > Próximo
                </Button>
            </Container>
        </div>
    )
}