import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { ClienteContext } from '../../../../..'

const Linha3LME = () => {

    const cliente = useContext(ClienteContext)

    return (
        <>
            <Box mt={1}>
                <Grid container spacing={1}>
                    <Grid item xs={11}>
                        <Box width={1} border={1} borderColor="black" display="block" >
                            <Box mt={-1} ml={2} display="flex">
                                <Typography component={'span'} variant="caption" noWrap={true} >
                                    <Box bgcolor="white" px={1}>3 - Nome completo do paciente</Box>
                                </Typography>
                            </Box>
                            <Box ml={1}>
                                <Typography component={'span'} variant={'h6'} align={'left'}>
                                    <Box fontWeight="fontWeightBold">{cliente.nome}</Box>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                        <Box height={1} width={1} border={1} borderColor="black" display="block">
                            <Box mt={-1} display="flex" justifyContent="center">
                                <Typography component={'span'} variant="caption" noWrap={true} >
                                    <Box bgcolor="white" px={1}>5 - Peso</Box>
                                </Typography>
                            </Box>
                            <Box>
                                <Typography component={'span'} variant={'body1'} align={'center'}>
                                    <Box>{cliente.peso} Kg</Box>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha3LME