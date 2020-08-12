import { Container, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React, { useCallback, useEffect, useState } from 'react';

export default function ClienteMain() {

  // tem que ter o clientes, setClientes porque senào na hora que corrige o Formcontrol para reescrever ele não zera a lista
  // fica com um clientesinitial
  const [clientes, setClientes] = useState([])
  const [clientesfiltrados, setClientesFiltrados] = useState([])

  const fetchData = useCallback(async () => {
    const res = await fetch(`http://localhost:4001/api.appmed/clientes`)
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
      <Container >
        <Grid flexDirection="row" justifyContent="center">
          <AddIcon onClick={() => {
            alert("This works on every component!");
          }} />
          <TextField
            
            id="standard-basic"
            label="Filtrar"
            onChange={filterClientes}
          />
        </Grid>
      </Container>
      <Container>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell align="right">Data de Nascimento</TableCell>
                <TableCell align="right">CPF</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clientesfiltrados.map(cliente =>
                <TableRow
                  key={cliente.id}
                // onClick={() => {
                //   setCliente(cliente)
                //   setValidacao(true)
                // }}
                >
                  <TableCell component="th" scope="row">
                    {cliente.nome}
                  </TableCell>
                  <TableCell align="right">{cliente.nascimento}</TableCell>
                  <TableCell align="right">{cliente.cpf}</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  )
}

// class Main extends Component {

//   state = {
//     clientes: [],
//   }

//   async componentDidMount() {
//     await fetch('http://localhost:4001/api.appmed/clientes')
//       .then(response => response.json())
//       .then(response => { this.setState({ clientes: response }) })
//       .catch(err => console.log(err))
//   }

//   render() {
//     const { clientes } = this.state

//     return (
//       <div>
//         <Nav variant="pills" defaultActiveKey="/insertcliente" className="mt-2">
//           <Nav.Item className="mr-2 mb-2">
//             <Nav.Link href="/insertcliente">Novo cliente</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Form inline>
//               <FormControl type="text" placeholder="Clientes" className="mr-sm-2" />
//               <Button variant="outline-success">Procurar</Button>
//             </Form>
//           </Nav.Item>
//         </Nav>

//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Nome</th>
//               <th>DN</th>
//               <th>Detalhes</th>
//             </tr>
//           </thead>
//           <tbody>
//             {clientes.map(cliente =>
//               <tr key={cliente.id}>
//                 <td xs={1} md={1} sm={1} >{cliente.id}</td>
//                 <td>{cliente.nome}</td>
//                 <td>{cliente.nascimento}</td>
//                 <td><p><Link to={`/clientes/${cliente.id}`}>Detalhes</Link></p></td>
//               </tr>
//             )}
//           </tbody>
//         </Table>
//       </div>
//     );
//   }
// }

// export default Main;