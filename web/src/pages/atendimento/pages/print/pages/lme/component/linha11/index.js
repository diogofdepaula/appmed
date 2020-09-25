import { Box, Grid, Typography } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import React from 'react';

const Linha11LME = () => {

    return (
        <>
            <Box mt={2} >
                <Grid container spacing={1}>
                    <Grid item xs>
                        <Box width={1} border={1} borderColor="black" display="block">
                            <Box mt={-1} ml={2} display="flex">
                                <Typography component={'span'} variant="caption" noWrap={true} >
                                    <Box bgcolor="white" px={1}>18 - Campos abaixo preenchidos por</Box>
                                </Typography>
                            </Box>
                            <Box px={1}>
                                <Grid container item direction="row" justify="flex-start" alignItems="flex-start">
                                    <Grid item>
                                        <Box ml={1} display="flex">
                                            <CheckBoxOutlineBlankIcon />
                                            <Typography component={'span'} variant={'body1'} align={'left'} >
                                                <Box>Paciente</Box>
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Box ml={1} display="flex">
                                            <CheckBoxOutlineBlankIcon />
                                            <Typography component={'span'} variant={'body1'} align={'left'} >
                                                <Box>Mãe do paciente</Box>
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Box ml={1} display="flex">
                                            <CheckBoxOutlineBlankIcon />
                                            <Typography component={'span'} variant={'body1'} align={'left'} >
                                                <Box>Responsável</Box>
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Box ml={1} display="flex">
                                            <CheckBoxOutlineBlankIcon />
                                            <Typography component={'span'} variant={'body1'} align={'left'} >
                                                <Box>Médico</Box>
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Box ml={1} display="flex">
                                            <CheckBoxOutlineBlankIcon />
                                            <Typography component={'span'} variant={'body1'} align={'left'} >
                                                <Box>Outro: ________________________________ e CPF: ___________________</Box>
                                            </Typography>
                                        </Box>
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

export default Linha11LME