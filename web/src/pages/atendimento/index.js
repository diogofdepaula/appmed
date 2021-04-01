import { Box, Divider } from '@material-ui/core'
import React, { createContext, useState } from 'react'
import { useReactToPrint } from 'react-to-print'
import AtendimentoAppBar from './component/appbar/'
import ClienteHeader from './component/clienteheader'
import Content from './component/content'
import Factory from './pages/print/pages'


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

    //Dados para impressao
    //const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => <Factory />
        //pageStyle: '@page { size: A4 portrait;}'
    });

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
        a4Adjust: {
            width: 1190,
            height: 1680
        }
    })

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
                <ImpressaoContext.Provider value={{ impressao: impressao, setImpressao: setImpressao, handlePrint: handlePrint }}>
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
        </>
    )
}

export default Atendimento