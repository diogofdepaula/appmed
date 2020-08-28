import { Box, Typography, Grid } from '@material-ui/core'
import React, { useContext } from 'react'
import { PrescricaoSUSContext } from './prescricaosus'

const Linha1SUS = () => {

    const presc = useContext(PrescricaoSUSContext)

    return (
        <>
            <Box
                border={2}
                borderColor="text.primary"
            >
                <Grid container spacing={2} direction="row">
                    <Grid item xs={6} />
                    <Grid item >
                        <Typography variant={'subtitle1'}>{presc.apresentaco.uso}</Typography>
                    </Grid>
                    <Grid item >
                        {presc.continuo && <Typography variant={'subtitle1'}>uso contínuo</Typography>}
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha1SUS