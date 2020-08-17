import { Box, List, ListItem, ListItemIcon, ListItemText, TextField } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import React, { useCallback, useEffect, useState } from 'react';

export default function ClienteSet(props) {

    const [cliente, setCliente] = useState()
    const [clientes, setClientes] = useState([])
    // tem que ter o clientes, setClientes porque senào na hora que corrige o Formcontrol para reescrever ele não zera a lista
    // fica com um clientesinitial
    const [clientesfiltrados, setClientesFiltrados] = useState([])
    const [validacao, setValidacao] = useState(false)

    const fetchData = useCallback(async () => {
        const res = await fetch('http://localhost:4001/api.appmed/clientes/allfit')
        const json = await res.json()
        setClientes(json)
        setClientesFiltrados(json)
    }, [])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    const filterClientes = event => {

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

    const sendNextStep = useCallback(
        props.pass(cliente, 2),
        [cliente, props]
    )

    useEffect(() => {
        if (validacao) {
            sendNextStep()
        }
    }, [validacao, sendNextStep])

    return (
        <div>
            <Box m={2}>
                <TextField
                    fullWidth
                    autoFocus
                    label="Filtrar por nome do cliente, data de nascimento ou CPF"
                    onChange={filterClientes}
                />
            </Box>
            <Box m={2}>
                <List >
                    {clientesfiltrados.map((cliente, index) =>
                        <>
                            <ListItem
                                key={index}
                                button
                                onClick={() => {
                                    setCliente(cliente)
                                    setValidacao(true)
                                }}
                            >
                                <ListItemIcon>
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText primary={cliente.nome} secondary={cliente.nascimento}></ListItemText>
                            </ListItem>
                        </>
                    )}
                </List>
            </Box>
        </div>
    )
}