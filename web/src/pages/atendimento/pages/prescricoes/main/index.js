import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import { ClienteContext } from '../..';
import PrescricaoList from '../components/prescricaolist';

export default function Main() {

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

    const [page, setPage] = useState(1)
    const [buttons, setButtons] = useState(true)

    const indices = [
        ['nova', 'Nova Prescrição'],
        ['editar', 'Editar Prescricao'],
        ['xxxxxxxxxxx', 'XXXXXX'],
        ['yyyyyyy', 'YYYYYYY'],
        ['zzzzzzzzzz', 'ZZZZZZ'],
    ]

    return (
        <div>
            {buttons &&
                < Container fluid className="mt-2">
                    {indices.map(x =>
                        <Button
                            key={x[0]}
                            variant="outline-primary"
                            className="ml-2"
                            onClick={() => {
                                setPage(x[0])
                                setButtons(false)
                            }}
                        >{x[1]}
                        </Button>
                    )}
                </Container>
            }
            <Container>
                <PrescricaoList prescricoes={prescricoes} />
            </Container>
        </div>
    )
}