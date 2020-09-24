import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { LMEPrintContext } from '../..'

const Linha7LME = () => {

    const lme = useContext(LMEPrintContext)

    return (
        <>
            <Box mt={2} >
                <Grid container spacing={1}>
                    <Grid item xs>
                        <Box
                            width={1}
                            border={1}
                            borderColor="black"
                            display="block"
                        >
                            <Box mt={-1} ml={2} display="flex">
                                <Typography component={'span'} variant="caption" noWrap={true} >
                                    <Box bgcolor="white" px={1}>11 e 12 - História clínica (Anamnese e tratamento prévio)</Box>
                                </Typography>
                            </Box>
                            <Box ml={1}>
                                <Typography component={'span'} variant={'body1'} align={'left'} >
                                    <Box>{lme.anamnese}</Box>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha7LME