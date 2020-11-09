import { Box, List, ListItem, ListItemIcon, ListItemText, TextField } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import React, { useCallback, useEffect, useState } from 'react';

const ClienteSet = ({ changePage }) => {

    const [clientes, setClientes] = useState([])
    // tem que ter o clientes, setClientes porque senào na hora que corrige o Formcontrol para reescrever ele não zera a lista
    // fica com um clientesinitial
    const [clientesfiltrados, setClientesFiltrados] = useState([])

    const fetchData = useCallback(async () => {
        // deixar o allfat, pois usa os outros dados na hora de imprimir
        const res = await fetch('http://localhost:4001/api.appmed/clientes/allfat')
        const json = await res.json()
        setClientes(json)
        setClientesFiltrados(json)
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    const filterClientes = (event) => {

        let filtro = [...clientes].filter(w =>
            w.nome.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1 ||
            w.nascimento.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
        )
        if (filtro.length === 0) {
            filtro.push({
                id: 0,
                nome: "nenhum cliente encontrado"
            })
        }
        setClientesFiltrados(filtro)
    }

    return (
        <div>
            <Box>
                <TextField fullWidth autoFocus
                    label="Filtrar por nome do cliente, data de nascimento ou CPF"
                    onChange={(e) => filterClientes(e)}
                />
            </Box>
            <Box>
                <List >
                    {clientesfiltrados.map(cliente =>
                        <ListItem
                            key={cliente.id}
                            button
                            onClick={changePage(cliente, 2)}
                        >
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary={cliente.nome} secondary={cliente.nascimento}></ListItemText>
                        </ListItem>
                    )}
                </List>
            </Box>
        </div>
    )
}
export default ClienteSet