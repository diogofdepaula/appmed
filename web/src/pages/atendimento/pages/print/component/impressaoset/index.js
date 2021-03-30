import { Grid } from '@material-ui/core';
import React from 'react';
import LMESet from './lmeset';
import LocalSet from './localset';
import PrescricoesSet from './prescricaoset';
import TempoSet from './temposet';

const ImpressaoSet = () => {

    return (
        <>
            <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid container item x={4}>
                    <PrescricoesSet />
                </Grid>
                <Grid container item x={4} >
                    <Grid item>
                        <TempoSet />
                    </Grid>
                    <Grid item>
                        <LocalSet />
                    </Grid>
                </Grid>
                <Grid container item x={4} >
                    <LMESet />
                </Grid>
            </Grid>
        </>
    )
}

export default ImpressaoSet