import { Box, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
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
                    <Box ml={1} mt={1}>
                        <TableContainer component={Paper} >
                            <Table>
                                <TableBody>
                                {prescricoes && Reorder(prescricoes).filter(x => x.emuso).map(prescricao =>
                                    <TableRow 
                                    key={prescricao.id}
                                    onClick={() => setPrescricaoOnDuty(prescricao)}
                                    >
                                        <TableCell component="th" scope="row">
                                        {prescricao.medicamento.farmaco} - {prescricao.apresentaco.descricao}
                                        </TableCell> 
                                    </TableRow>
                                )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                    <Box ml={1} mt={1}>
                        <TableContainer component={Paper} >
                            <Table>
                                <TableBody>
                                {prescricoes && Reorder(prescricoes).filter(x => !x.emuso).map(prescricao =>
                                    <TableRow 
                                    key={prescricao.id}
                                    onClick={() => setPrescricaoOnDuty(prescricao)}
                                    >
                                        <TableCell component="th" scope="row">
                                        {prescricao.medicamento.farmaco} - interrompido
                                        </TableCell> 
                                    </TableRow>
                                )}
                                </TableBody>
                            </Table>
                        </TableContainer>
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