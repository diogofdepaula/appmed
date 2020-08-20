import { Box, Button, Grid } from '@material-ui/core'
import React, { createContext, useState } from 'react'
import ClienteHeader from '../component/clienteheader'
import LMEDelete from './lmes/delete'
import LMEInsert from './lmes/insert'
import LMEMain from './lmes/main'
import LMEUpdate from './lmes/update'
// import LMEDelete from './lmes/delete'
import PrescricaoDelete from './prescricoes/delete'
import PrescricaoInsert from './prescricoes/insert'
import PrescricaoMain from './prescricoes/main'
import PrescricaoUpdate from './prescricoes/update'
import Print from './print'

export const ClienteContext = createContext(null)
export const PageContext = createContext('main')
export const PrescricaoMainContext = createContext(null)
export const LMEMainContext = createContext(null)

export default function AtendimentoMain(props) {

    const [page, setPage] = useState()
    const [prescricaoMain, setPrescricaoMain] = useState()
    const [lmeMain, setLmeMain] = useState()

    const indices = [
        ['prescricoes', 'Prescrições'],
        ['lmes', 'LMEs'],
        ['solicitacoes', 'Solicitações'],
        ['atestados', 'Atestados'],
        ['consentimento', 'Termos de consentimento'],
    ]

    return (
        <>
            <ClienteContext.Provider value={props.cliente}>
                <ClienteHeader />
                <Box mt={1}>
                    <Grid container spacing={1}>
                        {indices.map(x =>
                            <Grid item key={x[0]}>
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        setPrescricaoMain(null)
                                        setPage(x[0])
                                    }}
                                >{x[1]}
                                </Button>
                            </Grid>
                        )}
                    </Grid>
                </Box>
                <Box>
                    <PageContext.Provider value={setPage}>
                        <PrescricaoMainContext.Provider value={{ prescricaoMain: prescricaoMain, setPrescricaoMain: setPrescricaoMain }} >
                            <LMEMainContext.Provider value={{ lmeMain: lmeMain, setLmeMain: setLmeMain }} >
                                {page === 'prescricoes' && <PrescricaoMain />}
                                {page === 'prescricaoinsert' && <PrescricaoInsert />}
                                {page === 'prescricaoupdate' && <PrescricaoUpdate />}
                                {page === 'prescricaodelete' && <PrescricaoDelete />}

                                {page === 'lmes' && <LMEMain />}
                                {page === 'lmeinsert' && <LMEInsert />}
                                {page === 'lmeupdate' && <LMEUpdate />}
                                {page === 'lmedelete' && <LMEDelete />}
                                {page === 'print' && <Print />}
                            </LMEMainContext.Provider>
                        </PrescricaoMainContext.Provider>
                    </PageContext.Provider>
                </Box>
            </ClienteContext.Provider>
        </>
    )
}