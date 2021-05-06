import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { ImpressaoContext } from '../../../..'

const Comentario = () => {

    const { impressao } = useContext(ImpressaoContext)

    return (
        <>
            <Box>
                <Grid container>
                    <Grid item>
                        <Typography variant={'body1'} align={'justify'}>{impressao.comentario}</Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Comentario