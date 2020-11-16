import { Divider } from '@material-ui/core'
import React, { createContext, useState } from 'react'
import AtendimentoAppBar from './component/appbar/'
import ClienteHeader from './component/clienteheader'
import Content from './component/content'

export const ClienteContextAntigo = createContext(null)
export const PageAtendimentoContext = createContext('main')
export const PrescricaoMainContext = createContext(null)
export const LMEMainContext = createContext(null)
export const StepAtendimentoContext = createContext(null)

const Atendimento = () => {

    const [page, setPage] = useState('')
    const [prescricaoMain, setPrescricaoMain] = useState(null)
    const [lmeMain, setLmeMain] = useState()
    const [update, setUpdate] = useState({
        count: 0,
        page: ''
    })
    // deixei aqui para que a appbar também tivesse acesso
    const [step, setStep] = useState(0)

    const updatePage = () => {
        setUpdate({
            count: update.count + 1,
            page: page
        })
    }

    console.log('prescricaoMain no Atendimento', prescricaoMain)

    return (
        <>
            <ClienteHeader />
            <PageAtendimentoContext.Provider value={{ page: page, setPage: setPage, updatePage: updatePage, update: update }}>
                <StepAtendimentoContext.Provider value={{ step: step, setStep: setStep }} >
                    <PrescricaoMainContext.Provider value={{ prescricaoMain: prescricaoMain, setPrescricaoMain: setPrescricaoMain }} >
                        <LMEMainContext.Provider value={{ lmeMain: lmeMain, setLmeMain: setLmeMain }} >
                            <Divider />
                            <AtendimentoAppBar />
                            <Content />
                        </LMEMainContext.Provider>
                    </PrescricaoMainContext.Provider>
                </StepAtendimentoContext.Provider>
            </PageAtendimentoContext.Provider>
        </>
    )
}

export default Atendimento