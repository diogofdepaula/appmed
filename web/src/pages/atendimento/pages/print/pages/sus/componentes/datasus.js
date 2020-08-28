import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { ImpressaoContext } from '../../..'

const DataSUS = () => {

    const impressao = useContext(ImpressaoContext)

    return (
        <>
            <Box
                border={2}
                borderColor="text.primary"
            >
                <Grid container>
                    <Grid item>
                        <Typography variant={'body1'}>Guarapuava, {impressao.database}</Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default DataSUS