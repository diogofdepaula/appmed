import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Jumbotron, Button } from 'react-bootstrap';

class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cliente: {
            },
            redirect: false
        }
        this.handleDeleteCliente = this.handleDeleteCliente.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params

        fetch(`http://localhost:4001/api.appmed/clientes/${id}`)
            .then(response => response.json())
            .then(response => { this.setState({ cliente: response }) })
            .catch(err => console.log(err))
    }

    handleDeleteCliente = param => e => {

        e.preventDefault();

        fetch(`http://localhost:4001/api.appmed/clientes/${param}`, {
            method: 'delete'
        }).then(data => {
            if (data.ok) {
                this.setState({ redirect: true })
            }
        })


    }

    render() {
        const { redirect } = this.state;

        const { cliente } = this.state

        if (redirect) {
            return <Redirect to="/medicamentos" />
        } else {
            return (
                <div>
                    <Jumbotron>
                        <h2>{cliente.nome}</h2>
                        <p>Data de Nascimento: {cliente.nascimento}</p>
                        {cliente.sexo
                            ? <p>Sexo: Masculino</p>
                            : <p>Sexo: Feminino</p>
                        }
                        <p>Peso: {cliente.peso} Kg</p>
                        <p>Altura: {cliente.altura}cm</p>
                        <p>Endereço: {cliente.endereco}</p>
                        <p>Tefelone: {cliente.telefone}</p>
                        <p>Celular: {cliente.celular}</p>
                        <p>E-mail: {cliente.email}</p>
                        <p>CNS: {cliente.cns}</p>
                        <p>CPF: {cliente.cpf}</p>
                        <p>Nome da mãe: {cliente.mae}</p>
                        <Link to='/clientes' className="ml-2">
                            <Button variant="primary">Voltar</Button>
                        </Link>
                        <Link to={`/updatecliente/${cliente.id}`} className="ml-2">
                            <Button variant="primary">Editar</Button>
                        </Link>
                        <Button
                            className="ml-2"
                            variant="primary"
                            onClick={this.handleDeleteCliente(`${cliente.id}`)}
                        >Excluir
                    </Button>
                    </Jumbotron>
                </div>
            );
        }
    }
}

export default Details;