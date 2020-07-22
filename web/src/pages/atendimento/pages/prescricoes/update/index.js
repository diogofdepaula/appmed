import React, { useContext, useCallback, useState, useEffect } from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import { PrescricaoMainContext, PageContext } from '../..';
import PrescricaoEditor from '../editor'

export default function PrescricaoUpdate(props) {

    const setPage = useContext(PageContext)
    const { prescricaoMain, setPrescricaoMain } = useContext(PrescricaoMainContext)
    //Não dá para usar o prescricaoMain porque dá um erro
    //Cannot update a component from inside the function body of a different component
    const [prescricao, setPrescricao] = useState(prescricaoMain)
    const [sendLME, setSendLME] = useState(false)
    const step = 21

    console.log('prescricaoMain fora de tudo', prescricaoMain)

    useEffect(() => {
        console.log('prescricaoMain dentro do useEffect', prescricaoMain)
        if (sendLME) {
            console.log('prescricaoMain dentro do IF do useEffect', prescricaoMain)
            if (prescricaoMain.lmeId === null) {
                setPage('lmeinsert')
            } else {
                setPage('lmeupdate')
            }
        }
    }, [sendLME, prescricaoMain, setPage])

    const backPrescricao = useCallback((paramPres, paramLME) => {
        setPrescricaoMain(paramPres)
        if (paramLME) {
            setSendLME(true)
        }
        // nem precisava
        setPrescricao(paramPres)
    }, [setPrescricaoMain])

    const handleSubmit = event => {

        event.preventDefault();
        fetch(`http://localhost:4001/api.appmed/prescricoes/${prescricao.id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(prescricao)
        }).then(data => {
            if (data.ok) {
                setPrescricaoMain(null)
                setPage('prescricoes')
            }
        })
    }

    return (
        <div>
            <Container fluid className='mt-2'>
                <Button
                    variant="outline-primary"
                > Deixei por uma questão de estética </Button>
                <Button
                    className="ml-2"
                    variant="outline-success"
                    onClick={handleSubmit}
                > Submeter </Button>
            </Container>

            <Container className="mt-2">
                <Card body>
                    <PrescricaoEditor prescricao={prescricao} sendPrescricao={backPrescricao} step={step} />
                </Card>
            </Container>
        </div>
    )
}