import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { PrescricaoSUSPrintContext } from './prescricaosus'

const Linha4SUS = () => {

    const prescricao = useContext(PrescricaoSUSPrintContext)

    return (
        <div>
            <Box my={2}>
                <Grid container>
                    <Grid item >
                        <Typography variant={'h5'} align={'justify'}>{prescricao.posologia.posologia}</Typography>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Linha4SUS