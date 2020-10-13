import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { RelatorioPrintContext } from '../..'

const Linha7Relatorio = () => {

    const lme = useContext(RelatorioPrintContext)

    return (
        <Grid container item style={{ height: "100%" }}>
            <Grid container item >
                <Box mt={2} width={1} border={1} borderColor="black">
                    <Grid container direction="column" justify="flex-end" alignItems="stretch">
                        <Grid item>
                            <Box mt={-1} ml={2} display="flex">
                                <Typography component={'span'} variant="caption" noWrap={true} >
                                    <Box bgcolor="white" px={1}>11 e 12 - História clínica (Anamnese e tratamento prévio)</Box>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box>
                                <Typography component={'span'} variant={'h6'} align={'justify'}>
                                    <Box p={1}>Teste</Box>}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Linha7Relatorio