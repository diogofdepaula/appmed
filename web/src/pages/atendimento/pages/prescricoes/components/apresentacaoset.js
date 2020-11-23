import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@material-ui/core'
import React, { useCallback, useContext, useEffect } from 'react'
import { AtendimentoContext } from '../../..'
import { MedicamentoEditorContext } from '../editor'

const ApresentacaoSet = () => {

    const { prescricaoEdit, setPrescricaoEdit, setStep } = useContext(AtendimentoContext)
    const { medicamentoContext, setMedicamentoContext } = useContext(MedicamentoEditorContext)

    const fetchData = useCallback(async () => {
        const res = await fetch(`http://localhost:4001/api.appmed/medicamentos/${prescricaoEdit.medicamentoId}`)
        const json = await res.json();
        setMedicamentoContext(json)
    }, [prescricaoEdit, setMedicamentoContext])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    const handleTableRow = param => () => {
        setPrescricaoEdit({ ...prescricaoEdit, apresentacoId: param.id })
        setStep(31)
    }

    return (
        <>
            <Typography variant={'h6'}>Escolha uma Apresentação</Typography>
            <Box mt={1}>
                {/* <List>
                    {medicamentoContext && medicamentoContext.apresentacoes && medicamentoContext.apresentacoes.map(apresentacao =>
                        <ListItem
                            key={apresentacao.id}
                            onClick={handleListItem(apresentacao)}
                        >
                            <>
                                {prescricaoEdit.apresentacoId === apresentacao.id && <Typography>(opção atual)</Typography>}
                            </>
                            {apresentacao.descricao}
                        </ListItem>
                    )}
                </List> */}
                <TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                        {medicamentoContext && medicamentoContext.apresentacoes && medicamentoContext.apresentacoes.map(apresentacao =>
                            <TableRow 
                                key={apresentacao.id}
                                onClick={handleTableRow(apresentacao)}
                            >
                                <TableCell component="th" scope="row">
                                    <>
                                    {prescricaoEdit.apresentacoId === apresentacao.id && <Typography>(opção atual)</Typography>}
                                    </>
                                    {apresentacao.descricao}
                                </TableCell> 
                            </TableRow>
                        )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}

export default ApresentacaoSet