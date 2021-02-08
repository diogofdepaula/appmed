import { Box, Divider, IconButton, Tooltip } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import HealingIcon from '@material-ui/icons/Healing';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import SaveIcon from '@material-ui/icons/Save';
import React from 'react';

const MedicamentosAppBar = () => {

    // const { clienteOnDuty, setClienteOnDuty, clienteEdit, setClienteEdit, page, setPage } = useContext(ClientesContext)

    // const handleBack = () => {
    //     setClienteEdit(null)
    //     setClienteOnDuty(null)
    //     setPage('clientemain')
    // }

    // const handleInsert = () => {
    //     const newcliente = InitialCliente()
    //     setClienteOnDuty(null)
    //     setClienteEdit(newcliente)
    //     setPage('clienteinsert')
    // }

    // const handleUpdate = () => {
    //     setClienteEdit(clienteOnDuty)
    //     setPage('clienteupdate')
    // }

    // const handleSubmit = event => {

    //     // submit do insert e update , da prescricoes e lme juntos

    //     let clipost = [`http://localhost:4001/api.appmed/clientes`, 'post', clienteEdit]
    //     let cliput = [`http://localhost:4001/api.appmed/clientes/${clienteEdit.id}`, 'put', clienteEdit]

    //     let submitvar

    //     switch (page) {
    //         case 'clienteinsert':
    //             submitvar = clipost
    //             break;
    //         case 'clienteupdate':
    //             submitvar = cliput
    //             break;
    //         default:
    //             break;
    //     }

    //     event.preventDefault();
    //     fetch(submitvar[0], {
    //         method: submitvar[1],
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(submitvar[2])
    //     }).then(data => {
    //         if (data.ok) {
    //             //tem que inventar um refresh
    //             setPage('clientemain')
    //             setClienteEdit(null)
    //             setClienteOnDuty(null)
    //         }
    //     })
    // }

    // const fetchDelete = () => {

    //     fetch(`http://localhost:4001/api.appmed/clientes/${clienteOnDuty.id}`, {
    //         method: 'delete'
    //     }).then(data => {
    //         if (data.ok) {
    //             handleBack()
    //         }
    //     })
    // }

    // const handleDelete = () => {
    //     fetchDelete()
    // }


    return (
        <>
            <Box>
                <Tooltip title="Voltar">
                    <span>
                        <IconButton
                            // disabled={!clienteOnDuty}
                            // onClick={handleBack}
                        >
                            <ArrowUpwardIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Novo cliente">
                    <IconButton
                        // onClick={handleInsert}
                    >
                        <LocalPharmacyIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Editar">
                    <span>
                        <IconButton
                            // disabled={!clienteOnDuty}
                            // onClick={handleUpdate}
                        >
                            <EditIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Salvar">
                    <span>
                        <IconButton
                            // disabled={page === 'clienteinsert' ? (clienteEdit.nome !== "" ? false : true) : false}
                            // onClick={handleSubmit}
                        >
                            <SaveIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Excluir">
                    <span>
                        <IconButton
                            // disabled={!clienteOnDuty}
                            // onClick={handleDelete}
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

export default MedicamentosAppBar