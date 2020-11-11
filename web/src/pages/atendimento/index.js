import { Box, Divider } from '@material-ui/core'
import React, { createContext, useState } from 'react'
import AtendimentoAppBar from './component/appbar'
import ClienteHeader from './component/clienteheader'
import Content from './component/content'
// import ClienteHeader from '../component/clienteheader'
// import LMEDelete from './lmes/delete'
// import LMEInsert from './lmes/insert'
// import LMEMain from './lmes/main'
// import LMEUpdate from './lmes/update'
// // import LMEDelete from './lmes/delete'
// import PrescricaoDelete from './prescricoes/delete'
// import PrescricaoInsert from './prescricoes/insert'
// import PrescricaoMain from './prescricoes/main'
// import PrescricaoUpdate from './prescricoes/update'
// import Print from './print' hjhhhhhhh

export const ClienteContextAntigo = createContext(null)
export const PageAtendimentoContext = createContext('main')
export const PrescricaoMainContext = createContext(null)
export const LMEMainContext = createContext(null)

const Atendimento = () => {

    const [page, setPage] = useState()
    const [prescricaoMain, setPrescricaoMain] = useState()
    const [lmeMain, setLmeMain] = useState()

    return (
        <>
            <ClienteHeader />
            <PageAtendimentoContext.Provider value={{ page: page, setPage: setPage }}>
                <Divider />
                <AtendimentoAppBar />
                <Divider />
                <Box>
                    <PrescricaoMainContext.Provider value={{ prescricaoMain: prescricaoMain, setPrescricaoMain: setPrescricaoMain }} >
                        <LMEMainContext.Provider value={{ lmeMain: lmeMain, setLmeMain: setLmeMain }} >
                            <Content page={page} />
                        </LMEMainContext.Provider>
                    </PrescricaoMainContext.Provider>
                </Box>
            </PageAtendimentoContext.Provider>
        </>
    )
}

export default Atendimento