import { Grid } from '@material-ui/core';
import React, { createContext, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import ImpressaoSet from './component/impressaoset';
import Factory from './pages';

export const ImpressaoContext = createContext(null)

const Print = () => {

    const [validacao, setValidacao] = useState(false)

    const [impressao, setImpressao] = useState({
        prescricoesSelecionadas: [],
        tipo: '', // simples, controlado
        meses: 1,
        local: '', // consultorio, SUS (cisgap, cisco)
        lmesSelecionadas: [],
        lme: '',
        relatorio: true,
        comentario: '-',
        database: new Date()
    })

    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current
        //pageStyle: '@page { size: A4 portrait;}'
    });

    return (
        <>
            <ImpressaoContext.Provider value={{ impressao: impressao, setImpressao: setImpressao }}>
                {/* {JSON.stringify(impressao)} */}
                <Grid container spacing={2} >
                    <ImpressaoSet setValidacao={setValidacao} handlePrint={handlePrint} />
                    <Grid item>
                        {/*o  height: 0 indifentente para o resultado final */}
                        <div ref={componentRef} >
                            {validacao && <Factory />}
                        </div>
                    </Grid>
                </Grid>
            </ImpressaoContext.Provider>
        </>
    )
}

export default Print