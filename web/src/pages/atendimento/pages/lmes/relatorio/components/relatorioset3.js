import { Box, Chip, Grid, TextField } from '@material-ui/core'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AtendimentoContext } from '../../../..'
import { ClienteContext } from '../../../../../../App'

const RelatorioSet3 = () => {

    const { clientecontext } = useContext(ClienteContext)
    const { lmeEdit, setLmeEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        setLmeEdit({ ...lmeEdit, relatorio: { ...lmeEdit.relatorio, [event.target.name]: event.target.value } })
    }

    const indices = [
        [

            ['medicamento1', lmeEdit.relatorio.medicamento1],
            ['dose1', lmeEdit.relatorio.dose1],
            ['inicio1', lmeEdit.relatorio.inicio1],
            ['fim1', lmeEdit.relatorio.fim1],
            ['motivo1', lmeEdit.relatorio.motivo1],
        ],
        [

            ['medicamento2', lmeEdit.relatorio.medicamento2],
            ['dose2', lmeEdit.relatorio.dose2],
            ['inicio2', lmeEdit.relatorio.inicio2],
            ['fim2', lmeEdit.relatorio.fim2],
            ['motivo2', lmeEdit.relatorio.motivo2],
        ],
        [

            ['medicamento3', lmeEdit.relatorio.medicamento3],
            ['dose3', lmeEdit.relatorio.dose3],
            ['inicio3', lmeEdit.relatorio.inicio3],
            ['fim3', lmeEdit.relatorio.fim3],
            ['motivo3', lmeEdit.relatorio.motivo3],
        ],
        [

            ['medicamento4', lmeEdit.relatorio.medicamento4],
            ['dose4', lmeEdit.relatorio.dose4],
            ['inicio4', lmeEdit.relatorio.inicio4],
            ['fim4', lmeEdit.relatorio.fim4],
            ['motivo4', lmeEdit.relatorio.motivo4],
        ],
        [

            ['medicamento5', lmeEdit.relatorio.medicamento5],
            ['dose5', lmeEdit.relatorio.dose5],
            ['inicio5', lmeEdit.relatorio.inicio5],
            ['fim5', lmeEdit.relatorio.fim5],
            ['motivo5', lmeEdit.relatorio.motivo5],
        ],
        [

            ['medicamento6', lmeEdit.relatorio.medicamento6],
            ['dose6', lmeEdit.relatorio.dose6],
            ['inicio6', lmeEdit.relatorio.inicio6],
            ['fim6', lmeEdit.relatorio.fim6],
            ['motivo6', lmeEdit.relatorio.motivo6],
        ],
        [

            ['medicamento7', lmeEdit.relatorio.medicamento7],
            ['dose7', lmeEdit.relatorio.dose7],
            ['inicio7', lmeEdit.relatorio.inicio7],
            ['fim7', lmeEdit.relatorio.fim7],
            ['motivo7', lmeEdit.relatorio.motivo7],
        ],
    ]

    const [prescricoes, setPrescricoes] = useState([])

    const fetchData = useCallback(async () => {
        const res = await fetch(`http://localhost:4001/api.appmed/prescricoes/all/${clientecontext.id}`)
        const json = await res.json();
        setPrescricoes(json);
    }, [clientecontext])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    const handleChip = param => () => {

        let num = [
            lmeEdit.relatorio.medicamento1,
            lmeEdit.relatorio.medicamento2,
            lmeEdit.relatorio.medicamento3,
            lmeEdit.relatorio.medicamento4,
            lmeEdit.relatorio.medicamento5,
            lmeEdit.relatorio.medicamento6,
            lmeEdit.relatorio.medicamento7
        ].findIndex(x => x === '') + 1;

        console.log(num)

        switch (num) {
            case 1:
                setLmeEdit({
                    ...lmeEdit, relatorio: {
                        ...lmeEdit.relatorio,
                        medicamento1: param.medicamento.farmaco,
                        dose1: 'padrão',
                        inicio1: param.inicio,
                        fim1: param.termino,
                        motivo1: param.motivotermico,
                    }
                })
                break;
            case 2:
                setLmeEdit({
                    ...lmeEdit, relatorio: {
                        ...lmeEdit.relatorio,
                        medicamento2: param.medicamento.farmaco,
                        dose2: 'padrão',
                        inicio2: param.inicio,
                        fim2: param.termino,
                        motivo2: param.motivotermico,
                    }
                })
                break;
            case 3:
                setLmeEdit({
                    ...lmeEdit, relatorio: {
                        ...lmeEdit.relatorio,
                        medicamento3: param.medicamento.farmaco,
                        dose3: 'padrão',
                        inicio3: param.inicio,
                        fim3: param.termino,
                        motivo3: param.motivotermico,
                    }
                })
                break;
            case 4:
                setLmeEdit({
                    ...lmeEdit, relatorio: {
                        ...lmeEdit.relatorio,
                        medicamento4: param.medicamento.farmaco,
                        dose4: 'padrão',
                        inicio4: param.inicio,
                        fim4: param.termino,
                        motivo4: param.motivotermico,
                    }
                })
                break;
            case 5:
                setLmeEdit({
                    ...lmeEdit, relatorio: {
                        ...lmeEdit.relatorio,
                        medicamento5: param.medicamento.farmaco,
                        dose5: 'padrão',
                        inicio5: param.inicio,
                        fim5: param.termino,
                        motivo5: param.motivotermico,
                    }
                })
                break;
            case 6:
                setLmeEdit({
                    ...lmeEdit, relatorio: {
                        ...lmeEdit.relatorio,
                        medicamento6: param.medicamento.farmaco,
                        dose6: 'padrão',
                        inicio6: param.inicio,
                        fim6: param.termino,
                        motivo6: param.motivotermico,
                    }
                })
                break;
            case 7:
                setLmeEdit({
                    ...lmeEdit, relatorio: {
                        ...lmeEdit.relatorio,
                        medicamento7: param.medicamento.farmaco,
                        dose7: 'padrão',
                        inicio7: param.inicio,
                        fim7: param.termino,
                        motivo7: param.motivotermico,
                    }
                })
                break;

            default:
                break;
        }
    }

    return (
        <>
            <Box m={2}>
                <Box mt={2}>
                    <Grid container justify="flex-start" spacing={1}>
                        {prescricoes?.filter(p => !p.emuso).map(x =>
                            <Grid item key={x.id}>
                                <Chip
                                    label={x.medicamento.farmaco}
                                    clickable
                                    color="primary"
                                    variant="outlined"
                                    onClick={handleChip(x)}
                                />
                            </Grid>
                        )}
                    </Grid>
                </Box>
                <Box mt={2}>
                    {indices.map((z, index) =>
                        <Grid container key={index} spacing={2}>
                            <Grid container item spacing={1}>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        variant='outlined'
                                        name={z[0][0]}
                                        label='Medicamento'
                                        value={z[0][1]}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <TextField
                                        fullWidth
                                        variant='outlined'
                                        name={z[1][0]}
                                        label='Dose'
                                        value={z[1][1]}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <TextField
                                        fullWidth
                                        variant='outlined'
                                        name={z[2][0]}
                                        label='Início'
                                        value={z[2][1]}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <TextField
                                        fullWidth
                                        variant='outlined'
                                        name={z[3][0]}
                                        label='Fim'
                                        value={z[3][1]}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        variant='outlined'
                                        name={z[4][0]}
                                        label='Motivo'
                                        value={z[4][1]}
                                        onChange={handleChange}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    )}
                </Box>
            </Box>
        </>
    )
}

export default RelatorioSet3

