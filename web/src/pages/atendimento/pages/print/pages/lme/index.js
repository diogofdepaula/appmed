import { Box, Grid } from '@material-ui/core';
import React, { createContext } from 'react';
import Linha1LME from './component/linha1';
import Linha10LME from './component/linha10';
import Linha11LME from './component/linha11';
import Linha12LME from './component/linha12';
import Linha13LME from './component/linha13';
import Linha2LME from './component/linha2';
import Linha3LME from './component/linha3';
import Linha4LME from './component/linha4';
import Linha5LME from './component/linha5';
import Linha6LME from './component/linha6';
import Linha7LME from './component/linha7';
import Linha9LME from './component/linha9';
// import LogoSUS from '../../component/imagens/logosuspng.png'
// import LogoCISGAP from '../../component/imagens/cisgaplogo.png'
// import LogoCISCO from '../../component/imagens/ciscologo.png'

export const LMEPrintContext = createContext(null)

export default function FactoryLME(props) {

    const a4size = {
        width: 1240,
        height: 1754 //1754
    }

    return (
        <>
            <div style={{ width: a4size.width, height: a4size.height }}>
                {/* a box ali de baixo que determina o uso de toda a folha  */}
                <Box height={1} p={10} > {/*  bgcolor={"red"} */}
                    <Box height={1} width={1} p={1} border={5} borderColor={"black"}>
                        <LMEPrintContext.Provider value={props.lme}>
                            <Grid container direction="column" justify="space-between"  style={{ height: "100%"}}>
                                <Grid item  style={{ backgroundColor: "green" }}>
                                    
                                    <Linha1LME />
                                    <Linha2LME />
                                    <Linha3LME />
                                    <Linha4LME />
                                </Grid>
                                <Grid item xs style={{ backgroundColor: "yellow" }}>
                                    <Linha5LME />
                                    <Linha6LME />
                                    <Linha7LME />
                                </Grid>
                                <Grid item >
                                    <Linha9LME />
                                    <Linha10LME />
                                    <Linha11LME />
                                    <Linha12LME />
                                    <Linha13LME />
                                </Grid>
                            </Grid>
                        </LMEPrintContext.Provider>
                    </Box>
                </Box>
            </div>
        </>
    )
}