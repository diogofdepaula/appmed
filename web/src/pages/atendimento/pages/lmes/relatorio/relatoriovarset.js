import React, { useState } from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import RelatorioSet1 from './components/relatorioset1'
import RelatorioSet2 from './components/relatorioset2'
import RelatorioSet3 from './components/relatorioset3'
import RelatorioSet4 from './components/relatorioset4'
import RelatorioSet5 from './components/relatorioset5'
import RelatorioSet6 from './components/relatorioset6'

export default function RelatorioVarSet(props) {

    const [relatorio, setRelatorio] = useState({
        tempodoencaanos: '',
        tempodoencameses: '',
        vhs: '',
        pcr: '',
        pcrvn: '',
        ara: '',
        arb: '',
        arc: '',
        ard: '',
        are: '',
        arf: '',
        arg: '',
        eapa: '',
        eapb: '',
        eapc: '',
        eapd: '',
        eape: '',
        eapf: '',
        eapg: '',
        eaaa: '',
        eaab: '',
        eaac: '',
        eaad: '',
        eaae: '',
        medicamento1: '',
        dose1: '',
        inicio1: '',
        fim1: '',
        motivo1: '',
        medicamento2: '',
        dose2: '',
        inicio2: '',
        fim2: '',
        motivo2: '',
        medicamento3: '',
        dose3: '',
        inicio3: '',
        fim3: '',
        motivo3: '',
        medicamento4: '',
        dose4: '',
        inicio4: '',
        fim4: '',
        motivo4: '',
        medicamento5: '',
        dose5: '',
        inicio5: '',
        fim5: '',
        motivo5: '',
        medicamento6: '',
        dose6: '',
        inicio6: '',
        fim6: '',
        motivo6: '',
        medicamento7: '',
        dose7: '',
        inicio7: '',
        fim7: '',
        motivo7: '',
        ppddata: '',
        ppdresultado: '',
        rxtoraxdata: '',
        rxtoraxresultado: '',
        rxtoraxalteracao: '',
        bhcgdata: '',
        bhcgjustificativa: '',
        infeccaoviral: '',
        hepatite: '',
        infeccaobacteriana: '',
        neoplasia: '',
        anemia: '',
        alteracaohepatica: '',
        das28: '',
        cdai: '',
        sdai: '',
        basdai: '',
        asdas: '',
        mda: '',
        eva: '',
    })

    const [showStep, setStep] = useState(1);

    const handleNextStep = param => () => {
        setRelatorio(param)
        setStep(showStep + 1)
    }

    const handlePreviousStep = () => {
        setStep(showStep - 1)
    }

    return (
        <div>
            <Container>
                {showStep >=1 && showStep <= 6 && 
                <Card body>
                    {showStep === 1 && <RelatorioSet1 relatorio={relatorio} passNext={handleNextStep} />}
                    {showStep === 2 && <RelatorioSet2 relatorio={relatorio} passNext={handleNextStep} passPrevious={handlePreviousStep} cid10={props.cid10} />}
                    {showStep === 3 && <RelatorioSet3 relatorio={relatorio} passNext={handleNextStep} passPrevious={handlePreviousStep} />}
                    {showStep === 4 && <RelatorioSet4 relatorio={relatorio} passNext={handleNextStep} passPrevious={handlePreviousStep} />}
                    {showStep === 5 && <RelatorioSet5 relatorio={relatorio} passNext={handleNextStep} passPrevious={handlePreviousStep} />}
                    {showStep === 6 && <RelatorioSet6 relatorio={relatorio} passNext={handleNextStep} passPrevious={handlePreviousStep} />}
                </Card>
                }
                {showStep === 7 &&
                    <Button
                        className="ml-1"
                        variant="outline-success"
                        onClick={props.passrelatorio(relatorio)}
                    > Encerrar relatorio
                    </Button>
                }
            </Container>
        </div>
    )

}