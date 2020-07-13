import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap'
import CID10List from '../../../../cadastro/cid10/components/cid10list'
//import PrescricaoData from '../../prescricoes/components/prescricaodata'
import LMEVarSet from '../components/lmevarset'
//import LMEData from '../components/lmedata';
import RelatorioVarSet from '../relatorio/relatoriovarset';
import LMEForkSet from '../components/lmeforkset'

export default function InsertLME(props) {

    const cliente = props.location.state.cliente
    //const medicamento = props.location.state.medicamento
   // const prescricao = props.location.state.prescricao // deixei assim se vir por Link 

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

    const [showCID10Set, setShowCID10Set] = useState(false);
    const [showLMEVarSet, setShowLMEVarSet] = useState(false);
    const [showRelatorioVarSet, setShowRelatorioVarSet] = useState(false);


    // const [validacao, setValidacao] = useState(false)
    const [showStep, setStep] = useState(11);

    const handleNextStep = (paramLme, paramStep) => () => {
        setLme(paramLme)
        setStep(paramStep)
    }

    const changecid = param => () => {
        setLme({
            ...lme,
            cid10: param.cid10,
            diagnostico: param.descricao,
        })
        setShowCID10Set(false)
        setShowLMEVarSet(true)
    }

    const changelme = (paramLME, paramRel) => () => {
        setLme(paramLME)
        setShowLMEVarSet(false)
        setShowRelatorioVarSet(paramRel)
    }

    const changerelatorio = param => () => {
        setLme({
            ...lme,
            relatorio: param
        })
        setShowRelatorioVarSet(false)
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
                <Container fluid >
                    {/* <Button 
                        variant="outline-primary"
                        onClick={() => {
                            setPrescricao(initialPrescricao)
                            setMedicamento(initialMedicamento)
                            setValidacao(false)
                            setShowMedicamentoSet(true)
                        }}
                    > Escolhe outro Medicamento </Button> */}
                    <Button
                        className="ml-2"
                        variant="outline-success"
                        onClick={handleSubmit}
                    > Submeter </Button>
                </Container>
                <Container>
                    <Card body>
                        {showStep === 11 && <LMEForkSet lme={lme} passNextStep={handleNextStep} /> }
                        {/* FAZER OS NOVAS STEPS SEGUINDO O PADRÃO */}
                        {showCID10Set && <CID10List passcid={changecid} />}
                        {showLMEVarSet && <LMEVarSet lme={lme} passlme={changelme} />}
                        {showRelatorioVarSet && <RelatorioVarSet cid10={lme.cid10} passrelatorio={changerelatorio} />}
                    </Card>
                </Container>
                <Container className="mt-2">
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