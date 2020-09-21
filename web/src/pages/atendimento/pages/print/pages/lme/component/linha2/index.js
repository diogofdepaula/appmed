import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { ImpressaoContext } from '../../../../../print'

const Linha2LME = () => {

    const { impressao } = useContext(ImpressaoContext)

    const estabelecimento = {
        cnes: impressao.local === "cisgap" ? "3634949" : impressao.local === "cisco" ? "2741687" : "7275714",  
        nome: impressao.local === "cisgap" ? "Consórcio Intermunicipal de Saúde - CISGAP" : impressao.local === "cisco" ? "Consórcio Intermunicipal de Saúde Centro Oeste - CISCO" : "CLINICA MEDICA DIEGUEZ DE PAULA",  
    }

    return (
        <>
            <Box
                mt={2}
            >
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <Box
                            width={1}
                            border={1}
                            borderColor="black"
                            display="block"
                        >
                            <Box mt={-1} ml={2} display="flex">
                                <Typography variant="caption" noWrap={true} >
                                    <Box bgcolor="white" px={1}>1 - Número do CNES</Box>
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant={'body1'} align={'center'}>
                                    <Box>{estabelecimento.cnes}</Box>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={9}>
                        <Box
                            width={1}
                            border={1}
                            borderColor="black"
                            display="block"
                        >
                            <Box mt={-1} ml={2} display="flex">
                                <Typography variant="caption" noWrap={true} >
                                    <Box bgcolor="white" px={1}>2 - Nome do estabelecimento de saúde solicitante</Box>
                                </Typography>
                            </Box>
                            <Box ml={1}>
                                <Typography variant={'body1'} align={'left'}>
                                    <Box>{estabelecimento.nome}</Box>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>



            </Box>
        </>
    )
}

export default Linha2LME