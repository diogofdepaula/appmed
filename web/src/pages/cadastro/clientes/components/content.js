import React, { useContext } from 'react'
import { ClientesContext } from '..'
import ClienteMain from '../main'

const Content = () => {

    const { page } = useContext(ClientesContext)

    /// se mudar aqui: não esquercer de atualizar a ThirdAppBar
    switch (page) {
        case 'clientesmain':
            return <ClienteMain /> 
        // case 'prescricaoinsert':
        //     return <PrescricaoInsert key={update} />
        // case 'prescricaoupdate':
        //     return <PrescricaoUpdate />
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
            return <ClienteMain />
    }
}

export default Content