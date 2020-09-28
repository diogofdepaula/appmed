import { Box, Grid, Typography } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import React from 'react';

const Linha13LME = () => {

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
                                            <Box bgcolor="white" px={1}>21 - Número do documento do paciente</Box>
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Grid container>
                                            <Grid item>
                                                <Box ml={1} display="flex">
                                                    <CheckBoxOutlineBlankIcon />
                                                    <Typography component={'span'} variant={'body1'} align={'left'} >
                                                        <Box>CNS</Box>
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item>
                                                <Box ml={1} display="flex">
                                                    <CheckBoxOutlineBlankIcon />
                                                    <Typography component={'span'} variant={'body1'} align={'left'} >
                                                        <Box>CPF</Box>
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item>
                                                <Typography component={'span'} variant={'body1'} align={'left'}>
                                                    <Box></Box>
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box width={1} border={1} borderColor="black" display="block">
                                    <Box mt={-1} ml={2} display="flex">
                                        <Typography component={'span'} variant="caption" noWrap={true} >
                                            <Box bgcolor="white" px={1}>22 - Correio eletrônico do paciente</Box>
                                        </Typography>
                                    </Box>
                                    <Box ml={1}>
                                        <Typography component={'span'} variant={'body1'} align={'left'} style={{color: "white"}}>
                                            {/* // se tiver que deixar em branco então deixa "-" de cor branca */}
                                            <Box>-</Box>
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Box height={1} width={1} border={1} borderColor="black" display="block" >
                            <Box mt={-1} display="flex" justifyContent="center">
                                <Typography component={'span'} variant="caption" noWrap={true} >
                                    <Box bgcolor="white" px={1}>23 - Assinatura do responsável pelo preenchimento</Box>
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

export default Linha13LME