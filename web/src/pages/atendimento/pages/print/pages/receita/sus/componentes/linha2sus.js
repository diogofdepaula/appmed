import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { PrescricaoSUSPrintContext } from './prescricaosus'

const Linha2SUS = () => {

    const prescricao = useContext(PrescricaoSUSPrintContext)

    return (
        <>
            <Box>
                <Grid container>
                    <Grid item>
                        <Typography variant={'h3'}>
                            <Box fontWeight="fontWeightBold"  letterSpacing={2} >{prescricao.medicamento.farmaco}</Box>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha2SUS