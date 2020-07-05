import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'


export default function RelatorioSet3(props) {

    const [relatorio, setRelatorio] = useState(props.relatorio)

    const handleChange = event => {
        setRelatorio({ ...relatorio, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <Container>
                <Form.Group>
                    <Form.Control
                        type="text"
                        id="das28"
                        name="das28"
                        placeholder="das28"
                        value={relatorio.das28}
                        onChange={handleChange}
                    />
                    <Form.Control
                        type="text"
                        id="cdai"
                        name="cdai"
                        placeholder="cdai"
                        value={relatorio.cdai}
                        onChange={handleChange}
                    />
                    <Form.Control
                        type="text"
                        id="sdai"
                        name="sdai"
                        placeholder="sdai"
                        value={relatorio.sdai}
                        onChange={handleChange}
                    />
                    <Form.Control
                        type="text"
                        id="basdai"
                        name="basdai"
                        placeholder="basdai"
                        value={relatorio.basdai}
                        onChange={handleChange}
                    />
                    <Form.Control
                        type="text"
                        id="asdas"
                        name="asdas"
                        placeholder="asdas"
                        value={relatorio.asdas}
                        onChange={handleChange}
                    />
                    <Form.Control
                        type="text"
                        id="mda"
                        name="mda"
                        placeholder="mda"
                        value={relatorio.mda}
                        onChange={handleChange}
                    />
                    <Form.Control
                        type="text"
                        id="eva"
                        name="eva"
                        placeholder="eva"
                        value={relatorio.eva}
                        onChange={handleChange}
                    />
                </Form.Group>
            </Container>
            <Container className="mt-2">
                <Button
                    variant="outline-success"
                    onClick={props.passPrevious}
                > Anterior
                    </Button>
                <Button
                    className="ml-1"
                    variant="outline-success"
                    onClick={props.passNext(relatorio)}
                > Próximo
                    </Button>
            </Container>
        </div>
    )
}

