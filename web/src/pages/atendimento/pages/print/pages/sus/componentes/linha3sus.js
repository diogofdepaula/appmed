import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { PrescricaoSUSContext } from './prescricaosus'

const Linha3SUS = () => {

    const prescricao = useContext(PrescricaoSUSContext)
    //Farmaco + Apresentacao + Quantidade + Forma
    return (
        <>
            <Box
                border={2}
                borderColor="text.primary"
            >
                <Grid container >
                    <Grid item xs={7}>
                        <Typography variant={'body1'}>{prescricao.medicamento.farmaco + ' (' + prescricao.apresentaco.descricao + ')'}</Typography>
                    </Grid>
                    <Grid container item spacing={1} xs={5} direction="row" justify="flex-end"> 
                        <Grid item>
                            <Typography variant={'body1'}>{prescricao.posologia.quantidade}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'body1'}>{prescricao.posologia.forma}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha3SUS