import React, { createContext, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import ClienteHeader from '../component/clienteheader'
import PrescricaoInsert from './prescricoes/insert'
import PrescricaoUpdate from './prescricoes/update'
import PrescricaoMain from './prescricoes/main'
import LMEInsert from './lmes/insert'
import LMEUpdate from './lmes/update'
import LMEMain from './lmes/main'
import PrescricaoDelete from './prescricoes/delete'

export const ClienteContext = createContext(null)
export const PageContext = createContext('main')
export const PrescricaoMainContext = createContext(null)
export const LMEMainContext = createContext(null)

export default function AtendimentoMain(props) {

    const [page, setPage] = useState()
    const [prescricaoMain, setPrescricaoMain] = useState()
    const [lmeMain, setLmeMain] = useState()

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
                            {page === 'prescricoes' && <PrescricaoMain />}
                            {page === 'prescricaoinsert' && <PrescricaoInsert />}
                            {page === 'prescricaoupdate' && <PrescricaoUpdate />}
                            {page === 'prescricaodelete' && <PrescricaoDelete />}
                            <LMEMainContext.Provider value={{ lmeMain: lmeMain, setLmeMain: setLmeMain }} >
                                {page === 'lmes' && <LMEMain />}
                                {page === 'lmeinsert' && <LMEInsert />}
                                {page === 'lmeupdate' && <LMEUpdate />}
                            </LMEMainContext.Provider>
                        </PrescricaoMainContext.Provider>
                    </Container>
                </PageContext.Provider>
            </ClienteContext.Provider>
        </div >
    )
}