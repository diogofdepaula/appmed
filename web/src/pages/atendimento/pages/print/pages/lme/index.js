import { Box, Grid, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { ImpressaoContext } from '../..';
// import LogoSUS from '../../component/imagens/logosuspng.png'
// import LogoCISGAP from '../../component/imagens/cisgaplogo.png'
// import LogoCISCO from '../../component/imagens/ciscologo.png'

export default function FactoryLME() {

    const { impressao } = useContext(ImpressaoContext)

    const a4size = {
        width: 1240,
        height: 1750 //1754
    }

    return (
        <>
            <div style={{ width: a4size.width, height: a4size.height }} >
                <Box
                    // pode substituir pelo div alí de cima
                    height={1}
                >
                    <Box
                        height={1}
                        m={10}
                        p={5}
                        border={3}
                        borderColor={"blue"}
                    >
                        <Box
                            border={3}
                            borderColor={"black"}
                            width={1}
                        >
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="center"
                            >
                                <Grid item container xs >
                                    <Grid item >
                                        {/* <CardMedia
                                    style={{ width: "108px", height: "100%" }}  // width (em px) = heightdaimagemnatela/heightoriginal x widthoriginal
                                    image={LogoSUS}
                                    /> */}
                                    </Grid>
                                    <Grid item>
                                        <Typography variant={'h5'} >
                                            <Box fontWeight="fontWeightBold" >Sistema Único de Saúde</Box>
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item container xs>
                                    <Grid item>
                                        {/* <CardMedia
                                    style={{ width: "135px", height: "100%" }}  // width (em px) = heightdaimagemnatela/heightoriginal x widthoriginal
                                    image={MINISTÉRIO DA SAUDE}
                                    /> */}
                                    </Grid>
                                    <Grid item>
                                        <Typography variant={'h5'} >
                                            <Box fontWeight="fontWeightBold" >Ministério da Saúde</Box>
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item container xs>
                                    <Grid item>
                                        {/* <CardMedia
                                    style={{ width: "135px", height: "100%" }}  // width (em px) = heightdaimagemnatela/heightoriginal x widthoriginal
                                    image={impressao.local === "cisgap" ? LogoCISGAP : LogoCISCO}
                                    /> */}
                                    </Grid>
                                    <Grid item>
                                        <Typography variant={'h6'} >
                                            <Box fontWeight="fontWeightBold" >Secretaria de Estado da Saúde</Box>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box
                            border={5}
                            borderColor="grey"
                            width={1}
                            bgcolor="text.primary"
                            color="background.paper"
                        >
                            <Typography variant={'body1'} align={'center'}>
                                <Box fontWeight="fontWeightBold">COMPONENTE ESPECIALIZADO DA ASSISTÊNCIA FARMACÊUTICA</Box>
                            </Typography>
                        </Box>
                        <Box
                            border={5}
                            borderColor="lightgrey"
                            width={1}
                            bgcolor="text.disabled"

                        >
                            <Typography variant={'body1'} align={'center'}>
                                <Box fontWeight="fontWeightBold" >LAUDO DE SOLICITAÇÃO, AVALIAÇÃO E AUTORIZAÇÃO DE MEDICAMENTO(S)</Box>
                            </Typography>
                        </Box>
                        <Box
                            width={1}
                        >
                            <Typography variant={'body1'} align={'center'}>
                                <Box fontWeight="fontWeightBold" >SOLICITAÇÃO DE MEDICAMENTO(S)</Box>
                            </Typography>
                        </Box>
                        <Box
                            width={1}
                            border={5}
                            borderColor="black"
                        >
                            <Typography variant={'body1'} align={'center'}>
                                <Box fontWeight="fontWeightBold" >CAMPOS DE PREENCHIMENTO EXCLUSIVO PELO MÉDICO SOLICITANTE</Box>
                            </Typography>
                        </Box>
                        <Box
                        >
                            <Grid container>
                                <Grid item xs={3}>
                                    <Box
                                        width={1}
                                        border={1}
                                        borderColor="black"
                                    >
                                        <Typography variant={'body1'} align={'center'}>
                                            <Box>CNES</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={9}>
                                    <Box
                                        width={1}
                                        border={1}
                                        borderColor="black"
                                    >
                                        <Typography variant={'body1'} align={'left'}>
                                            <Box >Nome do médico solicitante</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>


                           
                        </Box>




                    </Box>
                </Box>
            </div>
        </>
    )
}