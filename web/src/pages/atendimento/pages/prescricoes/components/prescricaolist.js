import { Box, Divider, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { ClienteContext } from '../../../../../App';
import { PageAtendimentoContext, PrescricaoMainContext } from '../../..';

export default function PrescricaoList() {

    const { clientecontext } = useContext(ClienteContext)
    const setPage = useContext(PageAtendimentoContext)
    const { setPrescricaoMain } = useContext(PrescricaoMainContext)
    const [prescricoes, setPrescricoes] = useState([])

    const fetchData = useCallback(async () => {
        const res = await fetch(`http://localhost:4001/api.appmed/prescricoes/all/${clientecontext.id}`)
        const json = await res.json();
        setPrescricoes(json);
    }, [clientecontext])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return (
        <>
            <Box ml={2}>
                <Typography variant={'h6'}>Prescrições atuais</Typography>
            </Box>
            <List>
                {prescricoes && prescricoes.map(prescricao =>
                    prescricao.emuso && (
                        <div key={prescricao.id}>
                            <ListItem
                                onClick={() => setPrescricaoMain(prescricao)}
                            >
                                <ListItemText primary={prescricao.medicamento.farmaco} secondary={prescricao.apresentaco.descricao} />
                                <ListItemSecondaryAction>
                                    <IconButton
                                        onClick={() => {
                                            setPrescricaoMain(prescricao.id)
                                            setPage('prescricaoupdate')
                                        }}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton
                                        onClick={() => {
                                            setPrescricaoMain(prescricao)
                                            setPage('prescricaodelete')
                                        }}
                                    >
                                        <HighlightOffIcon />
                                    </IconButton>
                                    <>
                                        {prescricao.lmeId !== null && '(LME)'}
                                    </>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider light />
                        </div>
                    )
                )}
                <ListItem disabled>Porta ac consectetur ac</ListItem>
            </List>
            <Typography variant={'h6'}>Fez uso</Typography>
            <List>
                {prescricoes && prescricoes.map(prescricao =>
                    !prescricao.emuso && (
                        <div key={prescricao.id}>
                            <ListItem
                                onClick={() => setPrescricaoMain(prescricao)}
                                dense
                            >
                                <ListItemText primary={prescricao.medicamento.farmaco} />
                                <ListItemSecondaryAction>
                                    <IconButton
                                        onClick={() => {
                                            setPrescricaoMain(prescricao)
                                            setPage('prescricaodelete')
                                        }}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                    <>
                                        {prescricao.lmeId !== null && '(LME)'}
                                    </>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider light />
                        </div>
                    )
                )}
                <ListItem disabled>Porta ac consectetur ac</ListItem>
            </List>
        </>
    )
}
