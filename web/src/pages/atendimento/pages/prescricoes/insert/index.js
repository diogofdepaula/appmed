import { Box } from '@material-ui/core';
import React, { createContext, useCallback, useContext, useEffect } from 'react';
import { AtendimentoContext } from '../../..';
import { ClienteContext } from '../../../../../App';
import PrescricaoEditor from '../editor';

export const PrescricaoContext = createContext(null)

const PrescricaoInsert = () => {

    const { clienteContext } = useContext(ClienteContext)
    const { setPrescricaoEdit, setStep } = useContext(AtendimentoContext)
    
    const chargeInitial = useCallback(() => {

        const initial = {
            continuo: true,
            imprimirorientacoes: false,
            emuso: true,
            orientacoes: '',
            usoposologiapadrao: true,
            posologianaopadrao: '',
            quantidadenaopadrao: '',
            formanaopadrao: '',
            lmemes1: '',
            lmemes2: '',
            lmemes3: '',
            lmemes4: '',
            lmemes5: '',
            lmemes6: '',
            inicio: new Date(),
            termino: null,
            motivotermico: '',
            clienteId: clienteContext.id, 
            lmeId: null,
            medicamentoId: '',
            apresentacoId: '',
            posologiaId: '',
        }
        setPrescricaoEdit(initial)
        setStep(11)
    }, [setStep, setPrescricaoEdit, clienteContext ])

    useEffect(() => {
            chargeInitial()
    },[chargeInitial])

    return (
        <>
            <Box m={2}>
                <PrescricaoEditor />
            </Box>
        </>
    )
}

export default PrescricaoInsert