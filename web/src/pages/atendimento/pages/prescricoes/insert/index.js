import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { Button, Container, Card, } from 'react-bootstrap'
import ClienteHeader from '../../../component/clienteheader'
import MedicamentoSet from '../components/medicamentoset'
import ApresentacaoSet from '../components/apresentacaoset'
import PosologiaSet from '../components/posologiaset'
import PosologiaNaoPadraoSet from '../components/posologianaopadraoset'
import OutrasVariaveisSet from '../components/prescricaovarset'
//import PrescricaoData from '../components/prescricaodata'
import Lmedoses from '../components/lmedoses'

export default function InsertPrescricoes(props) {

    const [cliente] = useState(props.location.state.cliente)

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

    // const initialMedicamento = {
    //     farmaco: '',
    //     apresentacoes: [{
    //         descricao: '',
    //         uso: '',
    //     }],
    //     posologias: [{
    //         posologia: '',
    //         quantidade: '',
    //         forma: ''
    //     }]
    // }

  //  const [medicamento, setMedicamento] = useState(initialMedicamento)
   // const [validacao, setValidacao] = useState(false)
    const [redirect, setRedirect] = useState('')
    const [showStep, setStep] = useState(11);

    const handleNextStep = (paramPresc, paramStep) => () => {
        setPrescricao(paramPresc)
        if (paramStep === 'lme') {
            setRedirect({ pathname: `/lmes/${cliente.id}/insert`, state: { cliente, prescricao } })
        } else {
            setStep(paramStep)
        }
    }

    const handleSubmit = event => {

      //  if (validacao) {
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
        // } else {
        //     console.log('Faltou alguma coisa na prescrição, prescreve novamente!')
        // }
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
                        <PrescricaoData prescricao={prescricao} medicamento={medicamento} />
                    </Card> */}
                </Container>
            </div>
        )
    }
}