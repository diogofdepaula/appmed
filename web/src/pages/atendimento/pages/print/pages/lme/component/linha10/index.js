import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { ImpressaoContext } from '../../../..'
import { format } from 'date-fns';
import { ptBR } from "date-fns/locale";

const Linha10LME = () => {

    const { impressao } = useContext(ImpressaoContext)

    const date = format(impressao.database, "dd '/' MM '/' yyyy", { locale: ptBR }) 

    return (
        <>
            <Box mt={2}>
                <Grid container spacing={1}>
                    <Grid container item xs={8}>
                        <Grid container item direction="column" justify="center" alignItems="stretch" spacing={1}>
                            <Grid item>
                                <Box width={1} border={1} borderColor="black" display="block">
                                    <Box mt={-1} ml={2} display="flex">
                                        <Typography component={'span'} variant="caption" noWrap={true} >
                                            <Box bgcolor="white" px={1}>14 - Nome do médico solicitante</Box>
                                        </Typography>
                                    </Box>
                                    <Box ml={2}>
                                        <Typography component={'span'} variant={'h6'} align={'left'}>
                                            <Box>Dr. Diogo F. de Paula</Box>
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid container item direction="row" alignItems="stretch" spacing={1}>
                                <Grid item xs={9}>
                                    <Box width={1} border={1} borderColor="black" display="block">
                                        <Box mt={-1} ml={2} display="flex">
                                            <Typography component={'span'} variant="caption" noWrap={true} >
                                                <Box bgcolor="white" px={1}>15 - Número do Cartão Nacional de Saúde (CNS) do médico solicitante</Box>
                                            </Typography>
                                        </Box>
                                        <Box ml={2}>
                                            <Typography component={'span'} variant={'h6'} align={'left'}>
                                                {/* // se tiver que deixar em branco então deixa "-" de cor branca */}
                                                <Box>980.0162.8089.8038</Box>
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={3}>
                                    <Box height={1} width={1} border={1} borderColor="black" display="block">
                                        <Box mt={-1} display="flex" justifyContent="center">
                                            <Typography component={'span'} variant="caption" noWrap={true} >
                                                <Box bgcolor="white" px={1}>16 - Data da solicitação</Box>
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography component={'span'} variant={'h6'} align={'center'}>
                                                <Box>{date}</Box>
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Box height={1} width={1} border={1} borderColor="black" display="block" >
                            <Box mt={-1} display="flex" justifyContent="center">
                                <Typography component={'span'} variant="caption" noWrap={true} >
                                    <Box bgcolor="white" px={1}>17 - Assinatura e carimbo do médico</Box>
                                </Typography>
                            </Box>
                            {/* <Box ml={1}>
                                <Typography component={'span'} variant={'h6'} align={'left'}>
                                    <Box fontWeight="fontWeightBold">{cliente.nome}</Box>
                                </Typography>
                            </Box> */}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha10LME