import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField } from '@material-ui/core';
import { useCallback, useContext, useEffect, useState } from 'react';
import { MedicamentosContext } from '..';
import MedicamentoData from '../components/medicamentodata';

const MedicamentoMain = () => {

  const { medicamentoOnDuty, setMedicamentoOnDuty } = useContext(MedicamentosContext)
  const [medicamentos, setMedicamentos] = useState([])
  const [medicamentosFiltrados, setMedicamentosFiltrados] = useState([])

  const fetchData = useCallback(async () => {
    const res = await fetch(`http://localhost:4001/api.appmed/medicamentos/short`)
    const json = await res.json();
    setMedicamentos(json);
    setMedicamentosFiltrados(json)
  }, [setMedicamentos])

  useEffect(() => {
    fetchData();
  }, [fetchData])

  const filterMedicamentos = event => {

    let filtro = [...medicamentos].filter(w =>
      w.farmaco.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1 ||
      w.abreviatura.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    )
    if (filtro.length === 0) {
      filtro.push({
        id: 0,
        nome: "nenhum medicamento encontrado"
      })
    }
    setMedicamentosFiltrados(filtro)
  }

  return (
    <>
      <Box m={1}>
        <Grid container spacing={1}>
          <Grid container item xs={4} direction="column" justify="flex-start" alignItems="stretch">
            <Grid item>
              <Box m={2}>
                <TextField
                  fullWidth
                  label="Filtrar"
                  variant="outlined"
                  onChange={filterMedicamentos}
                />
              </Box>
            </Grid>
            <Grid item>
              <Box ml={1} mt={1}>
                <TableContainer component={Paper} >
                  <Table>
                    <TableBody>
                      {medicamentosFiltrados?.map(medicamento =>
                        <TableRow
                          key={medicamento.id}
                          onClick={() => setMedicamentoOnDuty(medicamento)}
                        >
                          <TableCell component="th" scope="row">
                            <Box fontWeight={medicamentoOnDuty?.id === medicamento.id ? "fontWeightBold" : ""}>
                              {medicamento.farmaco}
                            </Box>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs>
            <Box mx={1}>
              {medicamentoOnDuty && <MedicamentoData />}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default MedicamentoMain


// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { Table, Nav, Form, FormControl, Button } from 'react-bootstrap';

// class Main extends Component {

//   state = {
//     medicamentos: [],
//   }

//   componentDidMount() {
//       fetch('http://localhost:4001/api.appmed/medicamentos')
//       .then(response => response.json())
//       .then(response => { this.setState({ medicamentos: response }) })
//       .catch(err => console.log(err))
//   }

//   render() {
//     const { medicamentos } = this.state

//     return (
//       <div>
//         <Nav variant="pills" defaultActiveKey="/insertmedicamento" className="mt-2">
//           <Nav.Item className="mr-2 mb-2">
//             <Nav.Link href="/insertmedicamento">Novo Medicamento</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Form inline>
//               <FormControl type="text" placeholder="Medicamentos" className="mr-sm-2" />
//               <Button variant="outline-success">Procurar</Button>
//             </Form>
//           </Nav.Item>
//         </Nav>

//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Nome</th>
//               <th>Detalhes</th>
//             </tr>
//           </thead>
//           <tbody>
//             {medicamentos.map(medicamento =>
//               <tr key={medicamento.id}>
//                 <td xs={1} md={1} sm={1} >{medicamento.id}</td>
//                 <td>{medicamento.farmaco}</td>
//                 <td><p><Link to={`/medicamentos/${medicamento.id}`}>Escolher</Link></p></td>
//               </tr>
//             )}
//           </tbody>
//         </Table>
//       </div>
//     );
//   }
// }

// export default Main;