import React, { createContext, useCallback, useContext, useState } from 'react';
import { AtendimentoContext } from '../../..';
import ApresentacaoSet from '../components/apresentacaoset';
import MedicamentoSet from '../components/medicamentoset';
import PosologiaNaoPadraoSet from '../components/posologianaopadraoset';
import PosologiaSet from '../components/posologiaset';
import PrescricaoVarSet from '../components/prescricaovarset';

// medicamento com includes para não ter que ficar voltando no banco de dados toda hora
// economiza 3 busca ao banco de dados
// Preferi fazer outro createContext para não deixar muita coisa junto e ficar confuso
export const PrescricaoEditorContext = createContext(null)
export const MedicamentoEditorContext = createContext(null)

const PrescricaoEditor = () => {

    const { step } = useContext(AtendimentoContext)
    const [medicamentoContext, setMedicamentoContext] = useState()

    // const backToPrescricao = useCallback((param) => {
    //     props.sendPrescricao(prescricao, param)
    // }, [props, prescricao])

    // useEffect(() => {
    //     if (step === 0) {
    //         // sem mandar para lme
    //         backToPrescricao(false)
    //     } else if (step === 1) {
    //         // manda para lme
    //         backToPrescricao(true)
    //     }
    // }, [step, backToPrescricao, prescricao])

    const GetStep = useCallback(() => {
        switch (step) {
            case 11:
                return <MedicamentoSet />
            case 21:
                return <ApresentacaoSet />
            case 31:
                return <PosologiaSet />
            case 32:
                return <PosologiaNaoPadraoSet />
            case 41:
                return <PrescricaoVarSet />
            //return 
            case 51:
                return <div />
            //return <LmeDoses />
            case 61:
                return <div />
            //return <LMEForkSet />
            default:
                return <div />
        }

    }, [step]
    )

    return (
        <>
            <PrescricaoEditorContext.Provider value={'teste'}>
                <MedicamentoEditorContext.Provider value={{ medicamentoContext: medicamentoContext, setMedicamentoContext: setMedicamentoContext }} >
                    {step !== 0 ? <GetStep /> : <div />}
                </ MedicamentoEditorContext.Provider>
            </PrescricaoEditorContext.Provider>
        </>
    )
}

export default PrescricaoEditor