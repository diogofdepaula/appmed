import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { PrescricaoSUSPrintContext } from './prescricaosus'

const Linha5SUS = () => {

    const prescricao = useContext(PrescricaoSUSPrintContext)

    return (
        <div>
            <Box mt={3}>
                <Grid container>
                    <Grid item>
                        <Typography variant={'h5'} align={'justify'}> {prescricao.orientacoes}</Typography>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Linha5SUS