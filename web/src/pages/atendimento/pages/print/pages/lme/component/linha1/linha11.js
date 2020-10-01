import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'

const Linha11LME = () => {

    return (
        <>
            <Box mt={2}>
                <Grid container direction="row" justify="center" alignItems="center">
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
        </>
    )
}

export default Linha11LME