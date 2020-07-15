import React, { createContext, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import ClienteHeader from '../component/clienteheader'
import PrescricaoInsert from './prescricoes/insert'
import PrescricaoMain from './prescricoes/main'
import LMEInsert from './lmes/insert'

export const ClienteContext = createContext(null)
// para as paginas mais profundas terem acesso a essa pagina
export const PageContext = createContext('main')

export default function AtendimentoMain(props) {

    const [page, setPage] = useState()
    const [prescricao, setPrescricao] = useState()

    const indices = [
        ['prescricoes', 'Prescrições'],
        ['lmes', 'LMEs'],
        ['solicitacoes', 'Solicitações'],
        ['atestados', 'Atestados'],
        ['consentimento', 'Termos de consentimento'],
    ]

    console.log('page', page)

    return (
        <div>
            <ClienteContext.Provider value={props.cliente}>
                <ClienteHeader />
                <Container fluid className="mt-2">
                    {indices.map(x =>
                        <Button
                            key={x[0]}
                            variant="outline-primary"
                            className="ml-2"
                            onClick={() => {
                                setPage(x[0])
                                //setButtons(false)
                            }}
                        >{x[1]}
                        </Button>
                    )}
                </Container>
                <PageContext.Provider value={setPage}>
                    <Container>
                        {page === 'prescricoes' && <PrescricaoMain passPage={setPage} />}
                        {page === 'prescricaoinsert' && <PrescricaoInsert passPrescricao={setPrescricao} />}
                        {page === 'lmeinsert' && <LMEInsert prescricao={prescricao} />}
                    </Container>
                </PageContext.Provider>
            </ClienteContext.Provider>
        </div >
    )
}