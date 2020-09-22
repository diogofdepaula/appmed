import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { ClienteContext } from '../../../../..'

const Linha4LME = () => {

    const cliente = useContext(ClienteContext)

    return (
        <>
            <Box mt={1}>
                <Grid container spacing={1}>
                    <Grid item xs={11}>
                        <Box
                            width={1}
                            border={1}
                            borderColor="black"
                            display="block"
                        >
                            <Box mt={-1} ml={2} display="flex">
                                <Typography component={'span'} variant="caption" noWrap={true} >
                                    <Box bgcolor="white" px={1}>4- Nome da Mãe do Paciente</Box>
                                </Typography>
                            </Box>
                            <Box ml={1}>
                                <Typography component={'span'} variant={'h6'} align={'left'}>
                                    <Box>{cliente.mae}</Box>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                        <Box
                         height={1}
                            width={1}
                            border={1}
                            borderColor="black"
                            display="block"
                        >
                            <Box mt={-1} display="flex" justifyContent="center">
                                <Typography component={'span'} variant="caption" noWrap={true} >
                                    <Box bgcolor="white" px={1}>6 - Altura</Box>
                                </Typography>
                            </Box>
                            <Box>
                                <Typography component={'span'} variant={'body1'} align={'center'}>
                                    <Box>{cliente.altura}</Box>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha4LME