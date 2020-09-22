import { Box, Typography } from '@material-ui/core'
import React from 'react'

const Linha15LME = () => {

    return (
        <>
            <Box
                width={1}
                border={5}
                borderColor="black"
            >
                <Typography component={'span'} variant={'body1'} align={'center'}>
                    <Box fontWeight="fontWeightBold" >CAMPOS DE PREENCHIMENTO EXCLUSIVO PELO MÉDICO SOLICITANTE</Box>
                </Typography>
            </Box>
        </>
    )
}

export default Linha15LME