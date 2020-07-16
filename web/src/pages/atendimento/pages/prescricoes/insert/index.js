import React, { useContext, useEffect, useState, createContext } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { ClienteContext, PageContext, PrescricaoMainContext } from '../..';
import ApresentacaoSet from '../components/apresentacaoset';
//import PrescricaoData from "../components/prescricaodata";
import Lmedoses from '../components/lmedoses';
import MedicamentoSet from '../components/medicamentoset';
import PosologiaNaoPadraoSet from '../components/posologianaopadraoset';
import PosologiaSet from '../components/posologiaset';
import OutrasVariaveisSet from '../components/prescricaovarset';

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
    const [showStep, setStep] = useState(11);

    const handleNextStep = (paramPresc, paramStep) => () => {
        setPrescricao(paramPresc)
        setStep(paramStep)
    }

    useEffect(() => {
        if (showStep === 'lme') {
            setPrescricaoMain(prescricao)
            setPage('lmeinsert')
        }
    }, [showStep, setPrescricaoMain, prescricao, setPage])

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
                    <PrescricaoContext.Provider value={{ prescricaoContext: prescricao, setPrescricaoContext: setPrescricao, setStepContext: setStep }} >
                        {showStep === 11 && <MedicamentoSet />}
                        {showStep === 21 && <ApresentacaoSet />}
                        {showStep === 31 && <PosologiaSet prescricao={prescricao} passNextStep={handleNextStep} />}
                        {showStep === 32 && <PosologiaNaoPadraoSet prescricao={prescricao} passNextStep={handleNextStep} />}
                        {showStep === 41 && <OutrasVariaveisSet prescricao={prescricao} passNextStep={handleNextStep} passHowCalls={'insert'} />}
                        {showStep === 51 && <Lmedoses prescricao={prescricao} passNextStep={handleNextStep} />}
                    </PrescricaoContext.Provider>
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
