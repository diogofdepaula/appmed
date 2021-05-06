import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { PrescricaoPrintContext } from './prescricao'

const Linha4 = () => {

    const prescricao = useContext(PrescricaoPrintContext)

    return (
        <>
            <Box my={2}>
                <Grid container>
                    <Grid item >
                        <Typography variant={'h6'} align={'justify'}>{prescricao.posologia.posologia}</Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha4