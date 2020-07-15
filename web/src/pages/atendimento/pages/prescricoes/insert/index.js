import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { ClienteContext, PageContext } from '../..';
import ApresentacaoSet from '../components/apresentacaoset';
//import PrescricaoData from "../components/prescricaodata";
import Lmedoses from '../components/lmedoses';
import MedicamentoSet from '../components/medicamentoset';
import PosologiaNaoPadraoSet from '../components/posologianaopadraoset';
import PosologiaSet from '../components/posologiaset';
import OutrasVariaveisSet from '../components/prescricaovarset';

export default function PrescricaoInsert() {

    const cliente = useContext(ClienteContext)
    const page = useContext(PageContext)

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
    const [redirect, setRedirect] = useState('')
    const [showStep, setStep] = useState(11);

    const handleNextStep = (paramPresc, paramStep) => () => {
        setPrescricao(paramPresc)
        setStep(paramStep)
    }

    useEffect(() => {
        if (showStep === 'lme') {
             // não sei se não vai ter que dar um useCalback
            page('main1')
            //setRedirect({ pathname: `/lmes/${cliente.id}/insert`, state: { cliente, prescricao } })
        }
    }, [cliente, prescricao, showStep, page])

    const handleSubmit = event => {

        event.preventDefault();
        fetch(`http://localhost:4001/api.appmed/prescricoes/${cliente.id}`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(prescricao)
        }).then(data => {
            if (data.ok) {
                page('prescricoes')
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
                        setStep(11)
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
                    {showStep === 11 && <MedicamentoSet prescricao={prescricao} passNextStep={handleNextStep} />}
                    {showStep === 21 && <ApresentacaoSet prescricao={prescricao} passNextStep={handleNextStep} />}
                    {showStep === 31 && <PosologiaSet prescricao={prescricao} passNextStep={handleNextStep} />}
                    {showStep === 32 && <PosologiaNaoPadraoSet prescricao={prescricao} passNextStep={handleNextStep} />}
                    {showStep === 41 && <OutrasVariaveisSet prescricao={prescricao} passNextStep={handleNextStep} />}
                    {showStep === 51 && <Lmedoses prescricao={prescricao} passNextStep={handleNextStep} />}
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
