import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import ApresentacaoSet from '../components/apresentacaoset';
import LmeDoses from '../components/lmedoses';
import MedicamentoSet from '../components/medicamentoset';
import PosologiaNaoPadraoSet from '../components/posologianaopadraoset';
import PosologiaSet from '../components/posologiaset';
import OutrasVariaveisSet from '../components/prescricaovarset';
import LMEForkSet from '../components/lmeforkset';
import { StepAtendimentoContext } from '../../..';

export const PrescricaoEditContext = createContext()
export const MedicamentoEditorContext = createContext()

const PrescricaoEditor = () => {

    const { step } = useContext(StepAtendimentoContext)
    const [prescricaoEdit, setPrescricaoEdit] = useState(props.prescricao)
    const [medicamentoContext, setMedicamentoContext] = useState()

    const GetStep = () => {

        switch (step) {
            case 'atendimento':
                return <MedicamentoSet />
            case 'clientehome':
                return <ApresentacaoSet />
            case 'atendimento':
                return <PosologiaSet />
            case 'clientehome':
                return <PosologiaNaoPadraoSet />
            case 'atendimento':
                return <OutrasVariaveisSet />
            case 'clientehome':
                return <LmeDoses />
            case 'atendimento':
                return <LMEForkSet />
            default:
                return <div />
        }
    }

    return (
        <>
            <PrescricaoEditContext.Provider value={{ prescricaoEdit: prescricaoEdit, setPrescricaoEdit: setPrescricaoEdit }} >
                <MedicamentoEditorContext.Provider value={{ medicamentoContext: medicamentoContext, setMedicamentoContext: setMedicamentoContext }} >
                   <GetStep />
                </ MedicamentoEditorContext.Provider>
            </PrescricaoEditContext.Provider>
        </>
    )
}

export default PrescricaoEditor