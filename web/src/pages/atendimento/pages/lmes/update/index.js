import React, { useContext, useState, useCallback, useLayoutEffect } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
//import { PageContext } from '../..';
import { PageContext, PrescricaoMainContext } from '../..';
import LMEEditor from '../editor'

export default function UpdateLME() {

    // const cliente = useContext(ClienteContext)
    const setPage = useContext(PageContext)
    const { prescricaoMain } = useContext(PrescricaoMainContext)
    const [lme, setLme] = useState()
    const step = 31

    const fetchData = useCallback(async () => {
        const res = await fetch(`http://localhost:4001/api.appmed/lmes/one/${prescricaoMain.lmeId}`)
        const json = await res.json();
        console.log('json[0] antes', json[0])
        
        const upLme = json[0].prescricoes.filter(l => {
            console.log('l.id', l.id)
            console.log('prescricaoMain.id', prescricaoMain.id)
            return l.id !== prescricaoMain.id
        })

        // console.log('index', index)
        // if (index > -1) {
        //     console.log('index', index)
        //     json[0].prescricoes.splice(index, 1, prescricaoMain);
        // }
        console.log('json[0] depois', json[0])
        setLme(json[0]) // ele manda como uma array se um item

    }, [prescricaoMain])

    useLayoutEffect(() => {
        fetchData();
    }, [fetchData])

    const backLME = useCallback((paramLME) => {
        console.log('paramLME só para saber no update LME', paramLME)
        setLme(paramLME)
          //  setPage('prescricoes') // ou para onde for
    }, [])

    const handleSubmit = event => {

        event.preventDefault();

        fetch(`http://localhost:4001/api.appmed/lmes/${lme.id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(lme)
        }).then(data => {
            if (data.ok) {
               // setPrescricaoMain(null)
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