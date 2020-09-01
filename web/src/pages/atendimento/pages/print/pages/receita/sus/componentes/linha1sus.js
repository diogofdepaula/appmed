import { Box, Typography, Grid } from '@material-ui/core'
import React, { useContext } from 'react'
import { PrescricaoSUSContext } from './prescricaosus'


const Linha1SUS = () => {

    const prescricao = useContext(PrescricaoSUSContext)

    return (
        <>
            <Box
                border={2}
                borderColor="text.primary"
            >
                <Grid container spacing={2} direction="row">
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

export default Linha1SUS