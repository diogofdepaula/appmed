import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { PrescricaoPrintContext } from './prescricao'

const Linha2 = () => {

    const prescricao = useContext(PrescricaoPrintContext)

    return (
        <>
            <Box>
                <Grid container>
                    <Grid item>
                        <Typography variant={'h4'}>
                            <Box fontWeight="fontWeightBold" letterSpacing={2} >{prescricao.medicamento.farmaco}</Box>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha2