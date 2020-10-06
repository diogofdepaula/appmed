import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { ClienteContext } from '../../../../..'

const Linha3LME = () => {

    const cliente = useContext(ClienteContext)

    return (
        <>
            <Box mt={1}>
                <Grid container spacing={1}>
                    <Grid container item xs={11}  >
                        <Box width={1} border={1} borderColor="black">
                            <Grid container direction="column" justify="flex-end" alignItems="stretch">
                                <Grid item>
                                    <Box mt={-1} ml={2} display="flex" >
                                        <Typography component={'span'} variant="caption" noWrap={true} >
                                            <Box bgcolor="white" px={1}>3 - Nome completo do paciente</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box ml={1}>
                                        <Typography component={'span'} variant={'h5'} align={'left'}>
                                            {cliente.nome ? <Box fontWeight="fontWeightBold">{cliente.nome}</Box> : <Box style={{ color: "white" }}>-</Box>}
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid container item xs={1}>
                        <Box width={1} border={1} borderColor="black">
                            <Grid container direction="column" justify="center" alignItems="center">
                                <Grid item>
                                    <Box mt={-1} display="flex">
                                        <Typography component={'span'} variant="caption" noWrap={true} >
                                            <Box bgcolor="white" px={1}>5 - Peso</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box>
                                        <Typography component={'span'} variant={'h6'} align={'center'}>
                                            <Box>{cliente.peso} Kg</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha3LME