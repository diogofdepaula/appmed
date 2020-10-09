import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { LMEPrintContext } from '../..'

const Linha7LME = () => {

    const lme = useContext(LMEPrintContext)

    return (
        <>
            <Box mt={2} height={1}>
                <Grid container style={{ backgroundColor: "green"}}>
                    <Grid item xs style={{ backgroundColor: "orange"}}>
                        <Box width={1} border={1} borderColor="black" bgcolor="blue">
                            <Grid container direction="column" justify="flex-end" alignItems="stretch">
                                <Grid item>
                                    <Box mt={-1} ml={2} display="flex">
                                        <Typography component={'span'} variant="caption" noWrap={true} >
                                            <Box bgcolor="white" px={1}>11 e 12 - História clínica (Anamnese e tratamento prévio)</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box ml={1}>
                                        <Typography component={'span'} variant={'body1'} align={'left'}>
                                            {lme.anamnese ? <Box>{lme.anamnese}</Box> : <Box style={{ color: "white" }}>-</Box>}
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha7LME