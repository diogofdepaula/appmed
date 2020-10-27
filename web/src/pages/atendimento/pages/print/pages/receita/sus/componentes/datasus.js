import { Box, Grid, Typography } from '@material-ui/core';
import { format } from 'date-fns';
import { ptBR } from "date-fns/locale";
import React from 'react';

const DataSUS = (props) => {

    const date = format(props.data, "dd ' de ' MMMM ' de ' yyyy", { locale: ptBR })

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

export default DataSUS