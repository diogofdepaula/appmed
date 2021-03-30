import { Box, Divider } from '@material-ui/core';
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
            <Box>
                <PrintMainAppBar handlePrint={handlePrint} />
                <Divider />
                <ImpressaoSet />
                <Divider />
                <div ref={componentRef} >
                    <Factory />
                </div>
                {/*o  height: 0 indifentente para o resultado final */}
                {/* <div ref={componentRef} >
                            {impressao.visualizacao ? <Factory /> : <div />}
                    </div> */}
            </Box>
        </>
    )
}

export default Print

