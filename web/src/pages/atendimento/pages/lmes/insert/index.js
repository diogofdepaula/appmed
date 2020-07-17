import React, { useContext, useState, createContext } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { ClienteContext, PageContext, PrescricaoMainContext } from '../..';
import CID10List from '../../../../cadastro/cid10/components/cid10list';
import LMEForkSet from '../components/lmeforkset';
import LMEVarSet from '../components/lmevarset';
import RelatorioVarSet from '../relatorio/relatoriovarset';

export const LMEContext = createContext(null)

export default function InsertLME() {

    const cliente = useContext(ClienteContext)
    const setPage = useContext(PageContext)
    const { prescricaoMain, setPrescricaoMain } = useContext(PrescricaoMainContext)

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

    const handleSubmit = event => {

        event.preventDefault();

        fetch(`http://localhost:4001/api.appmed/lmes`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(lme)
        }).then(data => {
            if (data.ok) {
                setPrescricaoMain(null)
                setPage('prescricoes')
            }
        })
    }

    return (
        <div>
            <Container fluid className="mt-2">
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
                    <LMEContext.Provider value={{ lmeContext: lme, setLmeContext: setLme, setStepContext: setStep }} >
                        {showStep === 11 && <LMEForkSet />}
                        {showStep === 21 && <CID10List />}
                        {showStep === 31 && <LMEVarSet />}
                        {showStep === 41 && <RelatorioVarSet />}
                    </LMEContext.Provider>
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