import { Button, List, ListItem, Typography, Box, TableContainer, Table, TableBody, TableRow, TableCell, Paper } from '@material-ui/core'
import React, { useContext } from 'react'
import { AtendimentoContext } from '../../..'
import { MedicamentoEditorContext, PrescricaoEditorContext } from '../editor'

const PosologiaSet = (props) => {

    const { prescricaoEdit, setPrescricaoEdit, setStep } = useContext(AtendimentoContext)
    const { medicamentoContext } = useContext(MedicamentoEditorContext)


    return (
        <>
            <Typography variant={'h6'}>Escolha uma Posologia</Typography>
            <Box mt={1}>
                {/* <List>
                    {medicamentoContext && medicamentoContext.posologias && medicamentoContext.posologias.map(posologia =>
                        <ListItem
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
                            <>
                                {prescricaoEdit.posologiaId === posologia.id && <Typography>(opção atual)</Typography>}
                            </>
                            {posologia.posologia}
                        </ListItem>
                    )}
                </List> */}
                <TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                        {medicamentoContext && medicamentoContext.posologias && medicamentoContext.posologias.map(posologia =>
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
                    color='secondary'
                    onClick={() => {
                        setPrescricaoEdit(prescricaoEdit)
                        setStep(32)
                    }}
                >Usar posologia não padronizada
                    <>
                        {prescricaoEdit.posologiaId === null && <Typography>  (opção atual)</Typography>}
                    </>
                </Button>
            </Box>
        </>
    )
}
export default PosologiaSet