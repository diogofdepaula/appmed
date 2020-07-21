import React, { useContext } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { RelatorioContent } from '../relatoriovarset'

export default function RelatorioSet3(props) {

    const { relatorioContext, setRelatorioContext, setStepContext } = useContext(RelatorioContent)

    const handleChange = event => {
        setRelatorioContext({ ...relatorioContext, [event.target.name]: event.target.checked })
    }

    const comorb = [
        ['infeccaoviral', 'Infecção viral', relatorioContext.infeccaoviral ],
        ['hepatite', 'Hepatite', relatorioContext.hepatite ],
        ['infeccaobacteriana', 'Infecção bacteriana', relatorioContext.infeccaobacteriana ],
        ['neoplasia', 'Neoplasia', relatorioContext.neoplasia ],
        ['anemia', 'Anemia', relatorioContext.anemia ],
        ['alteracaohepatica', 'Alterações hepáticas', relatorioContext.alteracaohepatica ],
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
                        checked={w[2]}
                        onChange={handleChange}
                    />
                )}
            </Container>
            <Container className="mt-2">
                <Button
                    variant="outline-success"
                    onClick={() => {
                        setRelatorioContext(relatorioContext)
                        setStepContext(4)
                    }}
                > Anterior
                    </Button>
                <Button
                    className="ml-1"
                    variant="outline-success"
                    onClick={() => {
                        setRelatorioContext(relatorioContext)
                        setStepContext(6)
                    }}
                > Próximo
                    </Button>
            </Container>
        </div>
    )
}

