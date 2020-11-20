import { Box } from '@material-ui/core';
import React, { createContext, useCallback, useContext, useState } from 'react';
import { AtendimentoContext } from '../../..';
import { ClienteContext, PageContentContext } from '../../../../../App';
import InitialPrescricao from '../../../component/initialprescricao';
import PrescricaoEditor from '../editor';

export const PrescricaoContext = createContext(null)

const PrescricaoInsert = () => {

    const { clientecontext } = useContext(ClienteContext)
    const { setPageContentContext } = useContext(PageContentContext)
    const { setPrescricaoOnDuty } = useContext(AtendimentoContext)

    // const initialPrescricao = {
    //     continuo: true,
    //     imprimirorientacoes: false,
    //     emuso: true,
    //     orientacoes: '',
    //     usoposologiapadrao: true,
    //     posologianaopadrao: '',
    //     quantidadenaopadrao: '',
    //     formanaopadrao: '',
    //     lmemes1: '',
    //     lmemes2: '',
    //     lmemes3: '',
    //     lmemes4: '',
    //     lmemes5: '',
    //     lmemes6: '',
    //     inicio: new Date(),
    //     termino: null,
    //     motivotermico: '',
    //     clienteId: clientecontext.id,
    //     lmeId: null,
    //     medicamentoId: '',
    //     apresentacoId: '',
    //     posologiaId: ''
    // }

    const [prescricao, setPrescricao] = useState(InitialPrescricao(clientecontext.id))
    const step = 11

    const backPrescricao = useCallback((paramPres, paramLME) => {
        setPrescricaoOnDuty(paramPres)
        if (paramLME) {
            //Mandará para a LME
            setPrescricaoOnDuty(paramPres)
            if (paramPres.lmeId === null) {
                setPageContentContext('lmeinsert')
            } else {
                //JÁ DEIXEI AQUI PARA ENCAMINHAR QUANDO FOR VINCULAR A UMA LME JÁ EXISTENTE
                setPageContentContext('lmeupdate')
            }
        } else {
            setPrescricaoOnDuty(null)
            setPrescricao(paramPres)
        }
    }, [setPrescricaoOnDuty, setPageContentContext])

    // const handleSubmit = event => {
    //     event.preventDefault();
    //     fetch(`http://localhost:4001/api.appmed/prescricoes`, {
    //         method: 'post',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(prescricao)
    //     }).then(data => {
    //         if (data.ok) {
    //             setPageContentContext('prescricoes')
    //         }
    //     })
    // }

    return (
        <>
            <Box m={2}>
                <PrescricaoEditor prescricao={prescricao} sendPrescricao={backPrescricao} step={step} />
            </Box>
        </>
    )
}

export default PrescricaoInsert