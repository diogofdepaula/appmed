import React, { useCallback, useContext } from 'react';
import { AtendimentoContext } from '../../..';
import ApresentacaoSet from '../components/apresentacaoset';
import MedicamentoSet from '../components/medicamentoset';
import PosologiaNaoPadraoSet from '../components/posologianaopadraoset';
import PosologiaSet from '../components/posologiaset';
import PrescricaoVarSet from '../components/prescricaovarset';

const PrescricaoEditor = () => {

    const { step } = useContext(AtendimentoContext)

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
            {step !== 0 ? <GetStep /> : <div />}
        </>
    )
}

export default PrescricaoEditor