import { Box, CardMedia, Typography } from '@material-ui/core'
import React from 'react'
import LogoSUS from './logosuspng.png'

const CabecalhoSUS = () => {

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
                    <Box mx={30}>
                        <Typography variant={'h3'} >
                            <Box fontWeight="fontWeightBold" >Receita Médica</Box>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default CabecalhoSUS