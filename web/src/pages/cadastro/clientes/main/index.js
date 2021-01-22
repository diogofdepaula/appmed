import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import { useCallback, useContext, useEffect, useState } from 'react';
import { ClienteContext } from '../../../../App';
import ClienteData from '../components/clientedata';

const ClienteMain = () => {

  const { clienteEdit, setClienteEdit } = useContext(ClienteContext)
 // const { page, setPage } = useContext(ClientesContext)
  const [clientes, setClientes] = useState([])

  const fetchData = useCallback(async () => {
    const res = await fetch(`http://localhost:4001/api.appmed/clientes/allfit`)
    const json = await res.json();
    setClientes(json);
  }, [setClientes])

  useEffect(() => {
    fetchData();
  }, [fetchData])

  return (
    <>
      <Box m={1}>
        <Grid container spacing={1} >
          <Grid item xs={4}>
            <Box ml={1} mt={1}>
              <TableContainer component={Paper} >
                <Table>
                  <TableBody>
                    {clientes?.map(cliente =>
                      <TableRow
                        key={cliente.id}
                        onClick={() => setClienteEdit(cliente)}
                      >
                        <TableCell component="th" scope="row">
                          <Box fontWeight={clienteEdit?.id === cliente.id ? "fontWeightBold" : ""}>
                            {cliente.nome}
                          </Box>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>
          <Grid item xs>
             <Box mx={1}>
              {clienteEdit && <ClienteData />}
            </Box> 
          </Grid>
        </Grid>
      </Box>
    </>
  )

  // const novocliente = {
  //   nome: "",
  //   nascimento: "",
  //   sexo: "feminino",
  //   peso: "",
  //   altura: "",
  //   endereco: "",
  //   telefone: "",
  //   celular: "",
  //   email: "",
  //   cns: "",
  //   cpf: "",
  //   mae: ""
  // }

  // const { setCliente } = useContext(ClienteContext)
  // // tem que ter o clientes, setClientes porque senào na hora que corrige o Formcontrol para reescrever ele não zera a lista
  // // fica com um clientesinitial
  // const [clientes, setClientes] = useState([])
  // const [clientesfiltrados, setClientesFiltrados] = useState([])

  // const fetchData = useCallback(async () => {
  //   const res = await fetch(`http://localhost:4001/api.appmed/clientes/allfit`)
  //   const json = await res.json();
  //   setClientes(json);
  //   setClientesFiltrados(json)
  // }, [])

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData])

  // const clienteEdit = async (param) => {
  //   const res = await fetch(`http://localhost:4001/api.appmed/clientes/${param}`)
  //   const json = await res.json();
  //   setCliente(json);
  //   setPage('clienteupdate')
  // }

  // const clienteDel = async (param) => {
  //   fetch(`http://localhost:4001/api.appmed/clientes/${param}`, {
  //     method: 'delete',
  //   }).then(data => {
  //     if (data.ok) {
  //       setPage('clientemain')
  //       setCliente(null)
  //       fetchData()
  //     }
  //   })
  // }

  // const filterClientes = event => {

  //   let filtro = [...clientes].filter(w =>
  //     w.nome.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1 ||
  //     w.nascimento.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
  //   )
  //   if (filtro.length === 0) {
  //     filtro.push({
  //       id: 0,
  //       nome: "nenhum cliente encontrado"
  //     })
  //   }
  //   setClientesFiltrados(filtro)
  // }

  // return (
  //   <>

  //     <Container>
  //       <Grid container>
  //         <Grid item>
  //           <IconButton aria-label="add"
  //             onClick={() => {
  //               setCliente(novocliente)
  //               setPage('clienteinsert')
  //             }}
  //           >
  //             <PersonAddIcon />
  //           </IconButton>
  //         </Grid>
  //         <Grid item >
  //           <TextField
  //             id="standard-basic"
  //             label="Filtrar"
  //             onChange={filterClientes}
  //           />
  //         </Grid>
  //       </Grid>
  //     </Container>
  //     <Container>
  //       <TableContainer>
  //         <Table aria-label="simple table">
  //           <TableBody>
  //             {clientesfiltrados.map(cliente =>
  //               <TableRow key={cliente.id}>
  //                 <TableCell
  //                   component="th"
  //                   scope="row"
  //                   onClick={() => {
  //                     setCliente(cliente)
  //                     setPage('clientedetails')
  //                   }}
  //                 >
  //                   {cliente.nome}
  //                 </TableCell>
  //                 <TableCell align="right">{cliente.nascimento}</TableCell>
  //                 <TableCell align="right">{cliente.cpf}</TableCell>
  //                 <TableCell padding="checkbox">
  //                   <IconButton color="primary" aria-label="update"
  //                     onClick={() => clienteEdit(cliente.id)}
  //                   >
  //                     <EditIcon />
  //                   </IconButton>
  //                 </TableCell>
  //                 <TableCell padding="checkbox">
  //                   <IconButton aria-label="delete"
  //                     onClick={() => clienteDel(cliente.id)}
  //                   >
  //                     <DeleteIcon />
  //                   </IconButton>
  //                 </TableCell>
  //               </TableRow>
  //             )}
  //           </TableBody>
  //         </Table>
  //       </TableContainer>
  //     </Container>
  //   </>
  // )
}

export default ClienteMain