import React, { useContext, useState, useCallback } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { ClienteContext, PageContext, PrescricaoMainContext } from '../..';
import LMEEditor from '../editor'

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
    const step = 11

    const backLme = useCallback((paramLME ) => {
        setLme(paramLME)
    }, [])


    const handleSubmit = event => {

        event.preventDefault();
        fetch(`http://localhost:4001/api.appmed/lmes`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(lme)
        }).then(data => {
            if (data.ok) {
                setPrescricaoMain(null)
                setPage('prescricoes') // ou para onde for
            }
        })
    }

    console.log('lme no insert', lme)

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
                > Submeter LME no Insert</Button>
            </Container>
            <Container className="mt-2">
                <Card body>
                    <LMEEditor lme={lme} sendLme={backLme} step={step} />
                </Card>
            </Container>
        </div>
    )
}