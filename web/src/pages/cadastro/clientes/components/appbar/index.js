import { Box, Divider, IconButton, Tooltip } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import HealingIcon from '@material-ui/icons/Healing';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SaveIcon from '@material-ui/icons/Save';
import React, { useContext } from 'react';
import { ClientesContext } from '../..';
import InitialCliente from '../initialcliente';

const ClientesAppBar = () => {

    const { clienteOnDuty, setClienteOnDuty, clienteEdit, setClienteEdit, page, setPage } = useContext(ClientesContext)

    const handleNovo = () => {
        const newcliente = InitialCliente()
        setClienteOnDuty(null)
        setClienteEdit(newcliente)
        setPage('clienteinsert')
    }

    const handleEditar = () => {
        setClienteEdit(clienteOnDuty)
        setPage('clienteupdate')
    }

    // const handleParar = () => {
    //     setPrescricaoEdit(prescricaoOnDuty)
    //     setPage('prescricaodelete')
    // }

    const handleSubmit = event => {
        event.preventDefault();
        fetch(`http://localhost:4001/api.appmed/clientes`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(clienteEdit)
        }).then(data => {
            if (data.ok) {
                setPage('clientemain')
            }
        })
    }

    return (
        <>
            <Box>
                <Tooltip title="Voltar">
                    <span>
                        <IconButton
                        //disabled={!prescricaoOnDuty}
                        >
                            <ArrowUpwardIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Novo cliente">
                    <IconButton
                        onClick={handleNovo}
                    >
                        <PersonAddIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Editar">
                    <span>
                        <IconButton
                            disabled={!clienteOnDuty}
                            onClick={handleEditar}
                        >
                            <EditIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Salvar">
                    <span>
                        <IconButton
                            disabled={page === 'clienteinsert' ? (clienteEdit.nome !== "" ? false : true) : false}
                            onClick={handleSubmit}
                        >
                            <SaveIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Excluir">
                    <span>
                        <IconButton
                        // disabled={!prescricaoOnDuty}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Parar">
                    <span>
                        <IconButton
                        //  disabled={!prescricaoOnDuty}
                        //onClick={handleParar}
                        >
                            <HighlightOffIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Outros">
                    <span>
                        <IconButton
                        // disabled={!prescricaoOnDuty}
                        //                        onClick={() => setPage('teste')}
                        >
                            <HealingIcon />
                        </IconButton>
                    </span>
                </Tooltip>
            </Box>
            <Divider />
        </>
    )
}

export default ClientesAppBar