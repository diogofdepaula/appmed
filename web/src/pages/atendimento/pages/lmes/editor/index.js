import React, { createContext, useCallback, useEffect, useState } from 'react';
import CID10List from '../../../../cadastro/cid10/components/cid10list'
import LMEVarSet from '../components/lmevarset'
import RelatorioVarSet from '../relatorio/relatoriovarset'

export const LMEEditorContext = createContext()

export default function PrescricaoEditor(props) {

    const [lme, setLme] = useState(props.lme)
    const [step, setStep] = useState(props.step);

    const backToLme = useCallback(() => {
        props.sendLme(lme)
    }, [props, lme])

    useEffect(() => {
        if (step === 0) {
            backToLme()
        }
    }, [step, backToLme])

    return (
        <div>
            <LMEEditorContext.Provider  value={{ lmeContext: lme, setLmeContext: setLme, setStepContext: setStep }} >
                {step === 21 && <CID10List />}
                {step === 31 && <LMEVarSet />}
                {step === 41 && <RelatorioVarSet />}
            </LMEEditorContext.Provider>
        </div>
    )
}