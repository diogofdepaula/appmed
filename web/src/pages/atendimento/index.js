import { Box, Divider } from '@material-ui/core'
import React, { createContext, useState } from 'react'
import AtendimentoAppBar from './component/appbar/'
import ClienteHeader from './component/clienteheader'
import Content from './component/content'

export const AtendimentoContext = createContext(null)
export const ImpressaoContext = createContext(null)

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

    const [impressao, setImpressao] = useState({
        printRef: null,
        visualizacao: false,
        prescricoesSelecionadas: [],
        tipo: '', // simples, controlado
        meses: 1,
        local: '', // consultorio, SUS (cisgap, cisco)
        lmesSelecionadas: [],
        lme: '',
        relatorio: true,
        comentario: '-',
        database: new Date(),
        pagesize: {
            // ajustes para o tamanho do papel
            a4: {
                // a4 em 150ppi = 1240 x 1754 px
                width: 1075 ,// 1190, // (-50)
                height: 1568,  // 1680, // (-74)
                padding: 2,
                somaheight: 950 // 900
            }, 
            receitapeq: {
                // 14 x 20 cm em 150ppi = 827 x 1181 px
                width: 716, // 777,
                height: 1044, // 1107,
                somaheight: 639,
            },
        }
    })

    return (
        <div>
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
                <ImpressaoContext.Provider value={{ impressao: impressao, setImpressao: setImpressao }}>
                    <Box>
                        <Divider />
                        <AtendimentoAppBar />
                        <Content />

                        {/* <Divider />
                    step: {JSON.stringify(step)}
                    <Divider />

                    <Divider />
                    page: {JSON.stringify(page)} 
                    <Divider />

                    <Divider />
                    prescEdit: {JSON.stringify(prescricaoEdit)}
                    <Divider />
                    
                    <Divider />
                    prescOnDuty: {JSON.stringify(prescricaoOnDuty)}
                    <Divider />


                    <Divider /> 
                    lmeEdit:  {JSON.stringify(lmeEdit)}
                    <Divider />
                   
                    
                    <Divider /> 
                    medicamentoEdit:  {JSON.stringify(medicamentoEdit)} 
                    <Divider />  */}

                    </Box>
                </ImpressaoContext.Provider>
            </AtendimentoContext.Provider>
        </div>
    )
}

export default Atendimento