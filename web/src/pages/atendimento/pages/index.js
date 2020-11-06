import { Box, Breadcrumbs, Link } from '@material-ui/core'
import React, { createContext, useState } from 'react'
import ClienteHeader from '../component/clienteheader'
import LMEDelete from './lmes/delete'
import LMEInsert from './lmes/insert'
import LMEMain from './lmes/main'
import LMEUpdate from './lmes/update'
// import LMEDelete from './lmes/delete'
import PrescricaoDelete from './prescricoes/delete'
import PrescricaoInsert from './prescricoes/insert'
import PrescricaoMain from './prescricoes/main'
import PrescricaoUpdate from './prescricoes/update'
import Print from './print'

export const ClienteContext = createContext(null)
export const PageContext = createContext('main')
export const PrescricaoMainContext = createContext(null)
export const LMEMainContext = createContext(null)

const AtendimentoMain = (props) => {

    const [page, setPage] = useState()
    const [prescricaoMain, setPrescricaoMain] = useState()
    const [lmeMain, setLmeMain] = useState()

    const links = [
        ['prescricoes', 'Prescrições'],
        ['lmes', 'LMEs'],
        ['solicitacoes', 'Solicitações'],
        ['atestados', 'Atestados'],
        ['consentimento', 'Termos de consentimento'],
    ]

    const GetContent = () => {
        switch (page) {
            case 'prescricoes':
                return <PrescricaoMain />
            case 'prescricaoinsert':
                return <PrescricaoInsert />
            case 'prescricaoupdate':
                return <PrescricaoUpdate />
            case 'prescricaodelete':
                return <PrescricaoDelete />
            case 'lmes':
                return <LMEMain />
            case 'lmeinsert':
                return <LMEInsert />
            case 'lmeupdate':
                return <LMEUpdate />
            case 'lmedelete':
                return <LMEDelete />
            case 'print':
                return <Print />
            default:
                return <div />
        }
    }

    return (
        <>
            <ClienteContext.Provider value={props.cliente}>
                <ClienteHeader />
                <Breadcrumbs>
                    {links.map(x =>
                        <Link key={x[0]}
                            onClick={() => {
                                setPrescricaoMain(null)
                                setPage(x[0])
                            }}>{x[1]}
                        </Link>
                    )}
                </Breadcrumbs>
                <Box>
                    <PageContext.Provider value={setPage}>
                        <PrescricaoMainContext.Provider value={{ prescricaoMain: prescricaoMain, setPrescricaoMain: setPrescricaoMain }} >
                            <LMEMainContext.Provider value={{ lmeMain: lmeMain, setLmeMain: setLmeMain }} >
                                <GetContent />
                            </LMEMainContext.Provider>
                        </PrescricaoMainContext.Provider>
                    </PageContext.Provider>
                </Box>
            </ClienteContext.Provider>
        </>
    )
}

export default AtendimentoMain