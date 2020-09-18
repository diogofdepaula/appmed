import { Box, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { ClienteContext } from '../../../../..'

const IdentificacaoSUS = () => {

    const cliente = useContext(ClienteContext)

    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
                pt={3}
                pb={7}
            >
                <Typography variant={'h2'} >
                    <Box fontWeight="fontWeightBold" >{cliente.nome}</Box>
                </Typography>
            </Box>
        </>
    )
}

export default IdentificacaoSUS