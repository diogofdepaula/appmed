import { Box, IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SaveIcon from '@material-ui/icons/Save';
import React, { useContext, useCallback, useEffect, useState } from 'react';
import { ClienteContext, PageContext } from '..';
import ClienteForm from '../components/clienteform';

export default function ClienteUpdate() {

    const setPage = useContext(PageContext)
    const { cliente, setCliente } = useContext(ClienteContext)
    const [edit, setEdit] = useState(true)

    const fetchData = useCallback(async () => {
        const res = await fetch(`http://localhost:4001/api.appmed/clientes/${cliente.id}`)
        const json = await res.json();
        setCliente(json);
    }, [cliente, setCliente])

    useEffect(() => {
        if(edit){
            fetchData();
        }
        return () => setEdit(false)
    }, [edit, fetchData])

// APRIMEIRA TIMELIFE ESTÁ VINDO COM CLIENTE DO FIT CLIENTE (ISSO FAZ COM QUE DÊ ERRO AO CARREGAR O CLIENTEFORM)


    const handleSubmit = event => {
        event.preventDefault();
        fetch(`http://localhost:4001/api.appmed/clientes`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cliente)
        }).then(data => {
            if (data.ok) {
                setCliente(null)
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
            <Box>

                SOLUÇÃO RUIM
                {cliente.cns && <ClienteForm />}
            </Box>
        </>
    )
}