import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ClienteHeader from '../../../../atendimento/component/clienteheader';
import ListagemPrescricao from '../components/prescricaolist';

export default function Main(props) {

    const cliente = props.location.state.cliente // não usei o useState, pois não tem mudança do cliente
    const [prescricoes, setprescricoes] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4001/api.appmed/prescricoes/${cliente.id}`)
            .then(response => response.json())
            .then(response => setprescricoes(response))
            .catch(err => console.log(err))
    }, [cliente])

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
                <ListagemPrescricao prescricoes={prescricoes} />
            </Container>
        </div>
    )
}


    // const [prescricoes, setprescricoes] = useState([{
    //     id: '',
    //     continuo: '',
    //     imprimirorientacoes: '',
    //     emuso: '',
    //     usoposologiapadrao: '',
    //     orientacoes: '',
    //     posologianaopadrao: '',
    //     quantidadenaopadrao: '',
    //     formanaopadrao: '',
    //     lmemes1: '',
    //     lmemes2: '',
    //     lmemes3: '',
    //     inicio: '',
    //     termino: '',
    //     motivotermico: '',
    //     clienteId: '',
    //     lmeId: '',
    //     medicamentoId: '',
    //     apresentacoId: '',
    //     posologiaId: '',
    //     medicamento: {
    //         farmaco: '',
    //         orientacoes: '',
    //     },
    //     apresentaco: { // tem que ficar como apresentaco mesmo porque o sequelize nomeia assim
    //         descricao: '',
    //         uso: '',
    //     },
    //     posologia: {
    //         posologia: '',
    //         quantidade: '',
    //         forma: ''
    //     }
    // }])