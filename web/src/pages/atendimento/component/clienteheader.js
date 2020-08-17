import { Box, IconButton, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import React, { useContext } from 'react';
import { ClienteContext } from '../pages';

export default function ClienteHeader() {

    const cliente = useContext(ClienteContext)

    return (
        <>
            <Box m={3} display="flex" flexDirection="row">
                <Box mr={6} ml={6}>
                    <Typography variant="h5" gutterBottom>{cliente.nome}</Typography>
                </Box>
                <Box display="flex">
                    <Typography variant="h6" gutterBottom>{cliente.nascimento}</Typography>
                    <Typography variant="h6" gutterBottom>({cliente.id})</Typography>
                </Box>
                <IconButton>
                    <EditIcon />
                </IconButton>
            </Box>
        </>
    )
}