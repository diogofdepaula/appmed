import React, { useState, useContext } from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import { PrescricaoMainContext, PageContext } from '../..';
import ApresentacaoSet from '../components/apresentacaoset';
import PosologiaSet from '../components/posologiaset';
import PosologiaNaoPadraoSet from '../components/posologianaopadraoset';
import OutrasVariaveisSet from '../components/prescricaovarset'
import Lmedoses from '../components/lmedoses'


export default function PrescricaoUpdate(props) {

    const setPage = useContext(PageContext)
    const { prescricaoMain, setPrescricaoMain } = useContext(PrescricaoMainContext)
    const [prescricao, setPrescricao] = useState(prescricaoMain)

    const [showStep, setStep] = useState(21);

    const handleNextStep = (paramPresc, paramStep) => () => {
        setPrescricao(paramPresc)
        setStep(paramStep)
    }

    const handleSubmit = event => {

        event.preventDefault();
        fetch(`http://localhost:4001/api.appmed/prescricoes/${prescricao.id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(prescricao)
        }).then(data => {
            if (data.ok) {
                setPrescricaoMain(null)
                setPage('prescricoes')
            }
        })
    }

    return (
        <div>
            <Container fluid className='mt-2'>
                <Button
                    variant="outline-primary"
                > Deixei por uma questão de estética </Button>
                <Button
                    className="ml-2"
                    variant="outline-success"
                    onClick={handleSubmit}
                > Submeter </Button>
            </Container>

            <Container className="mt-2">
                {/* <PrescricaoList prescricoes={prescricoes} /> */}
                <Card body>
                    {/* {showStep === 11 && <MedicamentoSet prescricao={prescricao} passNextStep={handleNextStep} />} */}
                    {showStep === 21 && <ApresentacaoSet prescricao={prescricao} passNextStep={handleNextStep} />} 
                    {showStep === 31 && <PosologiaSet prescricao={prescricao} passNextStep={handleNextStep} />}
                    {showStep === 32 && <PosologiaNaoPadraoSet prescricao={prescricao} passNextStep={handleNextStep} />}
                    {showStep === 41 && <OutrasVariaveisSet prescricao={prescricao} passNextStep={handleNextStep} passHowCalls={'update'}/>}
                    {showStep === 51 && <Lmedoses prescricao={prescricao} passNextStep={handleNextStep}  />}
                </Card>
            </Container>
        </div>
    )
}