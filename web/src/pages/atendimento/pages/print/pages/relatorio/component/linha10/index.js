import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'
import Linha100Relatorio from './linha100'
import Linha101Relatorio from './linha101'
import Linha102Relatorio from './linha102'
import Linha103Relatorio from './linha103'
import Linha104Relatorio from './linha104'

const Linha10Relatorio = () => {

    return (
        <Grid container item >
            <Box mt={2} width={1} border={1} borderColor="black">
                <Grid container direction="column" justify="flex-end" alignItems="stretch">
                    <Grid item>
                        <Box mt={-1} ml={2} display="flex">
                            <Typography component={'span'} variant="caption" noWrap={true} >
                                <Box bgcolor="white" px={1}>XX - Índices protolocares</Box>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box p={1}>
                            <Box width={1} border={1} borderColor="black">
                                <Linha100Relatorio />
                                <Linha101Relatorio />
                                <Linha102Relatorio />
                                <Linha103Relatorio />
                            </Box>
                        </Box>
                        <Box p={1}>
                            <Box width={1} border={1} borderColor="black">
                                <Linha104Relatorio />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    )
}

export default Linha10Relatorio

