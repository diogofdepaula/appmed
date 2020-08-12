import React, { useState, useContext } from 'react';
import { PageContext } from '..';
import SaveIcon from '@material-ui/icons/Save';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { ButtonGroup, IconButton, Container } from '@material-ui/core';
import ClienteForm from '../components/clienteform';

export default function ClienteInsert() {

    const setPage = useContext(PageContext)
    const [cliente, setCliente] = useState({
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
    })

    const handleSubmit = event => {
        event.preventDefault();
        fetch(`http://localhost:4001/api.appmed/clientes`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cliente)
        }).then(data => {
            if (data.ok) {
                setPage('clientemain')
            }
        })
    }

    const handleChange = event => {
        setCliente({ ...cliente, [event.target.name]: event.target.value })
    }
    return (
        <>
            <ButtonGroup>
                <IconButton>
                    <ArrowBackIcon onClick={() => {
                        setCliente(null)
                        setPage('clientemain')
                    }} />
                </IconButton>
                <IconButton>
                    <SaveIcon onClick={handleSubmit()} />
                </IconButton>
            </ButtonGroup>
            <Container>
                <ClienteForm cliente={cliente} setCliente={setCliente} />
            </Container>
        </>
    )
}

//             return (
//                 <div>
//                     <Form>
//                         <h4>Cadastro de Clientes</h4>
//                         {JSON.stringify(this.state.cliente)}
//                         <br />
//                         <br />
//                         <div>
//                             <Row>
//                                 <Col sm={8}>
//                                     <Form.Group>
//                                         <Form.Label>Nome completo</Form.Label>
//                                         <Form.Control
//                                             type="text"
//                                             name="nome"
//                                             placeholder="Nome completo"
//                                             value={this.state.cliente.nome}
//                                             onChange={this.handleChange}
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                                 <Col sm={4}>
//                                     <Form.Group>
//                                         <Form.Label>Sexo</Form.Label>
//                                         <InputGroup>
//                                             <InputGroup.Radio
//                                                 name="sexo"
//                                                 value="false"
//                                                 // value={this.state.cliente.sexo}
//                                                 onChange={this.handleChange}
//                                             />
//                                             <Form.Label className="mr-2 ml-1">Feminino</Form.Label>
//                                             <InputGroup.Radio
//                                                 name="sexo"
//                                                 value="true"
//                                                 //value={this.state.cliente.sexo}
//                                                 onChange={this.handleChange}
//                                             />
//                                             <Form.Label className="mr-2 ml-1">Masculino</Form.Label>
//                                         </InputGroup>
//                                     </Form.Group>
//                                 </Col>
//                             </Row>
//                             <Row>
//                                 <Col>
//                                     <Form.Group>
//                                         <Form.Label>Data de Nascimento</Form.Label>
//                                         <Form.Control
//                                             type="date"
//                                             name="nascimento"
//                                             value={this.state.cliente.nascimento}
//                                             onChange={this.handleChange}
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                                 <Col>
//                                     <Form.Group>
//                                         <Form.Label>Peso</Form.Label>
//                                         <Form.Control
//                                             type="text"
//                                             name="peso"
//                                             placeholder="Peso (cm)"
//                                             value={this.state.cliente.peso}
//                                             onChange={this.handleChange}
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                                 <Col>
//                                     <Form.Group>
//                                         <Form.Label>Altura</Form.Label>
//                                         <Form.Control
//                                             type="text"
//                                             name="altura"
//                                             placeholder="Altura (Kg)"
//                                             value={this.state.cliente.altura}
//                                             onChange={this.handleChange}
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                             </Row>
//                             <Row>
//                                 <Col>
//                                     <Form.Group>
//                                         <Form.Label>Telefone</Form.Label>
//                                         <Form.Control
//                                             type="text"
//                                             name="telefone"
//                                             placeholder="Telefone"
//                                             value={this.state.cliente.telefone}
//                                             onChange={this.handleChange}
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                                 <Col>
//                                     <Form.Group>
//                                         <Form.Label>Celular</Form.Label>
//                                         <Form.Control
//                                             type="text"
//                                             name="celular"
//                                             placeholder="Celular"
//                                             value={this.state.cliente.celular}
//                                             onChange={this.handleChange}
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                                 <Col>
//                                     <Form.Group>
//                                         <Form.Label>e-mail</Form.Label>
//                                         <Form.Control
//                                             type="text"
//                                             name="email"
//                                             placeholder="e-mail"
//                                             value={this.state.cliente.email}
//                                             onChange={this.handleChange}
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                             </Row>
//                             <Row>
//                                 <Col>
//                                     <Form.Group>
//                                         <Form.Label>CNS</Form.Label>
//                                         <Form.Control
//                                             type="text"
//                                             name="cns"
//                                             placeholder="CNS"
//                                             value={this.state.cliente.cns}
//                                             onChange={this.handleChange}
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                                 <Col>
//                                     <Form.Group>
//                                         <Form.Label>CPF</Form.Label>
//                                         <Form.Control
//                                             type="text"
//                                             name="cpf"
//                                             placeholder="CPF"
//                                             value={this.state.cliente.cpf}
//                                             onChange={this.handleChange}
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                                 <Col>
//                                     <Form.Group>
//                                         <Form.Label>Nome da mãe</Form.Label>
//                                         <Form.Control
//                                             type="text"
//                                             name="mae"
//                                             placeholder="Nome da mãe"
//                                             value={this.state.cliente.mae}
//                                             onChange={this.handleChange}
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                             </Row>
//                             <Form.Group>
//                                 <Form.Label>Endereço</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     name="endereco"
//                                     placeholder="Endereço"
//                                     value={this.state.cliente.endereco}
//                                     onChange={this.handleChange}
//                                 />
//                             </Form.Group>
//                             <Row>
//                                 <Button
//                                     variant="primary"
//                                     type="submit"
//                                     onClick={this.handleSubmit}
//                                 >Salvar novo
//                             </Button>
//                                 <Link to='/clientes'>
//                                     <Button type="button" className="ml-2">Cancelar</Button>
//                                 </Link>
//                             </Row>
//                         </div>

//                     </Form>
//                 </div>
//             );
//         }
//     }


// }

//     export default Insert;