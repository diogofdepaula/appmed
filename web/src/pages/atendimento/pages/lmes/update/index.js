import React, { useContext, useState, useCallback, useLayoutEffect } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { PageContext, PrescricaoMainContext } from '../..';
import LMEEditor from '../editor'

export default function UpdateLME() {

    // const cliente = useContext(ClienteContext)
    const setPage = useContext(PageContext)
    const { prescricaoMain, setPrescricaoMain } = useContext(PrescricaoMainContext)
    const [lme, setLme] = useState()
    const step = 31

    const fetchData = useCallback(async () => {
        const res = await fetch(`http://localhost:4001/api.appmed/lmes/one/${prescricaoMain.lmeId}`)
        const json = await res.json();
        setLme(json[0]); // ele manda como uma array se um item
    }, [prescricaoMain])

    useLayoutEffect(() => {
        fetchData();
    }, [fetchData])

    const backLME = useCallback((paramLME) => {
        console.log('prescricaoMain pus só para náo esquecer', prescricaoMain)
        setLme(paramLME)
        console.log('na LME update')     
          //  setPage('prescricoes') // ou para onde for
    }, [ prescricaoMain])


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
                > Submeter no LME update </Button>
            </Container>
            <Container className="mt-2">
                <Card body>
                    {lme &&
                        <LMEEditor lme={lme} sendLme={backLME} step={step} />
                    }
                </Card>
            </Container>
        </div>
    )
}