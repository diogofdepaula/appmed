import { Box, Button, Grid } from '@material-ui/core';
import React, { createContext, useCallback, useContext, useState } from 'react';
import { PrescricaoMainContext } from '../../..';
import { ClienteContext, PageContentContext } from '../../../../../App';
import PrescricaoEditor from '../editor';

export const PrescricaoContext = createContext(null)

const PrescricaoInsert = () => {

    const { clientecontext } = useContext(ClienteContext)
    const { setPageContentContext } = useContext(PageContentContext)
    const { setPrescricaoMain } = useContext(PrescricaoMainContext)

    const initialPrescricao = {
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
        inicio: new Date().toISOString().slice(0, 10), //"yyyy-MM-dd"
        termino: null,
        motivotermico: '',
        clienteId: clientecontext.id,
        lmeId: null,
        medicamentoId: '',
        apresentacoId: '',
        posologiaId: ''
    }

    const [prescricao, setPrescricao] = useState(initialPrescricao)
    const step = 11

    const backPrescricao = useCallback((paramPres, paramLME) => {
        setPrescricaoMain(paramPres)
        if (paramLME) {
            //Mandará para a LME
            setPrescricaoMain(paramPres)
            if (paramPres.lmeId === null) {
                setPageContentContext('lmeinsert')
            } else {
                //JÁ DEIXEI AQUI PARA ENCAMINHAR QUANDO FOR VINCULAR A UMA LME JÁ EXISTENTE
                setPageContentContext('lmeupdate')
            }
        } else {
            setPrescricaoMain(null)
            setPrescricao(paramPres)
        }
    }, [setPrescricaoMain, setPageContentContext])

    const handleSubmit = event => {
        event.preventDefault();
        fetch(`http://localhost:4001/api.appmed/prescricoes`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(prescricao)
        }).then(data => {
            if (data.ok) {
                setPageContentContext('prescricoes')
            }
        })
    }

    return (
        <>
            <Box display='flex' mt={1}>
                <Grid container spacing={1}>
                    <Grid item>
                        <Button
                            variant="outlined"
                            onClick={() => {
                                setPrescricao(initialPrescricao)
                                // setMedicamento(initialMedicamento)
                                // setValidacao(false)
                                // setStep(11)
                            }}
                        >Escolhe outro Medicamento</Button>
                    </Grid>
                    <Grid item>
                        <Button
                            className="ml-2"
                            variant="outlined"
                            color="secondary"
                            onClick={handleSubmit}
                        > Submeter </Button>
                    </Grid>
                </Grid>
            </Box>
            <Box mt={2}>
                <PrescricaoEditor prescricao={prescricao} sendPrescricao={backPrescricao} step={step} />
            </Box>
        </>
    )
}

export default PrescricaoInsert