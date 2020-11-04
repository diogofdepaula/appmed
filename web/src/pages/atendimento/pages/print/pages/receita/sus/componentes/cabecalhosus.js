import { Box, CardMedia, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { ImpressaoContext } from '../../../..'
import LogoCISCO from '../../../../component/imagens/ciscologo.png'
import LogoCISGAP from '../../../../component/imagens/cisgaplogo.png'
import LogoSUS from '../../../../component/imagens/logosus.png'

const CabecalhoSUS = () => {

    const { impressao } = useContext(ImpressaoContext)

    return (
        <>
            <Box display="flex" justifyContent="center" border={3} borderColor={"black"} borderBottom={0}>
                <Box my={2} display="flex" flexWrap="nowrap">
                    <CardMedia
                        style={{ width: "108px", height: "100%" }}  // width (em px) = heightdaimagemnatela/heightoriginal x widthoriginal
                        image={LogoSUS}
                    />
                    <Box mx={20}>
                        <Typography variant={'h3'} >
                            <Box fontWeight="fontWeightBold" >Receita Médica</Box>
                        </Typography>
                    </Box>
                    {impressao.local === "" ?
                        <Box
                            style={{ width: "135px", height: "100%" }}  // width (em px) = heightdaimagemnatela/heightoriginal x widthoriginal
                        />
                        :
                        <CardMedia
                            style={{ width: "135px", height: "100%" }}  // width (em px) = heightdaimagemnatela/heightoriginal x widthoriginal
                            image={impressao.local === "cisgap" ? LogoCISGAP : LogoCISCO}
                        />
                    }
                </Box>
            </Box>
        </>
    )
}

export default CabecalhoSUS