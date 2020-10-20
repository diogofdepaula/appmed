import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'

const Linha9Relatorio = () => {

    return (
        <Grid container item >
            <Box mt={2} width={1} border={1} borderColor="black">
                <Grid container direction="column" justify="flex-end" alignItems="stretch">
                    <Grid item>
                        <Box mt={-1} ml={2} display="flex">
                            <Typography component={'span'} variant="caption" noWrap={true} >
                                <Box bgcolor="white" px={1}>xx - Avaliação farmacoterapêutica (histórico de uso anterior de medicamentos)</Box>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    )
}

export default Linha9Relatorio

