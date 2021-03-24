import { Box, Grid } from '@material-ui/core';
import React, { useContext, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { ImpressaoContext } from '../..';
import ImpressaoSet from './component/impressaoset';
import Factory from './pages';

const Print = () => {

    const { validacao } = useContext(ImpressaoContext)

    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current
        //pageStyle: '@page { size: A4 portrait;}'
    });

    return (
        <>
            {/* {JSON.stringify(impressao)} */}
            <Box m={1}>
                <Grid container spacing={2} >
                    <Grid container item  >
                        <ImpressaoSet handlePrint={handlePrint} />
                    </Grid>
                    <Grid container item>
                        {/*o  height: 0 indifentente para o resultado final */}
                        <div ref={componentRef} >
                            {validacao && <Factory />}
                            <Factory />
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Print