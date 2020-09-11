import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { ImpressaoContext } from '../../../..'

const DataSUS = () => {

    const { impressao } = useContext(ImpressaoContext)

    return (
        <>
            <Box>
                <Grid container>
                    <Grid item>
                        <Typography variant={'h5'}>Guarapuava, {impressao.database}</Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default DataSUS