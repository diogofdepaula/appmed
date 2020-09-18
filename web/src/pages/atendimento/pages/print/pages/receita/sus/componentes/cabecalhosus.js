import { Box, CardMedia, Typography } from '@material-ui/core'
import React from 'react'
import LogoSUS from './logosuspng.png'

const CabecalhoSUS = () => {

    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
                mb={2}
                border={3}
                borderColor={"black"}
                borderRadius={10}
            >
                <Box my={2} display="flex" flexWrap="nowrap">
                    <CardMedia
                        style={{ width: "100px", height: "50px" }}
                        image={LogoSUS}
                    />
                    <Typography variant={'h4'} >
                        <Box fontWeight="fontWeightBold" >Receita Médica</Box>
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default CabecalhoSUS