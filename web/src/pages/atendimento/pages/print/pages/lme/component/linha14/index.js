import { Box, Typography } from '@material-ui/core';
import React from 'react';

const Linha14LME = () => {

    return (
        <>
            <Typography component={'span'} variant={'body2'} align={'left'} >
                <Box fontWeight="fontWeightLight" fontSize={6}>
                Referência: arquivo disponibilizado no http://www.cmde.parana.pr.gov.br/ . Modificado somente o layout do documento, sendo preservado todas as informações pertinentes ao caso e medicação solicitada. versão 10/2020. Para maiores esclarecimentos: diogofdepaula@gmail.com
                </Box>
            </Typography>
        </>
    )
}

export default Linha14LME