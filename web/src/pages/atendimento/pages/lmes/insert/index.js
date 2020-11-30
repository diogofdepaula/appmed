import React, { useCallback, useContext, useEffect } from 'react';
import { AtendimentoContext } from '../../..';
import { ClienteContext } from '../../../../../App';
import LMEEditor from '../editor';

const LMEInsert = () => {

    const { clientecontext } = useContext(ClienteContext)
    const { prescricaoEdit, setStep, setLmeEdit } = useContext(AtendimentoContext)

    const chargeInitial = useCallback(() => {

        const initial = {
            cid10: '',
            diagnostico: '',
            anamnese: '',
            tratamentoprevio: '',
            tratamentopreviotexto: '',
            atestadocapacidade: '',
            preenchidopor: '',
            preenchidoporCPF: '',
            raca: '',
            clienteId: clientecontext.id,
            prescricoes: prescricaoEdit,
            relatorio: null,
        }
        setLmeEdit(initial)
        setStep(11)
    }, [setStep, setLmeEdit, clientecontext, prescricaoEdit])

    useEffect(() => {
        chargeInitial()
    }, [chargeInitial])

    return (
        <>
            <LMEEditor />
        </>
    )
}

export default LMEInsert