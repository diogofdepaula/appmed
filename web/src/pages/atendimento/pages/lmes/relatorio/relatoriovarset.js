import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap'
import { LMEEditorContext } from '../editor'
import RelatorioSet1 from './components/relatorioset1'
import RelatorioSet2 from './components/relatorioset2'
import RelatorioSet3 from './components/relatorioset3'
import RelatorioSet4 from './components/relatorioset4'
import RelatorioSet5 from './components/relatorioset5'
import RelatorioSet6 from './components/relatorioset6'

export const RelatorioContent = createContext(null)

export default function RelatorioVarSet(props) {

    const { lmeContext, setLmeContext, setStepContext } = useContext(LMEEditorContext)

    const relatorioinitial = {
        tempodoencaanos: 'testeinitial',
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

    const [step, setStep] = useState(1);
    const [relatorio, setRelatorio] = useState(lmeContext.relatorio === null ? relatorioinitial : lmeContext.relatorio)

     const backToEditor = useCallback(() => {
        setLmeContext({
            ...lmeContext,
            relatorio: relatorio
        })
        setStepContext(0)
    }, [setLmeContext, lmeContext, setStepContext, relatorio])

    useEffect(() => {
        if (step === 7) {
            backToEditor()
        }
    }, [backToEditor, step])

    return (
        <div>
            <Container>
                {step >= 1 && step <= 6 &&
                    <Card body>
                        <h5>Preencha o relatório de médico específico</h5>
                        <RelatorioContent.Provider value={{ relatorioContext: relatorio, setRelatorioContext: setRelatorio, setStepContext: setStep }} >
                            {step === 1 && <RelatorioSet1 />}
                            {step === 2 && <RelatorioSet2 />}
                            {step === 3 && <RelatorioSet3 />}
                            {step === 4 && <RelatorioSet4 />}
                            {step === 5 && <RelatorioSet5 />}
                            {step === 6 && <RelatorioSet6 />}
                        </RelatorioContent.Provider>
                    </Card>
                }
            </Container>
        </div >
    )
}