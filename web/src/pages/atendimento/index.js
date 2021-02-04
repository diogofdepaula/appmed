import { Box, Divider } from '@material-ui/core'
import React, { createContext, useState } from 'react'
import AtendimentoAppBar from './component/appbar/'
import ClienteHeader from './component/clienteheader'
import Content from './component/content'

export const AtendimentoContext = createContext(null)

const Atendimento = () => {

    // deixei tudo aqui para que a appbar também tivesse acesso
    const [page, setPage] = useState('')
    const [prescricaoOnDuty, setPrescricaoOnDuty] = useState([])
    const [prescricaoEdit, setPrescricaoEdit] = useState([])
    const [lmeOnDuty, setLmeOnDuty] = useState([])
    const [lmeEdit, setLmeEdit] = useState([])
    const [step, setStep] = useState(0)
    const [medicamentoEdit, setMedicamentoEdit] = useState([])
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

    console.log(lmeEdit);

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
                medicamentoEdit: medicamentoEdit,
                setMedicamentoEdit: setMedicamentoEdit,
            }} >
                <Box>
                    <Divider />
                    <AtendimentoAppBar />
                    <Content />

                    {/* <Divider />
                    step: {JSON.stringify(step)}
                    <Divider /> */}
{/* 
                    <Divider />
                    page: {JSON.stringify(page)} 
                    <Divider /> */}

                    {/* <Divider />
                    prescEdit: {JSON.stringify(prescricaoEdit)}
                    <Divider /> */}
                    
                    {/* <Divider /> 
                    lmeEdit:  {JSON.stringify(lmeEdit)}
                    <Divider />
                    */}
                    {/*
                    <Divider /> 
                    medicamentoEdit:  {JSON.stringify(medicamentoEdit)} 
                    <Divider /> 
                    */}
                </Box>
            </AtendimentoContext.Provider>
        </>
    )
}

export default Atendimento