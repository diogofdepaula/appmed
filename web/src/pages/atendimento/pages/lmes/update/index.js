import React, { useContext, useEffect, useState, useCallback } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { ClienteContext, PageContext, PrescricaoMainContext } from '../..';

export default function UpdateLME(props) {

    const cliente = useContext(ClienteContext)
    const setPage = useContext(PageContext)
    const { prescricaoMain, setPrescricaoMain } = useContext(PrescricaoMainContext)
    const [lme, setLme] = useState()
    const [showStep, setStep] = useState(11);

    const fetchData = useCallback(async () => {
        const res = await fetch(`http://localhost:4001/api.appmed/lmes/one/${cliente.id}`)
        const json = await res.json();
        setLme(json);
    }, [cliente])

    useEffect(() => {
        fetchData();
    }, [fetchData])


    const handleSubmit = event => {

        event.preventDefault();

        fetch(`http://localhost:4001/api.appmed/lmes`, {
            method: 'put',
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
                    <h5>UpdateLME</h5>
                    {/* <LMEContext.Provider value={{ lmeContext: lme, setLmeContext: setLme, setStepContext: setStep }} >
                        {showStep === 11 && <LMEForkSet />}
                        {showStep === 21 && <CID10List />}
                        {showStep === 31 && <LMEVarSet />}
                        {showStep === 41 && <RelatorioVarSet />}
                    </LMEContext.Provider> */}
                </Card>
            </Container>
        </div>
    )
}