import { Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Tooltip } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useContext } from 'react';
import { MedicamentosContext } from '..';

const NomeComercialForm = () => {

    const { medicamentoEdit, setMedicamentoEdit } = useContext(MedicamentosContext)

    const handleAdd = () => {

        let ncnomefantasia = document.getElementById('nomefantasia')

        setMedicamentoEdit({
            ...medicamentoEdit,
            nomescomerciais: [
                ...medicamentoEdit.nomescomerciais, {
                    nomefantasia: ncnomefantasia.value,
                }]
        })

        ncnomefantasia.value = ""
    }

    const handleDelete = param => () => {

        setMedicamentoEdit({
            ...medicamentoEdit,
            nomescomerciais: medicamentoEdit.nomescomerciais.filter((w, index) => index !== param)
        })
    }

    return (
        <>
            <Grid container item spacing={2} >
                <Grid item xs>
                    {medicamentoEdit.nomescomerciais &&
                        <TableContainer component={Paper} >
                            <Table>
                                <TableBody>
                                    {medicamentoEdit.nomescomerciais?.map((nc, i) =>
                                        <TableRow key={i}>
                                            <TableCell component="th" scope="row">
                                                {nc.nomefantasia}
                                            </TableCell>
                                            <TableCell align="right">
                                                <Tooltip title="Excluir">
                                                    <span>
                                                        <IconButton
                                                            onClick={handleDelete(i)}
                                                        >
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </span>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    }
                </Grid>
                <Grid container item>
                    <Grid container item spacing={1} xs={11}>
                        <Grid item xs>
                            <TextField
                                fullWidth
                                id="nomefantasia"
                                label="Nome de fantasia"
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={1}>
                        <Tooltip title="Adicionar">
                            <span>
                                <IconButton
                                    onClick={handleAdd}
                                >
                                    <ArrowUpwardIcon />
                                </IconButton>
                            </span>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default NomeComercialForm