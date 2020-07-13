import React, { useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import CID10List from '../../../../cadastro/cid10/components/cid10list';
import ClienteHeader from '../../../component/clienteheader';
import LMEForkSet from '../components/lmeforkset';
//import PrescricaoData from '../../prescricoes/components/prescricaodata'
import LMEVarSet from '../components/lmevarset';
//import LMEData from '../components/lmedata';
import RelatorioVarSet from '../relatorio/relatoriovarset';

export default function InsertLME(props) {

    const cliente = props.location.state.cliente

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
        prescricoes: props.location.state.prescricao,
        relatorio: null,
    }

    const [lme, setLme] = useState(initialLME)
    const [redirect, setRedirect] = useState('')
    // const [validacao, setValidacao] = useState(false)
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
        })
            .then(data => {
                if (data.ok) {
                    setRedirect({ pathname: `/prescricoes/${cliente.id}`, state: { cliente } })
                }
            })
    }

    if (redirect !== '') {
        return <Redirect to={redirect} />
    } else {
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
                    {JSON.stringify(lme)}
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
}