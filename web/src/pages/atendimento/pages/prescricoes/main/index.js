import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ClienteContext } from '../..';
import PrescricaoList from '../components/prescricaolist';

export default function Main(props) {

    const cliente = useContext(ClienteContext)
    const [prescricoes, setPrescricoes] = useState([])

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