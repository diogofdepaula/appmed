import { Box } from '@material-ui/core';
import React, { createContext } from 'react';
import Linha1LME from './component/linha1';
import Linha2LME from './component/linha2';
import Linha3LME from './component/linha3';
import Linha4LME from './component/linha4';
import Linha5LME from './component/linha5';
// import LogoSUS from '../../component/imagens/logosuspng.png'
// import LogoCISGAP from '../../component/imagens/cisgaplogo.png'
// import LogoCISCO from '../../component/imagens/ciscologo.png'

export const LMEPrintContext = createContext(null)

export default function FactoryLME(props) {

    const a4size = {
        width: 1240,
        height: 1750 //1754
    }

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
                        <LMEPrintContext.Provider value={props.lme}>
                            <Linha1LME />
                            <Linha2LME />
                            <Linha3LME />
                            <Linha4LME />
                            <Linha5LME />
                        </LMEPrintContext.Provider>
                    </Box>
                </Box>
            </div>
        </>
    )
}