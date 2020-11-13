import { Divider } from '@material-ui/core'
import React, { createContext, useState } from 'react'
import AtendimentoAppBar from './component/appbar'
import ClienteHeader from './component/clienteheader'
import Content from './component/content'

export const ClienteContextAntigo = createContext(null)
export const PageAtendimentoContext = createContext('main')
export const PrescricaoMainContext = createContext(null)
export const LMEMainContext = createContext(null)

const Atendimento = () => {

    const [page, setPage] = useState()
    const [prescricaoMain, setPrescricaoMain] = useState(null)
    const [lmeMain, setLmeMain] = useState()

    return (
        <>
            <ClienteHeader />
            <PageAtendimentoContext.Provider value={{ page: page, setPage: setPage }}>
                <PrescricaoMainContext.Provider value={{ prescricaoMain: prescricaoMain, setPrescricaoMain: setPrescricaoMain }} >
                    <LMEMainContext.Provider value={{ lmeMain: lmeMain, setLmeMain: setLmeMain }} >
                        <Divider />
                        <AtendimentoAppBar />
                        <Divider />
                        <Content page={page} />
                    </LMEMainContext.Provider>
                </PrescricaoMainContext.Provider>
            </PageAtendimentoContext.Provider>
        </>
    )
}

export default Atendimento