import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, Nav, Form, FormControl, Button } from 'react-bootstrap';

class Main extends Component {

  state = {
    medicamentos: [],
  }

  componentDidMount() {
      fetch('http://localhost:4001/api.appmed/medicamentos')
      .then(response => response.json())
      .then(response => { this.setState({ medicamentos: response }) })
      .catch(err => console.log(err))
  }

  render() {
    const { medicamentos } = this.state

    return (
      <div>
        <Nav variant="pills" defaultActiveKey="/insertmedicamento" className="mt-2">
          <Nav.Item className="mr-2 mb-2">
            <Nav.Link href="/insertmedicamento">Novo Medicamento</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Form inline>
              <FormControl type="text" placeholder="Medicamentos" className="mr-sm-2" />
              <Button variant="outline-success">Procurar</Button>
            </Form>
          </Nav.Item>
        </Nav>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Detalhes</th>
            </tr>
          </thead>
          <tbody>
            {medicamentos.map(medicamento =>
              <tr key={medicamento.id}>
                <td xs={1} md={1} sm={1} >{medicamento.id}</td>
                <td>{medicamento.farmaco}</td>
                <td><p><Link to={`/medicamentos/${medicamento.id}`}>Escolher</Link></p></td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Main;