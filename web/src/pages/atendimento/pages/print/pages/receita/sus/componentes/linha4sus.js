import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { PrescricaoSUSContext } from './prescricaosus'

const Linha4SUS = () => {

    const prescricao = useContext(PrescricaoSUSContext)

    return (
        <>
            <Box mt={1}>
                <Grid container>
                    <Grid item >
                        <Typography variant={'h4'} align={'justify'}>{prescricao.posologia.posologia}</Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha4SUS