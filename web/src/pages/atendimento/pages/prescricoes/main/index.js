import React, { useEffect, useState, useCallback } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ClienteHeader from '../../../../atendimento/component/clienteheader';
import PrescricaoList from '../components/prescricaolist';

export default function Main(props) {

    const cliente = props.location.state.cliente // não usei o useState, pois não tem mudança do cliente
    const [prescricoes, setPrescricoes] = useState([])

    // useEffect(() => {
    //     fetch(`http://localhost:4001/api.appmed/prescricoes/${cliente.id}`)
    //         .then(response => response.json())
    //         .then(response => setPrescricoes(response))
    //         .catch(err => console.log(err))
    // }, [cliente])

    const fetchData = useCallback(async () => {
        const res = await fetch(`http://localhost:4001/api.appmed/prescricoes/${cliente.id}`)
        const json = await res.json();
        setPrescricoes(json);
    }, [cliente])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return (
        <div>
            <ClienteHeader cliente={cliente} />

            {/* NAVBAR DA PRESCRICAO */}
            <Container fluid className="mt-2">
                <Link to={{ pathname: `/prescricoes/${cliente.id}/insert`, state: { cliente } }}>
                    <Button variant="outline-primary" className="ml-2">Nova Prescrição</Button>
                </Link>
                <Button
                    variant="outline-primary"
                    className="ml-2"
                    // onClick={handleButtonEdicaoPrescricao}
                >Editar Prescricao
                </Button>
                <Button variant="outline-primary" className="ml-2">
                    XXXXXXX
                </Button>
                <Button variant="outline-primary" className="ml-2">
                    XXXXXXX
                </Button>
                <Button variant="outline-primary" className="ml-2">
                    XXXXXXX
                </Button>
            </Container>

            {/* CONTEUDO */}
            <Container>
                <PrescricaoList prescricoes={prescricoes} />
            </Container>
        </div>
    )
}