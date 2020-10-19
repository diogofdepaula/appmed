import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { LMEPrintContext } from '../..'

const Linha4Relatorio = () => {

    const lme = useContext(LMEPrintContext)

    return (
        <>
            <Box mt={2}>
                <Grid container spacing={1}>
                    <Grid container item xs>
                        <Box width={1} border={1} borderColor="black">
                            <Grid container direction="column" justify="flex-end" alignItems="stretch">
                                <Grid item>
                                    <Box mt={-1} ml={2} display="flex" >
                                        <Typography component={'span'} variant="caption" noWrap={true} >
                                            <Box bgcolor="white" px={1}>X - Medicamento</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box ml={1}>
                                        <Typography component={'span'} variant={'h6'} align={'center'}>
                                            <Box>{lme.prescricoes.filter(m => m.medicamento.classe === "MMCDB")[0].medicamento.farmaco}</Box>
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

export default Linha4Relatorio