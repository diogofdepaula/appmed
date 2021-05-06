import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { PrescricaoPrintContext } from './prescricao'

const Linha5 = () => {

    const prescricao = useContext(PrescricaoPrintContext)

    return (
        <>
            <Box mt={3}>
                <Grid container>
                    <Grid item>
                        <Typography variant={'h6'} align={'justify'}> {prescricao.orientacoes}</Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha5