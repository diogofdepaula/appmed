import React, { useContext } from 'react'
import { PageAtendimentoContext } from '..'
import PrescricaoDelete from '../pages/prescricoes/delete'
import PrescricaoInsert from '../pages/prescricoes/insert'
import PrescricaoMain from '../pages/prescricoes/main'
import PrescricaoUpdate from '../pages/prescricoes/update'

const Content = () => {

    const { page, update } = useContext(PageAtendimentoContext)

    switch (page) {
        case 'prescricoesmain':
            return <div key={update.count}><PrescricaoMain /></div>
        case 'prescricaoinsert':
            return <div key={update.count}><PrescricaoInsert /></div>
            //return <PrescricaoInsert />
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