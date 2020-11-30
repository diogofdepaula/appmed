import React, { createContext, useCallback, useContext } from 'react';
import { AtendimentoContext } from '../../..';
import LMECIDSet from '../components/lmecidset';
import LMEVarSet from '../components/lmevarset';

export const LMEEditorContext = createContext(null)

const LMEEditor = () => {

    const { step } = useContext(AtendimentoContext)

    const GetStep = useCallback(() => {
        switch (step) {
            case 11:
                return <LMECIDSet />
            case 21:
                return <LMEVarSet />
            //return 
            case 32:
                return <div>31</div>
            //return <RelatorioVarSet />
            // case 41:
            //     return <PrescricaoVarSet />
            // case 51:
            //     return <LMEDoses />
            // case 61:
            //     return <LMEForkSet />
            default:
                return <div />
        }
    }, [step]
    )

    return (
        <>
            <LMEEditorContext.Provider value={'fake'}>
                {step !== 0 ? <GetStep /> : <div />}
            </LMEEditorContext.Provider>
        </>
    )
}

export default LMEEditor