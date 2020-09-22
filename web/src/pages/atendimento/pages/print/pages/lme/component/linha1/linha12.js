import { Box, Typography } from '@material-ui/core'
import React from 'react'

const Linha12LME = () => {

    return (
        <>
            <Box
                border={5}
                borderColor="grey"
                width={1}
                bgcolor="text.primary"
                color="background.paper"
            >
                <Typography component={'span'} variant={'body1'} align={'center'}>
                    <Box fontWeight="fontWeightBold">COMPONENTE ESPECIALIZADO DA ASSISTÊNCIA FARMACÊUTICA</Box>
                </Typography>
            </Box>
        </>
    )
}

export default Linha12LME