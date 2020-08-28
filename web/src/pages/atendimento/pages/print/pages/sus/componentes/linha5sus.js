import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { PrescricaoSUSContext } from './prescricaosus'

const Linha5SUS = () => {

    const prescricao = useContext(PrescricaoSUSContext)

    return (
        <>
            <Box
                border={2}
                borderColor="text.primary"
            >
                {prescricao.imprimirorientacoes &&
                    <Grid container>
                        <Grid item>
                            <Typography variant={'body1'} align={'justify'} > {prescricao.orientacoes}</Typography>
                        </Grid>
                    </Grid>
                }
            </Box>
        </>
    )
}

export default Linha5SUS