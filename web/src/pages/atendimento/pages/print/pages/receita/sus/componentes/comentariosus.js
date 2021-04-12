import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { ImpressaoContext } from '../../../..'

const ComentarioSUS = () => {

    const { impressao } = useContext(ImpressaoContext)

    return (
        <div>
            <Box>
                <Grid container>
                    <Grid item>
                        <Typography variant={'body1'} align={'justify'}>{impressao.comentario}</Typography>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default ComentarioSUS