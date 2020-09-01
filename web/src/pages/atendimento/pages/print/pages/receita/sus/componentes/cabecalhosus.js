import { Box, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { ClienteContext } from '../../../../..'

const CabecalhoSUS = () => {

    const cliente = useContext(ClienteContext)

    return (
        <>
            <Box
                border={2}
                borderColor="text.primary"
                display="flex" 
                justifyContent="center"
                mb={3}
            >
                <Typography variant={'h3'}><b>{cliente.nome}</b></Typography>
            </Box>
        </>
    )
}

export default CabecalhoSUS