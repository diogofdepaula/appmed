import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField } from '@material-ui/core'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AtendimentoContext } from '../../..'

const MedicamentoSet = () => {

    const { prescricaoEdit, setPrescricaoEdit, setStep } = useContext(AtendimentoContext)
    
    const [medicamentos, setMedicamentos] = useState([])
    const [medicamentosfiltrados, setmedicamentosfiltrados] = useState([])

    const fetchData = useCallback(async () => {
        const res = await fetch('http://localhost:4001/api.appmed/medicamentos/short')
        const json = await res.json();
        setMedicamentos(json);
    }, [])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    const filterMedicamento = event => {

        if (event.target.value.length >= 2) {
            let filtro = [...medicamentos].filter(w =>
                w.farmaco.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1 ||
                w.abreviatura.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
            )
            if (filtro.length === 0) {
                filtro.push({
                    id: 0,
                    farmaco: "nenhum medicamento encontrado"
                })
            }
            setmedicamentosfiltrados(filtro)
        } else {
            setmedicamentosfiltrados([])
        }
    }

    const handleTableRow = param => () => {
         setPrescricaoEdit({ ...prescricaoEdit, medicamentoId: param.id })
         setStep(21)
    }

    return (
        <>
            {/* <Typography variant={'h6'}>Escolha o fármaco</Typography> */}
            <Box mt={1} mb={1}>
                <TextField
                    fullWidth
                    //autoFocus
                    variant='outlined'
                    label='Digite o nome do fármaco'
                    onChange={filterMedicamento}
                />
            </Box>
            <Box mt={1}>
                {/* <List >
                    {medicamentosfiltrados.map((medicamento, index) =>
                        <ListItem
                            key={index}
                            onClick={handleListItem(medicamento)}
                        >
                            <ListItemText primary={medicamento.abreviatura ? medicamento.farmaco + ' (' + medicamento.abreviatura + ')' : medicamento.farmaco} />
                        </ListItem>
                    )}
                </List> */}
                <TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                        {medicamentosfiltrados.map((medicamento, index) =>
                            <TableRow 
                                key={index}
                                onClick={handleTableRow(medicamento)}
                            >
                                <TableCell component="th" scope="row">
                                {medicamento.abreviatura ? medicamento.farmaco + ' (' + medicamento.abreviatura + ')' : medicamento.farmaco}
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
export default MedicamentoSet