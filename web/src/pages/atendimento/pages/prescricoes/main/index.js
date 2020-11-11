import { Box, Divider, Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { PageAtendimentoContext, PrescricaoMainContext } from '../../..';
import { ClienteContext } from '../../../../../App';
import PrescricoesAppBar from '../components/appbar';
import PrescricaoData from '../components/prescricaodata';

export default function PrescricaoMain() {

    const { clientecontext } = useContext(ClienteContext)
    //const setPage = useContext(PageAtendimentoContext)
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
    ;;$$

    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Box mt={1} display="flex" justifyContent="center">
                        <Typography variant={'h6'}>Prescrições atuais</Typography>
                    </Box>
                    <Box ml={1}>
                        <List>
                            {prescricoes && prescricoes.map(prescricao =>
                                prescricao.emuso && (
                                    <div key={prescricao.id}>
                                        <ListItem
                                            onClick={() => setPrescricaoMain(prescricao)}
                                        >
                                            <ListItemText primary={prescricao.medicamento.farmaco} secondary={prescricao.apresentaco.descricao} />
                                        </ListItem>
                                        <Divider light />
                                    </div>
                                )
                            )}
                            <ListItem disabled>Porta ac consectetur ac</ListItem>
                        </List>
                    </Box>
                    {/* <Typography variant={'h6'}>Fez uso</Typography>
                    <List>
                        {prescricoes && prescricoes.map(prescricao =>
                            !prescricao.emuso && (
                                <div key={prescricao.id}>
                                    <ListItem
                                        onClick={() => setPrescricaoMain(prescricao)}
                                        dense
                                    >
                                        <ListItemText primary={prescricao.medicamento.farmaco} />
                                    </ListItem>
                                    <Divider light />
                                </div>
                            )
                        )}
                        <ListItem disabled>Porta ac consectetur ac</ListItem>
                    </List> */}
                </Grid>
                <Grid item>
                    <Divider orientation="vertical" flexItem />
                </Grid>
                <Grid item xs>
                    <PrescricoesAppBar />
                    <Divider />
                    <PrescricaoData />
                </Grid>
            </Grid>
        </>
    )
}