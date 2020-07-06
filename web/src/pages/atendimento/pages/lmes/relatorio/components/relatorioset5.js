import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'


export default function RelatorioSet3(props) {

    const [relatorio, setRelatorio] = useState(props.relatorio)

    const handleChange = event => {
        setRelatorio({ ...relatorio, [event.target.name]: event.target.checked })
    }

    const comorb = [
        ['infeccaoviral', 'Infecção viral'],
        ['hepatite', 'Hepatite'],
        ['infeccaobacteriana', 'Infecção bacteriana'],
        ['neoplasia', 'Neoplasia'],
        ['anemia', 'Anemia'],
        ['alteracaohepatica', 'Alterações hepáticas'],
    ]

    return (
        <div>
            <Container>
                {comorb && comorb.map((w) =>
                    <Form.Check
                        key={w[0]}
                        type="checkbox"
                        label={w[1]}
                        id={w[0]}
                        name={w[0]}
                        // value={w}
                        onChange={handleChange}
                    />
                )}
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

