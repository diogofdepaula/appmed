import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { PrescricaoSUSContext } from './prescricaosus'

const Linha2SUS = () => {

    const prescricao = useContext(PrescricaoSUSContext)

    return (
        <>
            <Box>
                <Grid container>
                    <Grid item>
                        <Typography variant={'h3'}>
                            <Box fontWeight="fontWeightBold" >{prescricao.medicamento.farmaco}</Box>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha2SUS