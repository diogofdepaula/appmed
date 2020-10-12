import { Box, Typography } from '@material-ui/core';
import React from 'react';

const Linha14LME = () => {

    return (
        <>
            <Typography component={'span'} variant={'body2'} align={'left'} >
                <Box fontWeight="fontWeightLight" fontSize={6}>
                    Referência: arquivo disponibilizado no http://www.cmde.parana.pr.gov.br/  versão 10/2020
                </Box>
            </Typography>
        </>
    )
}

export default Linha14LME