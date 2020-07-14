import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom';
import { Table, Container, Form, FormControl } from 'react-bootstrap';

function Choose(props) {

    const [clientesinicial, setclientesinicial] = useState([])
    const [clientes, setclientes] = useState([])
    const [redirect, ] = useState(false)
    const [cliente, ] = useState()

    useEffect(() => {
        fetch('http://localhost:4001/api.appmed/clientes')
            .then(response => response.json())
            .then(response => {
                setclientes(response)
                setclientesinicial(response)
            })
            .catch(err => console.log(err))
    }, [])

    const filterClientes = event => {
        
        let filteredClientes = clientesinicial.filter(w =>
            w.nome.toLowerCase().indexOf(event.target.value) !== -1 ||
            w.nascimento.toLowerCase().indexOf(event.target.value) !== -1 ||
            w.cpf.toLowerCase().indexOf(event.target.value) !== -1
        )
        setclientes(filteredClientes)
    }

    // const rowClick = param => () => {
    //     setcliente(param.cliente)
    //     return setredirect(true)
    // }

    // const setpage = useCallback(
    //     props.passNextStep(prescricao, 0),
    //     [prescricao, props]
    // )

    // useEffect(() => {
    //     if (validacao){
    //         sendNextStep()
    //     }
    // }, [validacao, sendNextStep])

    if (redirect) {
        return <Redirect to={{ pathname: `/atendimento/main/${cliente.id}`, state: { cliente }}} />  // quando for um <Redirect tem que passar o props dentro do to=
    } else {
        return (
            <div>
                <Container>
                    <Form xs={2} md={4} lg={6} className="mt-2 mb-2" >
                        <FormControl
                            type="text"
                            placeholder="Filtrar por nome do cliente, data de nascimento ou CPF"
                            className="mr-1"
                            onChange={filterClientes}
                        />
                    </Form>

                </Container>

                <Container>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>DN</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map(cliente =>
                                <tr
                                    key={cliente.id}
                                    onClick={
                                    //    rowClick({ cliente })
                                        props.passCliente(cliente)
                                    }
                                >
                                    <td xs={1} md={1} sm={1} >{cliente.id}</td>
                                    <td >{cliente.nome}</td>
                                    <td>{cliente.nascimento}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default Choose;