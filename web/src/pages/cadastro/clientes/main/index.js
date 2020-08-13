import { Container, Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableRow, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ClienteContext, PageContext } from '..';

export default function ClienteMain() {

  const setPage = useContext(PageContext)
  const { setCliente } = useContext(ClienteContext)
  // tem que ter o clientes, setClientes porque senào na hora que corrige o Formcontrol para reescrever ele não zera a lista
  // fica com um clientesinitial
  const [clientes, setClientes] = useState([])
  const [clientesfiltrados, setClientesFiltrados] = useState([])

  const fetchData = useCallback(async () => {
    const res = await fetch(`http://localhost:4001/api.appmed/clientes/allfit`)
    const json = await res.json();
    setClientes(json);
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

  return (
    <>
      <Container>
        <Grid container>
          <Grid item>
            <IconButton aria-label="add"
              onClick={() => {
                setCliente(null)
                setPage('clienteinsert')
              }}
            >
              <AddIcon />
            </IconButton>
          </Grid>
          <Grid item >
            <TextField
              id="standard-basic"
              label="Filtrar"
              onChange={filterClientes}
            />
          </Grid>
        </Grid>
      </Container>
      <Container>
        <TableContainer>
          <Table aria-label="simple table">
            <TableBody>
              {clientesfiltrados.map(cliente =>
                <TableRow key={cliente.id}>
                  <TableCell
                    component="th"
                    scope="row"
                    onClick={() => {
                      setCliente(cliente)
                      setPage('clientedetails')
                    }}
                    >
                    {cliente.nome}
                  </TableCell>
                  <TableCell align="right">{cliente.nascimento}</TableCell>
                  <TableCell align="right">{cliente.cpf}</TableCell>
                <TableCell padding="checkbox">
                  <IconButton color="primary" aria-label="update"
                    onClick={() => {
                      setCliente(cliente)
                      setPage('clienteupdate')
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
                <TableCell padding="checkbox">
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
    </Container>
    </>
  )
}