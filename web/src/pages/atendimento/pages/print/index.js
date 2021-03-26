import { Box, Divider, Grid } from '@material-ui/core';
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import PrintMainAppBar from './component/appbar/mainappbar';
import ImpressaoSet from './component/impressaoset';
import Factory from './pages';

const Print = () => {

    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current
        //pageStyle: '@page { size: A4 portrait;}'
    });

    return (
        <>
            <Box m={1}>
                <PrintMainAppBar handlePrint={handlePrint} />
                <Divider />
                <Grid container spacing={2} >
                    <Grid container item  >
                        <ImpressaoSet />
                    </Grid>
                    <Grid container item>
                        <div ref={componentRef} >
                            <Factory />
                        </div>
                        {/*o  height: 0 indifentente para o resultado final */}
                        {/* <div ref={componentRef} >
                            {impressao.visualizacao ? <Factory /> : <div />}
                        </div> */}
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Print

