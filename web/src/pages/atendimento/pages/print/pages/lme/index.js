import { Box } from '@material-ui/core';
import React, { useContext } from 'react';
import { ImpressaoContext } from '../..';
import Linha1LME from './component/linha1';
import Linha2LME from './component/linha2';
import Linha3LME from './component/linha3';
import Linha4LME from './component/linha4';
import Linha5LME from './component/linha5';
// import LogoSUS from '../../component/imagens/logosuspng.png'
// import LogoCISGAP from '../../component/imagens/cisgaplogo.png'
// import LogoCISCO from '../../component/imagens/ciscologo.png'

export default function FactoryLME() {

    const { impressao } = useContext(ImpressaoContext)

    const a4size = {
        width: 1240,
        height: 1750 //1754
    }

    console.log('impressao.lmesSelecionadas', impressao.lmesSelecionadas)

    return (
        <>
            <div style={{ width: a4size.width, height: a4size.height }} >
                <Box
                    // pode substituir pelo div alí de cima
                    height={1}
                >
                    <Box
                        height={1}
                        m={10}
                        p={5}
                        border={5}
                        borderColor={"blue"}
                    >
                        <Linha1LME />
                        <Linha2LME />
                        <Linha3LME />
                        <Linha4LME />
                        <Linha5LME />

                    </Box>
                </Box>
            </div>
        </>
    )
}