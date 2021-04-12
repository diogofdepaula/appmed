import { Box, Grid } from '@material-ui/core'
import React from 'react'
import Linha11Relatorio from './linha11'
import Linha12Relatorio from './linha12'
import Linha13Relatorio from './linha13'

const Linha1Relatorio = () => {

    return (
        <div>
            <Grid container item >
                <Box width={1}>
                    <Linha11Relatorio />
                    <Linha12Relatorio />
                    <Linha13Relatorio />
                </Box>
            </Grid>
        </div>
    )
}

export default Linha1Relatorio