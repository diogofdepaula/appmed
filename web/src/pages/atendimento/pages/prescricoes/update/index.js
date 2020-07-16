import React, { useContext } from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import { PrescricaoMainContext } from '../..';
//import PrescricaoList from '../components/prescricaolist'

export default function PrescricaoInsert(props) {

    const { prescricaoMain } = useContext(PrescricaoMainContext)
    const prescricao = prescricaoMain

    return (
        <div>
            <Container fluid className='mt-2'>
                <Button
                    variant="outline-primary"
                    onClick={() => {
                       // setPrescricao(initialPrescricao)
                        // setMedicamento(initialMedicamento)
                        // setValidacao(false)
                        //setStep(11)
                    }}
                > Escolhe outro Medicamento </Button>
                <Button
                    className="ml-2"
                    variant="outline-success"
                    //onClick={handleSubmit}
                > Submeter </Button>
            </Container>
            
            <Container className="mt-2">
            {/* <PrescricaoList prescricoes={prescricoes} /> */}
                <Card body>
                    teste
                    {JSON.stringify(prescricao)}
                    {/* {showStep === 11 && <MedicamentoSet prescricao={prescricao} passNextStep={handleNextStep} />}
                    {showStep === 21 && <ApresentacaoSet prescricao={prescricao} passNextStep={handleNextStep} />}
                    {showStep === 31 && <PosologiaSet prescricao={prescricao} passNextStep={handleNextStep} />}
                    {showStep === 32 && <PosologiaNaoPadraoSet prescricao={prescricao} passNextStep={handleNextStep} />}
                    {showStep === 41 && <OutrasVariaveisSet prescricao={prescricao} passNextStep={handleNextStep} />}
                    {showStep === 51 && <Lmedoses prescricao={prescricao} passNextStep={handleNextStep} />} */}
                </Card>
            </Container>
        </div>
    )
}