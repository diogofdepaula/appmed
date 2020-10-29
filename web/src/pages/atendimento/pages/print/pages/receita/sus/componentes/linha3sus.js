import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { PrescricaoSUSPrintContext } from './prescricaosus'

const Linha3SUS = (props) => {

    const prescricao = useContext(PrescricaoSUSPrintContext)

    const quant = () => {
        
        let final = ''

        let lmes = [prescricao.lmemes1, prescricao.lmemes2, prescricao.lmemes3, prescricao.lmemes4, prescricao.lmemes5, prescricao.lmemes6]

        console.log('props.mes', props.mes)

        if (props.mes >= 0) {
            // vem pela via Estado e cada mês corresponde ao mês
            final = lmes[props.mes]
            console.log('teste 1')
            } else {
            // quando a receita é via paciente o mês vem como undefined
            console.log('teste 2')
            final = lmes.map(p => isNaN(parseInt(p)) ? 0 : parseInt(p)).reduce((a, b) => a + b, 0)
        }
        return final
    }

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
                                    <Box fontWeight="fontWeightBold">{quant}</Box>
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