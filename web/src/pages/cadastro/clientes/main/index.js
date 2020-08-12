import React, { useState, useCallback, useEffect } from 'react';
import { Container, List, ListItem, ListItemIcon, ListItemText, TextField } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';

export default function ClienteMain() {

  const [clientes, setClientes] = useState([])

  const fetchData = useCallback(async () => {
    const res = await fetch(`http://localhost:4001/api.appmed/clientes`)
    const json = await res.json();
    setClientes(json);
  }, [])

  useEffect(() => {
    fetchData();
  }, [fetchData])

  return (
    <>
      <Container fixed>
        <TextField label="filtro pelo nome" variant="outlined"/>
        <List>
          {clientes.map(cliente =>
            <ListItem button key={cliente.id}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={cliente.nome} />
            </ListItem>



            //               <tr >
            //                 <td xs={1} md={1} sm={1} >{cliente.id}</td>
            //                 <td>{cliente.nome}</td>
            //                 <td>{cliente.nascimento}</td>
            //                 <td><p><Link to={`/clientes/${cliente.id}`}>Detalhes</Link></p></td>
            //               </tr>
          )}

        </List>
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