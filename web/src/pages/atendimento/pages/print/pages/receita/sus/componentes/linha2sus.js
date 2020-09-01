import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { PrescricaoSUSContext } from './prescricaosus'

const Linha2SUS = () => {

    const prescricao = useContext(PrescricaoSUSContext)

    return (
        <>
            <Box
                border={2}
                borderColor="text.primary"
            >
                <Grid container>
                    <Grid item>
                        <Typography variant={'h4'}><b>{prescricao.medicamento.farmaco}</b></Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha2SUS