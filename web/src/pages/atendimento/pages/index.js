import React, { createContext, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import ClienteHeader from '../component/clienteheader'
import PrescricaoMain from './prescricoes/main'

export const ClienteContext = createContext(null)

export default function Main(props) {

    const [page, setPage] = useState(1)
    const [buttons, setButtons] = useState(true)

    return (
        <div>
            <ClienteContext.Provider value={props.cliente}>
                <ClienteHeader />
                <p>
                    EU QUERIA DEIXAR UNS BOTÕES BEM GRANDÕES PARECENDO CARDS
                    FAZER ISSO DEPOIS PARA DIFERENCIAR E FACILITAR O CLICK
                </p>
                {buttons &&
                    <Container fluid className="mt-2">
                        <Button
                            variant="outline-primary"
                            className="ml-2"
                            onClick={() => {
                                setPage('prescricao')
                                setButtons(false)
                            }}
                        >Prescrições</Button>
                        <Button variant="outline-primary" className="ml-2">LME</Button>
                        <Button variant="outline-primary" className="ml-2">Solicitações</Button>
                        <Button variant="outline-primary" className="ml-2">Atestados</Button>
                        <Button variant="outline-primary" className="ml-2">Termos de consentimento</Button>
                    </Container>
                }
                <Container>
                    {page === 'prescricao' && <PrescricaoMain />}
                </Container>
            </ClienteContext.Provider>
        </div>
    )
}