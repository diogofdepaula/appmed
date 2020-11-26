import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@material-ui/core';
import TextRotationNoneIcon from '@material-ui/icons/TextRotationNone';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../../..';

const PosologiaSet = () => {

    const { prescricaoEdit, setPrescricaoEdit, setStep,  medicamentoEdit, } = useContext(AtendimentoContext)

    const handleButton = () => {
        setPrescricaoEdit(prescricaoEdit)
        setStep(32)
    }

    return (
        <>
            <Typography variant={'h6'}>Escolha uma Posologia</Typography>
            <Box mt={1}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                        {medicamentoEdit?.posologias?.map(posologia =>
                            //{medicamentoEdit && medicamentoEdit.posologias && medicamentoEdit.posologias.map(posologia =>
                                <TableRow
                                    key={posologia.id}
                                    onClick={() => {
                                        setPrescricaoEdit({
                                            ...prescricaoEdit,
                                            usoposologiapadrao: true,
                                            posologiaId: posologia.id
                                        })
                                        setStep(41)
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        <>
                                            {prescricaoEdit.posologiaId === posologia.id && <Typography>(opção atual)</Typography>}
                                        </>
                                        {posologia.posologia}
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box mt={1}>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<TextRotationNoneIcon />}
                    onClick={handleButton}
                >
                    Usar posologia não padronizada
                    <>
                        {prescricaoEdit.posologiaId === null && <Typography>  (opção atual)</Typography>}
                    </>
                </Button>
            </Box>
        </>
    )
}
export default PosologiaSet