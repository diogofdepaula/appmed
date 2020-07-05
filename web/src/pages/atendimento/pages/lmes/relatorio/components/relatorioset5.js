import React, { useState } from 'react'
import { Button, Container, Form, FormGroup } from 'react-bootstrap'


export default function RelatorioSet3(props) {

    const [relatorio, setRelatorio] = useState(props.relatorio)

    const handleChange = event => {
        setRelatorio({ ...relatorio, [event.target.name]: event.target.checked })
    }

    return (
        <div>
            <Container>
                <FormGroup>
                    <Form.Check
                        type="checkbox"
                        label="infeccaoviral"
                        name="infeccaoviral"
                        value={relatorio.infeccaoviral}
                        onChange={handleChange}
                    />
                    <Form.Check
                        type="checkbox"
                        label="hepatite"
                        name="hepatite"
                        value={relatorio.hepatite}
                        onChange={handleChange}
                    />
                    <Form.Check
                        type="checkbox"
                        label="infeccaobacteriana"
                        name="infeccaobacteriana"
                        value={relatorio.infeccaobacteriana}
                        onChange={handleChange}
                    />
                    <Form.Check
                        type="checkbox"
                        label="neoplasia"
                        name="neoplasia"
                        value={relatorio.neoplasia}
                        onChange={handleChange}
                    />
                    <Form.Check
                        type="checkbox"
                        label="anemia"
                        name="anemia"
                        value={relatorio.anemia}
                        onChange={handleChange}
                    />
                    <Form.Check
                        type="checkbox"
                        label="alteracaohepatica"
                        name="alteracaohepatica"
                        value={relatorio.alteracaohepatica}
                        onChange={handleChange}
                    />
                </FormGroup>
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

