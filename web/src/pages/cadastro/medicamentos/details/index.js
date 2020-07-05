import React, { useState, useEffect } from 'react'
import { Redirect, Link } from 'react-router-dom';
import { Jumbotron, Button, Row, Table } from 'react-bootstrap';

function Details(props) {

    const [medicamento, setmedicamento] = useState({})
    const [redirect, setredirect] = useState(false)

    useEffect(() => {

        const { id } = props.match.params

        fetch(`http://localhost:4001/api.appmed/medicamentos/${id}`)
            .then(response => response.json())
            .then(response => setmedicamento(response))
            .catch(err => console.log(err))

    }, [props])

    const handleDeleteMedicamento = param => e => {

        e.preventDefault();

        fetch(`http://localhost:4001/api.appmed/medicamentos/${param}`, {
            method: 'delete'
        }).then(data => {
            if (data.ok) {
                setredirect(true)
            }
        })
    }

    if (redirect) {
        return <Redirect to="/medicamentos" />
    } else {
        return (
            <div>
                <Jumbotron>
                    <h2>{medicamento.farmaco}</h2>
                    {medicamento.lme
                        ? <p>LME: verdadeiro</p>
                        : <p>LME: falso</p>
                    }
                    {medicamento.controlado
                        ? <p>Controlado: verdadeiro</p>
                        : <p>Controlado: falso</p>
                    }
                    {medicamento.favorito
                        ? <p>Favorito: verdadeiro</p>
                        : <p>Favorito: falso</p>
                    }
                    <p>Abreviatura: {medicamento.abreviatura}</p>
                    <p>Orientacoes: {medicamento.orientacoes}</p>
                    <p>Classe: {medicamento.classe}</p>

                    <h5>Nomes comerciais</h5>
                    <Row>
                        <Table bordered hover size="sm">
                            <tbody>
                                {medicamento.nomescomerciais && medicamento.nomescomerciais.map((nc, index) =>
                                    <tr key={index}>
                                        <td xs={1} md={1} sm={1} >{nc.nomefantasia}</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </Row>

                    <h5>Apresentação</h5>
                    <Row>
                        <Table bordered hover size="sm">
                            <tbody>
                                {medicamento.apresentacoes && medicamento.apresentacoes.map((ap, index) =>
                                    <tr key={index}>
                                        <td xs={1} md={1} sm={1} >{ap.descricao}</td>
                                        <td>{ap.uso}</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </Row>
                    <h5>Posologias</h5>
                    <Row>
                        <Table bordered hover size="sm">
                            <tbody>
                                {medicamento.posologias && medicamento.posologias.map((pp, index) =>
                                    <tr key={index}>
                                        <td xs={1} md={1} sm={1} >{pp.posologia}</td>
                                        <td>{pp.quantidade}</td>
                                        <td>{pp.forma}</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </Row>

                    <Link to='/medicamentos' className="ml-2">
                        <Button variant="primary">Voltar</Button>
                    </Link>
                    <Link to={`/updatemedicamento/${medicamento.id}`} className="ml-2">
                        <Button variant="primary">Editar</Button>
                    </Link>
                    <Button
                        className="ml-2"
                        variant="primary"
                        onClick={handleDeleteMedicamento(`${medicamento.id}`)}
                    >Excluir
                    </Button>
                </Jumbotron>
            </div>
        );
    }
}

export default Details;