import { Box, Typography, Grid } from '@material-ui/core'
import React, { useContext } from 'react'
import { PrescricaoPrintContext } from './prescricao'

const Linha1 = () => {

    const prescricao = useContext(PrescricaoPrintContext)

    return (
        <>
            <Box>
                <Grid container spacing={3} direction="row">
                    <Grid item xs={6} />
                    <Grid item >
                        <Typography variant={'h6'}>{prescricao.apresentaco.uso}</Typography>
                    </Grid>
                    <Grid item >
                        {prescricao.continuo && <Typography variant={'h6'}>uso contínuo</Typography>}
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha1