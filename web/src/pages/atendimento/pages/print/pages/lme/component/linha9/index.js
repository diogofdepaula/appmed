import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { LMEPrintContext } from '../..'

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
                            <Box px={3}>
                                <Typography component={'span'} variant={'body1'} align={'center'} >
                                    <Box>A solicitação do medicamento deverá ser realizada pelo paciente. Entretanto, fica dispensada a obrigatoriedade da presença física do paciente considerado incapaz de acordo com os artigos 3º e 4º do Código Civil. O paciente é considerado incapaz?</Box>
                                </Typography>
                            </Box>
                            <Box>
                                <Grid container xs>
                                    <Grid item xs>

                                    </Grid>
                                    <Grid item xs>

                                    </Grid>
                                </Grid>
                                <Typography component={'span'} variant={'body1'} align={'left'} >
                                    <Box>dkfsçadjfçlk</Box>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha9LME