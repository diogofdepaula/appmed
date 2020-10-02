import { Box, CardMedia, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { ImpressaoContext } from '../../../..'
import LogoCISCO from '../../../../component/imagens/ciscologo.png'
import LogoCISGAP from '../../../../component/imagens/cisgaplogo.png'
import LogoSUS from '../../../../component/imagens/logosuspng.png'

const Linha11LME = () => {

    const { impressao } = useContext(ImpressaoContext)

    return (
        <>
            <Box mt={2}>
                <Grid container direction="row" justify="center" alignItems="stretch">
                    <Grid item xs style={{backgroundColor: "blue"}}>
                        <CardMedia
                            style={{ width: "108px", height: "100%" }}  // width (em px) = heightdaimagemnatela/heightoriginal x widthoriginal
                            image={LogoSUS}
                        />
                    </Grid>
                    <Grid item xs>
                        {/* <CardMedia
                                    style={{ width: "135px", height: "100%" }}  // width (em px) = heightdaimagemnatela/heightoriginal x widthoriginal
                                    image={Ministerio}
                                    /> */}
                        <Typography variant={'h3'} >
                            <Box fontWeight="fontWeightBold" >Ministério da Saúde</Box>
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <CardMedia
                            style={{ width: "135px", height: "100%" }}  // width (em px) = heightdaimagemnatela/heightoriginal x widthoriginal
                            image={impressao.local === "cisgap" ? LogoCISGAP : LogoCISCO}
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha11LME