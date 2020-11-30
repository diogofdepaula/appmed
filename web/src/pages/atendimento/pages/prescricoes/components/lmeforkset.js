import { Box, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@material-ui/core';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AtendimentoContext } from '../../..';
import { ClienteContext } from '../../../../../App';

const LMEForkSet = () => {

    const { clientecontext } = useContext(ClienteContext)
    const { prescricaoEdit, setPrescricaoEdit, setStep, setPage, setLmeEdit } = useContext(AtendimentoContext)
    const [lmes, setlmes] = useState([])

    const fetchData = useCallback(async () => {
        const res = await fetch(`http://localhost:4001/api.appmed/lmes/allfit/${clientecontext.id}`)
        const json = await res.json();
        setlmes(json);
    }, [clientecontext])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    const handleTableRow = param => () => {
        setPrescricaoEdit({
            ...prescricaoEdit,
            lmeId: param.id
        })
        setLmeEdit(param)
        setPage('lmeupdate')
    }

    const handleNewLME = () => {
        console.log('teste')
        setPage('lmeinsert')
        
    }

    return (
        <>
            <Box mt={1}>
                <Paper
                    onClick={handleNewLME}
                >
                    <Typography variant="body1" color="initial">
                        <Box p={2}>Criar uma nova LME</Box>
                    </Typography>
                </Paper>
                <Divider />

                <Box mt={2}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableBody>
                                {lmes?.map(lme =>
                                    <TableRow
                                        key={lme.id}
                                        onClick={handleTableRow(lme)}
                                    >
                                        <TableCell component="th" scope="row">
                                            {lme.cid10 + ' - ' + lme.diagnostico}
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </>
    )
}

export default LMEForkSet