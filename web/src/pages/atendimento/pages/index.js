import React, { createContext } from 'react'
import ClienteHeader from '../component/clienteheader'
import { Link } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap';

export const ClienteContext = createContext(null)

export default function Main(props) {

    const cliente = props.cliente

    return (
        <div>
            <ClienteContext.Provider value={props.cliente}>
                <ClienteHeader />

                <p>
                    EU QUERIA DEIXAR UNS BOTÕES BEM GRANDÕES PARECENDO CARDS
                    FAZER ISSO DEPOIS PARA DIFERENCIAR E FACILITAR O CLICK
            </p>
                <Container fluid className="mt-2">
                    <Link to={{ pathname: `/prescricoes/${cliente.id}`, state: { cliente } }} >
                        <Button variant="outline-primary" className="ml-2">Prescrições</Button>
                    </Link>
                    <Link to={{ pathname: `/lmes/${cliente.id}`, state: { cliente } }}>
                        <Button variant="outline-primary" className="ml-2">LME</Button>
                    </Link>
                    <Link to="/##">
                        <Button variant="outline-primary" className="ml-2">Solicitações</Button>
                    </Link>
                    <Link to="/###">
                        <Button variant="outline-primary" className="ml-2">Atestados</Button>
                    </Link>
                    <Link to="/###">
                        <Button variant="outline-primary" className="ml-2">Termos de consentimento</Button>
                    </Link>
                </Container>
            </ClienteContext.Provider>
        </div>
    )
}