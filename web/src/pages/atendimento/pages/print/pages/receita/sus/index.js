import { Box } from '@material-ui/core'
import React, { useContext } from 'react'
import IdentificacaoSUS from './componentes/identificacaosus'
import DataSUS from './componentes/datasus'
import PrescricaoSUS from './componentes/prescricaosus'
import ViaSUS from './componentes/viasus'
import CabecalhoSUS from './componentes/cabecalhosus'
import RodapeSUS from './componentes/rodapesus'
import { ImpressaoContext } from '../../../../..'

const ReceitaSUS = (props) => {

    const { impressao } = useContext(ImpressaoContext)

    return (
        <div>
            <div style={{ width: impressao.a4Adjust.width, height: impressao.a4Adjust.height }}>
                <Box height={1} p={10}>
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
        </div>
    )
}

export default ReceitaSUS