import React, { createContext, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import ClienteHeader from '../component/clienteheader'
import PrescricaoMain from './prescricoes/main'
import PrescricaoInsert from './prescricoes/insert'

export const ClienteContext = createContext(null)

export default function Main(props) {

    const [page, setPage] = useState(1)
    const [buttons, setButtons] = useState(true)

    const indices = [
        ['prescricoes', 'Prescrições'],
        ['lmes', 'LMEs'],
        ['solicitacoes', 'Solicitações'],
        ['atestados', 'Atestados'],
        ['consentimento', 'Termos de consentimento'],
    ]

    return (
        <div>
            <ClienteContext.Provider value={props.cliente}>
                <ClienteHeader />
                <p>
                    EU QUERIA DEIXAR UNS BOTÕES BEM GRANDÕES PARECENDO CARDS
                    FAZER ISSO DEPOIS PARA DIFERENCIAR E FACILITAR O CLICK
                </p>
                {buttons &&
                    < Container fluid className="mt-2">
                        {indices.map(x => 
                            <Button
                                key={x[0]}
                                variant="outline-primary"
                                className="ml-2"
                                onClick={() => {
                                    setPage(x[0])
                                    setButtons(false)
                                }}
                            >{x[1]}
                            </Button>
                        )}
                    </Container>
                }
                <Container>
                    {page === 'prescricoes' && <PrescricaoMain />}
                    {page === 'nova' && <PrescricaoInsert />}
                </Container>
            </ClienteContext.Provider>
        </div >
    )
}