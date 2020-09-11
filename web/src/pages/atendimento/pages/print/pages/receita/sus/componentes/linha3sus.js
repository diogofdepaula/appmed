import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { PrescricaoSUSContext } from './prescricaosus'

const Linha3SUS = () => {

    const prescricao = useContext(PrescricaoSUSContext)
    //Farmaco + Apresentacao + Quantidade + Forma

    return (
        <>
            <Box>
                <Grid container >
                    <Grid item xs={7} >
                        <Typography variant={'h6'}>
                            <Box>{prescricao.medicamento.farmaco + ' (' + prescricao.apresentaco.descricao + ')'}</Box>
                        </Typography>
                    </Grid>
                    <Grid container item spacing={1} xs={5} direction="row" justify="flex-end">
                        <Grid item>
                            <Typography variant={'h5'}>
                                <Box fontWeight="fontWeightBold">{prescricao.posologia.quantidade}</Box>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'h5'}>
                                <Box>{prescricao.posologia.forma}</Box>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha3SUS