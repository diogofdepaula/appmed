import { Box, IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SaveIcon from '@material-ui/icons/Save';
import React, { useContext } from 'react';
import { ClienteContext, PageContext } from '..';
import ClienteForm from '../components/clienteform';

export default function ClienteUpdate() {

    const setPage = useContext(PageContext)
    const { cliente, setCliente } = useContext(ClienteContext)

    const handleSubmit = event => {
        event.preventDefault();
        fetch(`http://localhost:4001/api.appmed/clientes/${cliente.id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cliente)
        }).then(data => {
            if (data.ok) {
                setPage('clientemain')
            }
        })
    }

    return (
        <>
            <Box>
                <IconButton
                    onClick={() => {
                        setCliente(null)
                        setPage('clientemain')
                    }}
                >
                    <ArrowBackIcon />
                </IconButton>
                <IconButton
                    onClick={handleSubmit}
                >
                    <SaveIcon />
                </IconButton>
            </Box>
            <Box m={2}>
                <ClienteForm />
            </Box>
        </>
    )
}