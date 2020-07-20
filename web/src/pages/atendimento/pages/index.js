import React, { createContext, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import ClienteHeader from '../component/clienteheader'
import PrescricaoInsert from './prescricoes/insert'
import PrescricaoUpdate from './prescricoes/update'
import Main from './prescricoes/main'
import LMEInsert from './lmes/insert'
import LMEUpdate from './lmes/update'

export const ClienteContext = createContext(null)
// para as paginas mais profundas terem acesso a essa pagina
export const PageContext = createContext('main')
// é a prescricao que está sendo trabalhada, editada ou escolhida
// para atravessar de um lado para outro mais facilmente
export const PrescricaoMainContext = createContext(null)

export default function AtendimentoMain(props) {

    const [page, setPage] = useState()
    const [prescricaoMain, setPrescricaoMain] = useState()

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
                <Container fluid className="mt-2">
                    {indices.map(x =>
                        <Button
                            key={x[0]}
                            variant="outline-primary"
                            className="ml-2"
                            onClick={() => {
                                setPrescricaoMain(null)
                                setPage(x[0])
                            }}
                        >{x[1]}
                        </Button>
                    )}
                </Container>
                <PageContext.Provider value={setPage}>
                    <Container>
                        <PrescricaoMainContext.Provider value={{ prescricaoMain: prescricaoMain, setPrescricaoMain: setPrescricaoMain }} >
                            {page === 'prescricoes' && <Main />}
                            {page === 'prescricaoinsert' && <PrescricaoInsert />}
                            {page === 'prescricaoupdate' && <PrescricaoUpdate />}
                            {page === 'lmeinsert' && <LMEInsert />}
                            {page === 'lmeupdate' && <LMEUpdate />}
                        </PrescricaoMainContext.Provider>
                    </Container>
                </PageContext.Provider>
            </ClienteContext.Provider>
        </div >
    )
}