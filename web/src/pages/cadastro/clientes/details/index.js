import { Box, IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React, { useCallback, useContext, useEffect } from 'react';
import { ClienteContext, PageContext } from '..';
import ClienteData from '../components/clientedata';

export default function ClienteDetails() {

    const { cliente, setCliente } = useContext(ClienteContext)
    const setPage = useContext(PageContext)

    const fetchData = useCallback(async () => {
        const res = await fetch(`http://localhost:4001/api.appmed/clientes/${cliente.id}`)
        const json = await res.json();
        setCliente(json);
    }, [cliente, setCliente])

    useEffect(() => {
        fetchData();
    }, [fetchData])

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
                <IconButton onClick={() => setPage('clientemain')}>
                    <EditIcon />
                </IconButton>
                <IconButton onClick={() => setPage('clientemain')}>
                    <DeleteIcon />
                </IconButton>
            </Box>
            <ClienteData />
        </>
    )
}