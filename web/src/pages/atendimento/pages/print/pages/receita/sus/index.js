import { Box } from '@material-ui/core'
import React from 'react'
import CabecalhoSUS from './componentes/cabecalhosus'
import ComentarioSUS from './componentes/comentariosus'
import DataSUS from './componentes/datasus'
import PrescricaoSUS from './componentes/prescricaosus'
import ViaSUS from './componentes/viasus'

const ReceitaSUS = ({ prescricoes }) => {

    const a4size = {
        width: 1240,
        height: 1750 //1754
    }

    return (
        <>
            <div overflow="hidden" style={{ width: a4size.width, height: a4size.height }} >
                <Box
                    height="100%"
                    p={10}
                >
                    <Box
                        height="100%"
                        p={5}
                        border={3}
                        borderColor={"black"}
                        borderRadius={10}
                    >
                        <Box
                            display="flex"
                            flexWrap="wrap"
                            height="100%"
                            style={{ backgroundColor: "red" }}
                        >
                            <Box justifyContent="center">
                                <Box display="block">
                                    <Box>
                                        <ViaSUS />
                                    </Box>
                                    <Box>
                                        <CabecalhoSUS />
                                    </Box>
                                </Box>
                                <Box>
                                    {prescricoes?.map(p => <PrescricaoSUS prescricao={p} />)}
                                </Box>
                            </Box>
                            <Box alignSelf="flex-end" justifyContent="flex-start">
                                <Box display="block" >
                                    <Box>
                                        <ComentarioSUS />
                                    </Box>
                                    <Box>
                                        <DataSUS />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </div>
        </>
    )
}

export default ReceitaSUS