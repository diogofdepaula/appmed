import React, { useContext } from 'react'
import { MedicamentosContext } from '..'
import MedicamentoMain from '../main'

const Content = () => {

    const { page } = useContext(MedicamentosContext)

    /// se mudar aqui: não esquercer de atualizar a ThirdAppBar
    switch (page) {
        case 'medicamentosmain':
            return <MedicamentoMain /> 
        // case 'clienteinsert':
        //     return <ClienteInsert />
        // case 'clienteupdate':
        //     return <ClienteUpdate />
        // case 'prescricaodelete':
        //     return <PrescricaoDelete />
        // case 'lmesmain':
        //     return <LMEMain />
        // case 'lmeinsert':
        //     return <LMEInsert />
        // case 'lmeupdate':
        //     return <LMEUpdate />
        // case 'lmedelete':
        //     return <LMEDelete />
        // case 'print':
        //     return <Print />
        case 'teste':
            return <div></div>
        default:
            return <MedicamentoMain />
    }
}

export default Content