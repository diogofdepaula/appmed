import { Box } from '@material-ui/core'
import React from 'react'
import IdentificacaoSUS from './componentes/identificacaosus'
import DataSUS from './componentes/datasus'
import PrescricaoSUS from './componentes/prescricaosus'
import ViaSUS from './componentes/viasus'
import CabecalhoSUS from './componentes/cabecalhosus'
import RodapeSUS from './componentes/rodapesus'

const ReceitaSUS = ({ prescricoes }) => {

    const a4size = {
        width: 1240,
        height: 1750 //1754
    }

    return (
        <>
            <div style={{ width: a4size.width, height: a4size.height }} >
                {/* overflow="hidden" */}
                <Box
                    height={1}
                    p={10}
                >
                    <Box>
                        <CabecalhoSUS />
                    </Box>
                    <Box
                        height='calc(100% - 80px)' // se mudar o Cabecalho tem que ajustar aqui depois
                        p={5}
                        border={3}
                        borderColor={"black"}
                       // borderRadius={10}
                    >
                        <Box
                            display="flex"
                            flexWrap="wrap"
                            height={1}
                        >
                            <Box justifyContent="center">
                                <Box display="block">
                                    <Box>
                                        <ViaSUS />
                                    </Box>
                                    <Box>
                                        <IdentificacaoSUS />
                                    </Box>
                                </Box>
                                <Box>
                                    {prescricoes?.map((p, i) => <div key={i}><PrescricaoSUS prescricao={p} /></div>)}
                                </Box>
                            </Box>
                            <Box
                                alignSelf="flex-end"
                                justifyContent="flex-start"
                            >
                                {/* <Box display="block" >
                                <Box>

                                    OS COMENTÁRIOS EXTRA FORAM RETIRARDOS POR MOMENTO
                                    PARA FACILITAR A CONFIGURAÇÃO.
                                    DEIXAR PARA UM SEGUNDO MOMENTO.

                                    <ComentarioSUS />
                                </Box> */}
                                <Box>
                                    <DataSUS />
                                </Box>
                                {/* </Box> */}
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <RodapeSUS />
                    </Box>
                </Box>
            </div>
        </>
    )
}

export default ReceitaSUS