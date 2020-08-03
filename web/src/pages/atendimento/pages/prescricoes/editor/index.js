import React, { createContext, useCallback, useEffect, useState } from 'react';
import ApresentacaoSet from '../components/apresentacaoset';
import LmeDoses from '../components/lmedoses';
import MedicamentoSet from '../components/medicamentoset';
import PosologiaNaoPadraoSet from '../components/posologianaopadraoset';
import PosologiaSet from '../components/posologiaset';
import OutrasVariaveisSet from '../components/prescricaovarset';
import LMEForkSet from '../components/lmeforkset';

export const PrescricaoEditorContext = createContext()

export default function PrescricaoEditor(props) {

    const [prescricao, setPrescricao] = useState(props.prescricao)
    const [step, setStep] = useState(props.step);

    const backToPrescricao = useCallback((param) => {
        props.sendPrescricao(prescricao, param)
    }, [props, prescricao])

    useEffect(() => {
        if (step === 0) {
            // sem mandar para lme
            backToPrescricao(false)
        } else if (step === 1){
            // manda para lme
            backToPrescricao(true)
        }
    }, [step, backToPrescricao, prescricao])

    

    return (
        <div>
            <PrescricaoEditorContext.Provider value={{ prescricaoContext: prescricao, setPrescricaoContext: setPrescricao, setStepContext: setStep }} >
                {step === 11 && <MedicamentoSet />}
                {step === 21 && <ApresentacaoSet />}
                {step === 31 && <PosologiaSet />}
                {step === 32 && <PosologiaNaoPadraoSet />}
                {step === 41 && <OutrasVariaveisSet />}
                {step === 51 && <LmeDoses />}
                {step === 61 && <LMEForkSet />}
            </PrescricaoEditorContext.Provider>
        </div>
    )
}