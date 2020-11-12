import React from 'react'
import PrescricaoMain from '../pages/prescricoes/main'
import PrescricaoInsert from '../pages/prescricoes/insert'
import PrescricaoUpdate from '../pages/prescricoes/update'
import PrescricaoDelete from '../pages/prescricoes/delete'

const Content = ({ page }) => {

    switch (page) {
        //PARA GARANTIR
        case 'prescricoes':
            return <PrescricaoMain />
        case 'prescricaoinsert':
            return <PrescricaoInsert />
        case 'prescricaoupdate':
            return <PrescricaoUpdate />
        case 'prescricaodelete':
            return <PrescricaoDelete />
        // case 'lmes':
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
            return <div>Teste</div>
        default:
            return <div>Atentdimento Main teste</div>
    }
}
export default Content