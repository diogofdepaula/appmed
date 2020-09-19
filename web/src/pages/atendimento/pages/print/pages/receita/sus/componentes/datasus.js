import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { ImpressaoContext } from '../../../..'
import { format } from 'date-fns';
import { ptBR } from "date-fns/locale";


const DataSUS = () => {

    const { impressao } = useContext(ImpressaoContext)

    const date = format(impressao.database, "dd ' de ' MMMM ' de ' yyyy", { locale: ptBR }) 

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