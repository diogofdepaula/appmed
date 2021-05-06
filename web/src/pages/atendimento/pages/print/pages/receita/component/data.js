import { Box, Grid, Typography } from '@material-ui/core';
import addMonths from 'date-fns/addMonths';
import { format } from 'date-fns';
import { ptBR } from "date-fns/locale";
import React, { useContext } from 'react';
import { ImpressaoContext } from '../../../../..';

const Data = (props) => {

    const { impressao } = useContext(ImpressaoContext)

    const date = format(addMonths(impressao.database, props.mes ? props.mes : 0), "dd ' de ' MMMM ' de ' yyyy", { locale: ptBR })

    return (
        <>
            <Box>
                <Grid container>
                    <Grid item>
                        <Typography variant={'h5'}>Guarapuava, {date}.</Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Data