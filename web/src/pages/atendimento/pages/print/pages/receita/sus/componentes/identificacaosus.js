import { Box, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { ClienteContext } from '../../../../../../../../App'

const IdentificacaoSUS = () => {

    const { clienteContext } = useContext(ClienteContext)

    return (
        <div>
            <Box
                display="flex"
                justifyContent="center"
                pt={3}
                pb={7}
            >
                <Typography variant={'h2'} >
                    <Box fontWeight="fontWeightBold" >{clienteContext.nome}</Box>
                </Typography>
            </Box>
        </div>
    )
}

export default IdentificacaoSUS