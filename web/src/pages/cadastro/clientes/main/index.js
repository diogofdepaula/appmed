import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, Nav, Form, FormControl, Button } from 'react-bootstrap';

class Main extends Component {

  state = {
    clientes: [],
  }

  async componentDidMount() {
    await fetch('http://localhost:4001/api.appmed/clientes')
      .then(response => response.json())
      .then(response => { this.setState({ clientes: response }) })
      .catch(err => console.log(err))
  }

  render() {
    const { clientes } = this.state

    return (
      <div>
        <Nav variant="pills" defaultActiveKey="/insertcliente" className="mt-2">
          <Nav.Item className="mr-2 mb-2">
            <Nav.Link href="/insertcliente">Novo cliente</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Form inline>
              <FormControl type="text" placeholder="Clientes" className="mr-sm-2" />
              <Button variant="outline-success">Procurar</Button>
            </Form>
          </Nav.Item>
        </Nav>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>DN</th>
              <th>Detalhes</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(cliente =>
              <tr key={cliente.id}>
                <td xs={1} md={1} sm={1} >{cliente.id}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.nascimento}</td>
                <td><p><Link to={`/clientes/${cliente.id}`}>Detalhes</Link></p></td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Main;