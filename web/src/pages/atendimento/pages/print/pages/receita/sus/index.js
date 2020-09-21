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
                <Box
                    height={1}
                    p={10}
                >
                    <Box
                        width={1}
                        height={1}
                        display="block"
                        style={{ backgroundColor: "red" }}
                    >
                        <Box>
                            <CabecalhoSUS />
                        </Box>
                        <Box

                            height='calc(100% - 80px)' // se mudar o Cabecalho tem que ajustar aqui depois
                            p={5}
                            border={3}
                            borderColor={"black"}
                            style={{ backgroundColor: "blue" }}
                        // borderRadius={10}
                        >
                            <Box
                                display="block"
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
                            </Box>
                            <Box>
                                <DataSUS />
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