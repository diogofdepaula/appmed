import { Box, List, ListItem, ListItemText, TextField, Typography } from '@material-ui/core'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { PrescricaoEditorContext } from '../editor'

export default function MedicamentoSet() {

    const { prescricaoContext, setPrescricaoContext, setStepContext } = useContext(PrescricaoEditorContext)
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

    return (
        <>
            <Typography variant={'h6'}>Escolha o fármaco</Typography>
            <Box mt={1} mb={1}>
                <TextField
                    fullWidth
                    autoFocus
                    variant='outlined'
                    label='Digite o nome do fármaco'
                    onChange={filterMedicamento}
                />
            </Box>
            <Box mt={1} >
                <List className="mt-2">
                    {medicamentosfiltrados.map((medicamento, index) =>
                        <ListItem
                            key={index}
                            onClick={() => {
                                setPrescricaoContext({ ...prescricaoContext, medicamentoId: medicamento.id })
                                setStepContext(21)
                            }}
                        >
                            <ListItemText primary={medicamento.abreviatura ? medicamento.farmaco + ' (' + medicamento.abreviatura + ')' : medicamento.farmaco} />
                        </ListItem>
                    )}
                </List>
            </Box>
        </>
    )
}
