import { Box, IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SaveIcon from '@material-ui/icons/Save';
import React, { useContext } from 'react';
import { ClienteContext, PageContext } from '..';
import ClienteForm from '../components/clienteform';

export default function ClienteInsert() {

    const setPage = useContext(PageContext)
    const { cliente, setCliente } = useContext(ClienteContext)

    const { clienteContext } = useContext(ClientesContext)
    
    // const novocliente = {
    //     nome: "",
    //     nascimento: "",
    //     sexo: "feminino",
    //     peso: "",
    //     altura: "",
    //     endereco: "",
    //     telefone: "",
    //     celular: "",
    //     email: "",
    //     cns: "",
    //     cpf: "",
    //     mae: ""
    //   }

    const handleSubmit = event => {
        event.preventDefault();
        fetch(`http://localhost:4001/api.appmed/clientes`, {
            method: 'post',
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