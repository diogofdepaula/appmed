import React, { useContext } from 'react'
import { MedicamentosContext } from '..'
import MedicamentoInsert from '../insert'
import MedicamentoMain from '../main'
import MedicamentoUpdate from '../update'

const Content = () => {

    const { page } = useContext(MedicamentosContext)

    /// se mudar aqui: não esquercer de atualizar a ThirdAppBar
    switch (page) {
        case 'medicamentosmain':
            return <MedicamentoMain /> 
        case 'medicamentoinsert':
            return <MedicamentoInsert />
        case 'medicamentoupdate':
            return <MedicamentoUpdate />
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