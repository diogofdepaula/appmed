import { Box } from '@material-ui/core'
import React from 'react'
import PageA4 from '../../component/pagea4'
import CabecalhoSUS from './component/cabecalhosus'
import DataSUS from './component/datasus'
import IdentificacaoSUS from './component/identificacaosus'
import PrescricaoSUS from './component/prescricaosus'
import RodapeSUS from './component/rodapesus'
import ViaSUS from './component/viasus'

const ReceitaSUS = (props) => {

    return (
        <>
            <PageA4>
                <Box width={1} height={1} display="block">
                    <Box>
                        <CabecalhoSUS />
                    </Box>
                    <Box
                        height='calc(100% - 110px)' // se mudar o Cabecalho tem que ajustar aqui depois
                        p={5} border={3} borderColor={"black"} >
                        <Box display="block" height={1}>
                            <Box justifyContent="center">
                                <Box display="block">
                                    <Box>
                                        {props.via && <ViaSUS via={props.via} />}
                                    </Box>
                                    <Box>
                                        <IdentificacaoSUS />
                                    </Box>
                                </Box>
                                <Box>
                                    {props.prescricoes?.map((p, i) => <div key={i}><PrescricaoSUS prescricao={p} mes={props.mes} /></div>)}
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <DataSUS mes={props.mes} />
                        </Box>
                    </Box>
                    <Box>
                        <RodapeSUS />
                    </Box>
                </Box>
            </PageA4>
        </>
    )
}

export default ReceitaSUS