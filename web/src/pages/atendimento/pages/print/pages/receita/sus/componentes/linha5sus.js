import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { PrescricaoSUSContext } from './prescricaosus'

const Linha5SUS = () => {

    const prescricao = useContext(PrescricaoSUSContext)

    return (
        <>
            <Box mt={2} style={{ backgroundColor: "red" }}>
                <Grid container>
                    <Grid item>
                        <Typography variant={'h5'} align={'justify'}> {prescricao.orientacoes}</Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha5SUS