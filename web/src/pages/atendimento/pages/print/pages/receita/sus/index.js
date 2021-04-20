import { Box } from '@material-ui/core'
import React, { useContext } from 'react'
import IdentificacaoSUS from './component/identificacaosus'
import DataSUS from './component/datasus'
import PrescricaoSUS from './component/prescricaosus'
import ViaSUS from './component/viasus'
import CabecalhoSUS from './component/cabecalhosus'
import RodapeSUS from './component/rodapesus'
import { ImpressaoContext } from '../../../../..'

const ReceitaSUS = (props) => {

    const { impressao } = useContext(ImpressaoContext)

    return (
        <>
            <div style={{ width: impressao.pagesize.a4.width, height: impressao.pagesize.a4.height, backgroundColor:"greenyellow" }}>
                <Box height={1} p={impressao.pagesize.a4.padding}>
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
                </Box>
            </div>
        </>
    )
}

export default ReceitaSUS