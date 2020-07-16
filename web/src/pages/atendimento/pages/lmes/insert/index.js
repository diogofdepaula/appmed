import React, { useContext, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { ClienteContext, PageContext, PrescricaoMainContext } from '../..';
import CID10List from '../../../../cadastro/cid10/components/cid10list';
import ClienteHeader from '../../../component/clienteheader';
import LMEForkSet from '../components/lmeforkset';
import LMEVarSet from '../components/lmevarset';
import RelatorioVarSet from '../relatorio/relatoriovarset';

export default function InsertLME() {

    const cliente = useContext(ClienteContext)
    const page = useContext(PageContext)
    const { prescricaoMain } = useContext(PrescricaoMainContext)

    const initialLME = {
        cid10: '',
        diagnostico: '',
        anamnese: '',
        tratamentoprevio: '',
        tratamentopreviotexto: '',
        atestadocapacidade: '',
        preenchidopor: '',
        preenchidoporCPF: '',
        raca: '',
        clienteId: cliente.id,
        prescricoes: prescricaoMain,
        relatorio: null,
    }

    const [lme, setLme] = useState(initialLME)
    const [showStep, setStep] = useState(11);

    const handleNextStep = (paramLme, paramStep) => () => {
        setLme(paramLme)
        setStep(paramStep)
    }

    const handleSubmit = event => {

        event.preventDefault();

        fetch(`http://localhost:4001/api.appmed/lmes/${cliente.id}`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(lme)
        }).then(data => {
            if (data.ok) {
                page('prescricoes')
                //setRedirect({ pathname: `/prescricoes/${cliente.id}`, state: { cliente } })
            }
        })
    }

    return (
        <div>
            <ClienteHeader cliente={cliente} />
            <Container fluid >
                <Button
                    variant="outline-primary"
                // onClick={() => {
                //     setPrescricao(initialPrescricao)
                //     setMedicamento(initialMedicamento)
                //     setValidacao(false)
                //     setShowMedicamentoSet(true)
                // }}
                > Deixei aqui para manter a design </Button>
                <Button
                    className="ml-2"
                    variant="outline-success"
                    onClick={handleSubmit}
                > Submeter </Button>
            </Container>
            <Container className="mt-2">
                <Card body>
                    {showStep === 11 && <LMEForkSet lme={lme} passNextStep={handleNextStep} />}
                    {showStep === 21 && <CID10List lme={lme} passNextStep={handleNextStep} />}
                    {showStep === 31 && <LMEVarSet lme={lme} passNextStep={handleNextStep} />}
                    {showStep === 41 && <RelatorioVarSet lme={lme} passNextStep={handleNextStep} />}
                </Card>
            </Container>
            <Container className="mt-2">
                InsertLME: {JSON.stringify(lme)}
                {/* <Card body>
                        <PrescricaoData prescricao={prescricao} medicamento={medicamento} />
                    </Card>
                    <Card body>
                        <LMEData lme={lme} />
                    </Card> */}
            </Container>

        </div>
    )
}