import { Box, Grid } from '@material-ui/core';
import React, { createContext } from 'react';
import Linha1Relatorio from './component/linha1';
import Linha2Relatorio from './component/linha2';
import Linha3Relatorio from './component/linha3';
import Linha4Relatorio from './component/linha4';
import Linha5Relatorio from './component/linha5';
import Linha6Relatorio from './component/linha6';
import Linha7Relatorio from './component/linha7';
import Linha9Relatorio from './component/linha9';
// import Linha10Relatorio from './component/linha10';
// import Linha11Relatorio from './component/linha11';
// import Linha12Relatorio from './component/linha12';
// import Linha13Relatorio from './component/linha13';
// import Linha14Relatorio from './component/linha14';
import Linha8Relatorio from './component/linha8';
import Linha10Relatorio from './component/linha10';

export const LMEPrintContext = createContext(null)

export default function FactoryRelatorio(props) {

    const a4size = {
        width: 1240,
        height: 1754
    }

    return (
        <>
            <div style={{ width: a4size.width, height: a4size.height }}>
                {/* a box ali de baixo que determina o uso de toda a folha  */}
                <Box height={1} p={10}>
                    <Box height={1} width={1} p={1} border={5} borderColor={"black"}>
                        <LMEPrintContext.Provider value={props.lme}>
                            <Grid container direction="column" justify="space-between" style={{ height: "100%" }}>
                                <Grid item>
                                    <Linha1Relatorio />
                                    <Linha2Relatorio />
                                    <Linha3Relatorio />
                                    <Linha4Relatorio />
                                </Grid>
                                <Grid container item xs direction="column" alignItems="stretch">
                                    <Linha5Relatorio />
                                    <Linha6Relatorio />
                                    <Linha7Relatorio />
                                    <Linha8Relatorio />
                                    <Grid container direction="row" alignItems="stretch" item xs>
                                        <Linha9Relatorio />
                                    </Grid>
                                </Grid>
                                <Grid item >
                                    <Linha10Relatorio />
                                    {/* <Linha11Relatorio />
                                    <Linha12Relatorio /> 
                                    <Linha13Relatorio />
                                    <Linha14Relatorio /> */}
                                </Grid>
                            </Grid>
                        </LMEPrintContext.Provider>
                    </Box>
                </Box>
            </div>
        </>
    )
}