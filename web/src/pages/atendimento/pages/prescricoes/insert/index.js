import React, { createContext, useContext, useState, useCallback } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { ClienteContext, PageContext, PrescricaoMainContext } from '../..';
import PrescricaoEditor from '../editor'

export const PrescricaoContext = createContext(null)

export default function PrescricaoInsert(props) {

    const cliente = useContext(ClienteContext)
    const setPage = useContext(PageContext)
    const { setPrescricaoMain } = useContext(PrescricaoMainContext)

    const initialPrescricao = {
        continuo: true,
        imprimirorientacoes: false,
        emuso: true,
        orientacoes: '',
        usoposologiapadrao: true,
        posologianaopadrao: '',
        quantidadenaopadrao: '',
        formanaopadrao: '',
        lmemes1: '',
        lmemes2: '',
        lmemes3: '',
        lmemes4: '',
        lmemes5: '',
        lmemes6: '',
        inicio: new Date().toISOString().slice(0, 10), //"yyyy-MM-dd"
        termino: null,
        motivotermico: '',
        clienteId: cliente.id,
        lmeId: null,
        medicamentoId: '',
        apresentacoId: '',
        posologiaId: ''
    }

    const [prescricao, setPrescricao] = useState(initialPrescricao)
    const step = 11

    const backPrescricao = useCallback((param) => {
        setPrescricao(param)

        //Manda para a LME
        if (prescricao.lmemes1 !== '') {
            setPrescricaoMain(prescricao)
            setPage('lmeinsert')            
        }
    }, [prescricao, setPrescricaoMain, setPage])

    const handleSubmit = event => {

        event.preventDefault();
        fetch(`http://localhost:4001/api.appmed/prescricoes`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(prescricao)
        }).then(data => {
            if (data.ok) {
                setPage('prescricoes')
            }
        })
    }

    return (
        <div>
            <Container fluid className='mt-2'>
                <Button
                    variant="outline-primary"
                    onClick={() => {
                        setPrescricao(initialPrescricao)
                        // setMedicamento(initialMedicamento)
                        // setValidacao(false)
                        // setStep(11)
                    }}
                > Escolhe outro Medicamento </Button>
                <Button
                    className="ml-2"
                    variant="outline-success"
                    onClick={handleSubmit}
                > Submeter </Button>
            </Container>
            <Container className="mt-2">
                <Card body>
                    <PrescricaoEditor prescricao={prescricao} sendPrescricao={backPrescricao} step={step} />
                </Card>
            </Container>
            <Container className="mt-2">
                {/* <Card body>
                        <PrescricaoData prescricao={prescricao} />
                    </Card> */}
            </Container>
        </div>
    )
}
