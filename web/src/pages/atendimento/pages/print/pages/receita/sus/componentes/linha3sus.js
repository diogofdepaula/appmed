import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { PrescricaoSUSPrintContext } from './prescricaosus'

const Linha3SUS = () => {

    const prescricao = useContext(PrescricaoSUSPrintContext)

    const quant = [prescricao.lmemes1, prescricao.lmemes2, prescricao.lmemes3, prescricao.lmemes4, prescricao.lmemes5, prescricao.lmemes6]

    const soma = quant.map(p => isNaN(parseInt(p)) ? 0 : parseInt(p)).reduce((a, b) => a + b, 0)

    //Farmaco + Apresentacao + Quantidade + Forma

    return (
        <>
            <Box>
                <Grid container direction="row" justify="space-between" alignItems="flex-end">
                    <Grid item xs>
                        <Typography variant={'h6'}>
                            <Box>{prescricao.medicamento.farmaco + ' (' + prescricao.apresentaco.descricao + ')'}</Box>
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Grid container spacing={1} direction="row" justify="flex-end">
                            <Grid item>
                                <Typography variant={'h5'}>
                                    <Box fontWeight="fontWeightBold">{soma}</Box>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={'h5'}>
                                    <Box>{prescricao.posologia.forma}</Box>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha3SUS