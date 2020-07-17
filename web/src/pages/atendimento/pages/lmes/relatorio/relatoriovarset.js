import React, { useCallback, useContext, useEffect, useState, createContext } from 'react'
import { Card, Container } from 'react-bootstrap'
import { LMEContext } from '../insert'
import RelatorioSet1 from './components/relatorioset1'
import RelatorioSet2 from './components/relatorioset2'
import RelatorioSet3 from './components/relatorioset3'
import RelatorioSet4 from './components/relatorioset4'
import RelatorioSet5 from './components/relatorioset5'
import RelatorioSet6 from './components/relatorioset6'

export const RelatorioContent = createContext(null)

export default function RelatorioVarSet(props) {

    const { lmeContext, setLmeContext, setStepContext } = useContext(LMEContext)

    const relatorioinitial = {
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
    }

    const [showStep, setStep] = useState(1);
    //se vem para cá é porque é nova LME
    const [relatorio, setRelatorio] = useState(relatorioinitial)

    const returnlmeinsert = useCallback(() => {
        setLmeContext({
            ...lmeContext,
            relatorio: relatorio
        })
        setStepContext(0)
    }, [setLmeContext, setStepContext, lmeContext, relatorio])

    useEffect(() => {
        if (showStep === 7) {
            returnlmeinsert()
        }
    }, [returnlmeinsert, showStep])

    return (
        <div>
            <Container>
                {showStep >= 1 && showStep <= 6 &&
                    <Card body>
                        <h5>Preencha o relatório de médico específico</h5>
                        <RelatorioContent.Provider value={{ relatorioContext: relatorio, setRelatorioContext: setRelatorio, setStepContext: setStep }} >
                            {showStep === 1 && <RelatorioSet1 />}
                            {showStep === 2 && <RelatorioSet2 />}
                            {showStep === 3 && <RelatorioSet3 />}
                            {showStep === 4 && <RelatorioSet4 />}
                            {showStep === 5 && <RelatorioSet5 />}
                            {showStep === 6 && <RelatorioSet6 />}
                        </RelatorioContent.Provider>
                    </Card>
                }
                {/* {showStep === 7 &&
                    <Button
                        className="ml-1"
                        variant="outline-success"
                        onClick={props.passNextStep(lme, 0)}
                    > Encerrar relatorio
                    </Button>
                } */}
            </Container>
        </div >
    )
}