import { Divider } from '@material-ui/core'
import React, { createContext, useState } from 'react'
import AtendimentoAppBar from './component/appbar/'
import ClienteHeader from './component/clienteheader'
import Content from './component/content'

export const AtendimentoContext = createContext(null)

const Atendimento = () => {

    // deixei tudo aqui para que a appbar também tivesse acesso
    const [page, setPage] = useState('')
    const [prescricaoOnDuty, setPrescricaoOnDuty] = useState(null)
    const [prescricaoEdit, setPrescricaoEdit] = useState(null)
    const [lmeOnDuty, setLmeOnDuty] = useState(null)
    const [lmeEdit, setLmeEdit] = useState(null)
    const [step, setStep] = useState(0)
    const [update, setUpdate] = useState({
        count: 0,
        page: ''
    })

    const updatePage = () => {
        setUpdate({
            count: update.count + 1,
            page: page
        })
    }

    return (
        <>
            <ClienteHeader />
            <AtendimentoContext.Provider value={{ 
                page: page, 
                setPage: setPage, 
                updatePage: updatePage, 
                update: update, 
                step: step, 
                setStep: setStep, 
                prescricaoOnDuty: prescricaoOnDuty, 
                setPrescricaoOnDuty: setPrescricaoOnDuty,
                prescricaoEdit: prescricaoEdit,
                setPrescricaoEdit: setPrescricaoEdit,
                lmeOnDuty: lmeOnDuty, 
                setLmeOnDuty: setLmeOnDuty,
                lmeEdit: lmeEdit, 
                setLmeEdit: setLmeEdit,
                
                }} >
                    <Divider />
                    <AtendimentoAppBar />
                    <Content />
            </AtendimentoContext.Provider>
        </>
    )
}

export default Atendimento