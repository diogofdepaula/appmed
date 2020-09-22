import { Box, Typography } from '@material-ui/core'
import React from 'react'

const Linha13LME = () => {

    return (
        <>
            <Box
                border={5}
                borderColor="lightgrey"
                width={1}
                bgcolor="text.disabled"
            >
                <Typography component={'span'} variant={'body1'} align={'center'}>
                    <Box fontWeight="fontWeightBold" >LAUDO DE SOLICITAÇÃO, AVALIAÇÃO E AUTORIZAÇÃO DE MEDICAMENTO(S)</Box>
                </Typography>
            </Box>
        </>
    )
}

export default Linha13LME