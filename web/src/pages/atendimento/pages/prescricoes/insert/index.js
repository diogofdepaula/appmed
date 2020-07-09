import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { Button, Container, Card, } from 'react-bootstrap'
import ClienteHeader from '../../../component/clienteheader'
import MedicamentoSet from '../components/medicamentoset'
import ApresentacaoSet from '../components/apresentacaoset'
import PosologiaSet from '../components/posologiaset'
import PosologiaNaoPadraoSet from '../components/posologianaopadraoset'
import OutrasVariaveisSet from '../components/prescricaovarset'
import PrescricaoData from '../components/prescricaodata'
import LMEForkSet from '../components/lmeforkset'

export default function InsertPrescricoes(props) {

    const [cliente] = useState(props.location.state.cliente)

    const initialPrescricao = {
        continuo: false, // optei para deixar como false como padrão. Se resolver mudar para true como padrão então deixe '' aqui e true lá no model
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
        inicio: '', //new Date().toISOString().slice(0, 10), //"yyyy-MM-dd"
        termino: null,
        motivotermico: '',
        clienteId: cliente.id,
        lmeId: null,
        medicamentoId: '',
        apresentacoId: '',
        posologiaId: ''
    }

    const [prescricao, setPrescricao] = useState(initialPrescricao)

    const initialMedicamento = {
        farmaco: '',
        apresentacoes: [{
            descricao: '',
            uso: '',
        }],
        posologias: [{
            posologia: '',
            quantidade: '',
            forma: ''
        }]
    }

    const [medicamento, setMedicamento] = useState(initialMedicamento)

    const [validacao, setValidacao] = useState(false)
    const [redirect, setRedirect] = useState('')
    const [showStep, setStep] = useState(11);

    const handleNextStep = (paramPresc, paramStep) => () => {
     
        setPrescricao(paramPresc)
        setStep(paramStep)
    }

    // const handlePreviousStep = () => {
    //     setStep(showStep - 1)
    // }

    // const changeApresentacao = (paramMed, paramAp) => () => {
    //     setPrescricao({
    //         ...prescricao,
    //         apresentacoId: paramAp.id
    //     })
    //     setMedicamento(paramMed)
    //     setStep(31)
    // }

    const changePosologia = param => () => {
        setPrescricao({
            ...prescricao,
            usoposologiapadrao: true,
            posologiaId: param.id
        })
        setStep(41)
    }

    const changePosoligiaPadraoToNaoPadrao = () => {
        setStep(32)
    }

    const changePosologiaNaoPadrao = param => () => {
        setPrescricao({
            ...prescricao,
            usoposologiapadrao: false,
            posologiaId: null,
            posologianaopadrao: param.posologianaopadrao,
            quantidadenaopadrao: param.quantidadenaopadrao,
            formanaopadrao: param.formanaopadrao,
        })
        setStep(41)
    }

    const changeOutrasVariaveis = (param, paramLME) => () => {
        setPrescricao({
            ...prescricao,
            continuo: param.continuo,
            imprimirorientacoes: param.imprimirorientacoes,
            orientacoes: param.orientacoes,
            inicio: param.inicio
        })
        setStep(0) 
        
        if (paramLME) {
            setStep(51)
            // se a resposta for true lá no LMEForkSet ele pega essa {prescricao} e redireciona para o LME insert e de lá faz o submit 
        } else {
            // fazer uma validação de verdade depois
            // se tudo OK setValidacao(true)
            setValidacao(true)
        }
    }

    const handleSubmit = event => {

        if (validacao) {

            event.preventDefault();

            fetch(`http://localhost:4001/api.appmed/prescricoes/${cliente.id}`, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(prescricao)
            })
                .then(data => {
                    if (data.ok) {
                        setRedirect({ pathname: `/prescricoes/${cliente.id}`, state: { cliente } })
                    }
                })
        } else {
            console.log('Faltou alguma coisa na prescrição, prescreve novamente!')
        }
    }

    if (redirect !== '') {
        return <Redirect to={redirect} /> //ou <Redirect to={"/search/" + this.state.name} />
    } else {
        return (

            <div>
                <ClienteHeader cliente={cliente} />
                <Container fluid >
                    <Button
                        variant="outline-primary"
                        onClick={() => {
                            setPrescricao(initialPrescricao)
                            setMedicamento(initialMedicamento)
                            setValidacao(false)
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
                        {showStep === 31 && <PosologiaSet medicamento={medicamento} passPosologia={changePosologia} naoPadrao={changePosoligiaPadraoToNaoPadrao} />}
                        {showStep === 32 && <PosologiaNaoPadraoSet passPosologiaNaoPadrao={changePosologiaNaoPadrao} />}
                        {showStep === 41 && <OutrasVariaveisSet passVariaveis={changeOutrasVariaveis} />}
                        {showStep === 51 && <LMEForkSet cliente={cliente} prescricao={prescricao} medicamento={medicamento} redirect={setRedirect} />}
                    </Card>
                </Container>
                <Container className="mt-2">
                    <Card body>
                        <PrescricaoData prescricao={prescricao} medicamento={medicamento} />
                    </Card>
                </Container>
            </div>
        )
    }
}