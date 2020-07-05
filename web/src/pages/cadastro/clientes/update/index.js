import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Form, InputGroup, Row, Col, Button } from 'react-bootstrap';


class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cliente: {
                nome: "",
                nascimento: "",
                sexo: "",
                peso: "",
                altura: "",
                endereco: "",
                telefone: "",
                celular: "",
                email: "",
                cns: "",
                cpf: "",
                mae: ""
            },
            redirect: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params

        fetch(`http://localhost:4001/api.appmed/clientes/${id}`)
            .then(response => response.json())
            .then(response => { this.setState({ cliente: response }) })
            .catch(err => console.log(err))
    }

    handleSubmit = event => {

        event.preventDefault();

        const { id } = this.props.match.params

        fetch(`http://localhost:4001/api.appmed/clientes/${id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.cliente)
        })
            .then(data => {
                if (data.ok) {
                    this.setState({ redirect: true })
                }
            })
    }

    handleChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState(prevState => ({
            cliente: { ...prevState.cliente, [name]: value }
        }))

    }


    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/clientes" />
        } else {
            return (
                <div>
                    <Form>
                        <h4>Cadastro de Clientes</h4>
                        {JSON.stringify(this.state.cliente)}
                        <br />
                        <br />
                        <div>
                            <Row>
                                <Col sm={8}>
                                    <Form.Group>
                                        <Form.Label>Nome completo</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="nome"
                                            placeholder="Nome completo"
                                            value={this.state.cliente.nome}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col sm={4}>
                                    <Form.Group>
                                        <Form.Label>Sexo</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Radio
                                                name="sexo"
                                                value="false"
                                                checked={this.state.cliente.sexo === false}
                                                onChange={this.handleChange}
                                            />
                                            <Form.Label className="mr-2 ml-1">Feminino</Form.Label>
                                            <InputGroup.Radio
                                                name="sexo"
                                                value="true"
                                                checked={this.state.cliente.sexo === true}
                                                onChange={this.handleChange}
                                            />
                                            <Form.Label className="mr-2 ml-1">Masculino</Form.Label>
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Data de Nascimento</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="nascimento"
                                            value={this.state.cliente.nascimento}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Peso</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="peso"
                                            placeholder="Peso (cm)"
                                            value={this.state.cliente.peso}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Altura</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="altura"
                                            placeholder="Altura (Kg)"
                                            value={this.state.cliente.altura}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Telefone</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="telefone"
                                            placeholder="Telefone"
                                            value={this.state.cliente.telefone}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Celular</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="celular"
                                            placeholder="Celular"
                                            value={this.state.cliente.celular}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>e-mail</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="email"
                                            placeholder="e-mail"
                                            value={this.state.cliente.email}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>CNS</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="cns"
                                            placeholder="CNS"
                                            value={this.state.cliente.cns}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>CPF</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="cpf"
                                            placeholder="CPF"
                                            value={this.state.cliente.cpf}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Nome da mãe</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="mae"
                                            placeholder="Nome da mãe"
                                            value={this.state.cliente.mae}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group>
                                <Form.Label>Endereço</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="endereco"
                                    placeholder="Endereço"
                                    value={this.state.cliente.endereco}
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <Row>
                                <Button
                                    variant="primary"
                                    type="submit"
                                    onClick={this.handleSubmit}
                                >Atualizar
                            </Button>
                                <Link to='/clientes'>
                                    <Button type="button" className="ml-2">Cancelar</Button>
                                </Link>
                            </Row>
                        </div>

                    </Form>
                </div>
            );
        }
    }
}

export default Update;