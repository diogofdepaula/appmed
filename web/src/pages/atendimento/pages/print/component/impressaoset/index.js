import { Grid } from '@material-ui/core';
import React from 'react';
import LMESet from './lmeset';
import LocalSet from './localset';
import PrescricoesSet from './prescricaoset';
import TempoSet from './temposet';

const ImpressaoSet = () => {

    return (
        <>
            <Grid container direction="row" justify="space-between" alignItems="flex-start">
                <Grid container item xs={4}>
                    <PrescricoesSet />
                </Grid>
                <Grid container item xs={4} >
                    <LMESet />
                </Grid>
                <Grid container item xs={4}>
                    <Grid item>
                        <TempoSet />
                    </Grid>
                    <LocalSet />
                </Grid>
            </Grid>
        </>
    )
}

export default ImpressaoSet