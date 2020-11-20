import { Box, Divider, Grid, List, ListItem, ListItemText } from '@material-ui/core';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AtendimentoContext } from '../../..';
import { ClienteContext } from '../../../../../App';
import Reorder from '../../../component/reorder';
import PrescricaoData from '../components/prescricaodata';

const PrescricaoMain = () => {

    const { clientecontext } = useContext(ClienteContext)
    const { prescricaoOnDuty, setPrescricaoOnDuty } = useContext(AtendimentoContext)

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
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    {/* <Box mt={1} display="flex" justifyContent="center">
                        <Typography variant={'h6'}>Prescrições</Typography>
                    </Box> */}
                    <Box ml={1}>
                        <List>
                            {prescricoes && Reorder(prescricoes).map(prescricao =>
                                <div key={prescricao.id}>
                                    <ListItem
                                        disabled={!prescricao.emuso}
                                        onClick={() => setPrescricaoOnDuty(prescricao)}
                                    >
                                        <ListItemText primary={prescricao.medicamento.farmaco} secondary={prescricao.apresentaco.descricao} />
                                    </ListItem>
                                    <Divider light />
                                </div>
                            )}
                            <ListItem disabled>Porta ac consectetur ac</ListItem>
                        </List>
                    </Box>
                </Grid>
                <Grid item>
                    <Divider orientation="vertical" flexItem />
                </Grid>
                <Grid item xs>
                    {prescricaoOnDuty && <PrescricaoData />}
                </Grid>
            </Grid>
        </>
    )
}

export default PrescricaoMain