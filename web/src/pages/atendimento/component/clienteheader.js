import { Box, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import PersonIcon from '@material-ui/icons/Person';
import { differenceInYears, parseISO } from 'date-fns';
import React, { useContext } from 'react';
import { ClienteContext } from '../../../App';

const ClienteHeader = () => {

    const { clientecontext } = useContext(ClienteContext)
    const idade = differenceInYears(new Date(), parseISO(clientecontext.nascimento))

    return (
        <>
            <Box my={2} display="flex" justifyContent="center" alignItems="center">
                <PersonIcon />
                <Typography variant="h5">
                    <Box fontWeight="fontWeightBold">{clientecontext.nome} </Box>
                </Typography>
                <Typography variant="h6">
                    <Box ml={1}> - {idade} anos - </Box>
                </Typography>
                <Typography variant="h6">
                    <Box ml={1}>ID {clientecontext.id}</Box>
                </Typography>
                <EditIcon />
            </Box>
        </>
    )
}

export default ClienteHeader