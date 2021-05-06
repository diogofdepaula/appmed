import { Box, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { ClienteContext } from '../../../../../../../App'

const Identificacao = () => {

    const { clienteContext } = useContext(ClienteContext)

    return (
        <>
            <Box
                display="block"
                pt={3}
                pb={7}
            >
                <Typography variant={'h2'} align="center" >
                    <Box fontWeight="fontWeightBold" >{clienteContext.nome}</Box>
                </Typography>
                {clienteContext.cpf &&
                    <Typography variant={'subtitle2'} align="center" >
                        <Box>CPF: {clienteContext.cpf} </Box>
                    </Typography>
                }
            </Box>
        </>
    )
}

export default Identificacao