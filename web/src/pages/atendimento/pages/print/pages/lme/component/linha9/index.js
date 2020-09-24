import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { LMEPrintContext } from '../..'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

const Linha9LME = () => {

    const lme = useContext(LMEPrintContext)

    return (
        <>
            <Box mt={2} >
                <Grid container spacing={1}>
                    <Grid item xs>
                        <Box
                            width={1}
                            border={1}
                            borderColor="black"
                            display="block"
                        >
                            <Box mt={-1} ml={2} display="flex">
                                <Typography component={'span'} variant="caption" noWrap={true} >
                                    <Box bgcolor="white" px={1}>13 - Atestado de capacidade*</Box>
                                </Typography>
                            </Box>
                            <Box px={1}>
                                <Typography component={'span'} variant={'body1'} align={'center'} >
                                    <Box>A solicitação do medicamento deverá ser realizada pelo paciente. Entretanto, fica dispensada a obrigatoriedade da presença física do paciente considerado incapaz de acordo com os artigos 3º e 4º do Código Civil. O paciente é considerado incapaz?</Box>
                                </Typography>
                            </Box>
                            <Box>
                                <Grid container xs direction="row" justify="space-around" alignItems="center">
                                    <Grid container item xs direction="row" justify="flex-start" alignItems="flex-start">
                                        <Grid item xs={2}>
                                            <Box ml={1}>
                                                <CheckBoxOutlineBlankIcon />
                                                <Typography component={'span'} variant={'body1'} align={'left'} >
                                                    <Box ml={1}>Não</Box>
                                                </Typography>
                                                <CheckBoxOutlineBlankIcon />
                                                <Typography component={'span'} variant={'body1'} align={'left'} >
                                                    <Box ml={1}>Sim</Box>
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography component={'span'} variant={'body1'} align={'left'} >
                                                <Box>Indicar o nome do responsável pelo paciente, o qual poderá realizar a solicitação do medicamento</Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container item xs>
                                        <Grid item>
                                            <Typography component={'span'} variant={'body1'} align={'center'} >
                                                <Box>_________________________________</Box>
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography component={'span'} variant={'body1'} align={'center'} >
                                                <Box>Nome do responsável</Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha9LME