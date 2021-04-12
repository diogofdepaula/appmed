import { Box, Typography, Grid } from '@material-ui/core'
import React, { useContext } from 'react'
import { PrescricaoSUSPrintContext } from './prescricaosus'


const Linha1SUS = () => {

    const prescricao = useContext(PrescricaoSUSPrintContext)

    return (
        <div>
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
        </div>
    )
}

export default Linha1SUS