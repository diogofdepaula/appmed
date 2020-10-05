import { Box, CardMedia, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { ImpressaoContext } from '../../../..'
import LogoSUS from '../../../../component/imagens/logosuspng.png'
import LogoMinisterio from '../../../../component/imagens/ministeriologo.png'
import LogoSESA from '../../../../component/imagens/sesalogo.png'

const Linha11LME = () => {

    const { impressao } = useContext(ImpressaoContext)

    ////dsadasd

    return (
        <>
            <Box mt={2}>
                <Grid container direction="row" justify="center" alignItems="stretch">
                    <Grid item xs>
                        <Box height={1} width={1} display="flex" justifyContent="center">
                            <CardMedia
                                style={{ width: "108px", height: "100%" }}  // width (em px) = heightdaimagemnatela/heightoriginal x widthoriginal
                                image={LogoSUS}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs>
                        <Box height={1} width={1} display="flex" justifyContent="center">
                            <CardMedia
                                style={{ width: "135px", height: "100%" }}  // width (em px) = heightdaimagemnatela/heightoriginal x widthoriginal
                                image={LogoMinisterio}
                            />
                            <Typography variant={'h3'} >
                                <Box style={{ color: "white" }}>-</Box>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs>
                        <Box height={1} width={1} display="flex" justifyContent="center">
                            <CardMedia
                                style={{ width: "135px", height: "100%" }}  // width (em px) = heightdaimagemnatela/heightoriginal x widthoriginal
                                image={LogoSESA}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha11LME