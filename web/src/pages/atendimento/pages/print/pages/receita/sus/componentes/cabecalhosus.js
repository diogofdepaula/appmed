import { Box, CardMedia, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import LogoSUS from '../../../../component/imagens/logosuspng.png'
import LogoCISGAP from '../../../../component/imagens/cisgaplogo.png'
import LogoCISCO from '../../../../component/imagens/ciscologo.png'
import { ImpressaoContext } from '../../../..'

const CabecalhoSUS = () => {

    const { impressao } = useContext(ImpressaoContext)

    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
                //  mb={2}
                border={3}
                borderColor={"black"}
                borderBottom={0}
            //borderRadius={10}
            >
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
                    <CardMedia
                        style={{ width: "135px", height: "100%" }}  // width (em px) = heightdaimagemnatela/heightoriginal x widthoriginal
                        image={impressao.local === "cisgap" ? LogoCISGAP : LogoCISCO}
                    />
                </Box>
            </Box>
        </>
    )
}

export default CabecalhoSUS