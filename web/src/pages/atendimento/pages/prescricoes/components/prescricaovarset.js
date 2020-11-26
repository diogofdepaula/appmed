import { Box, Button, Checkbox, FormControlLabel, Grid, TextField } from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { format } from 'date-fns';
import { parseISO } from 'date-fns';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../../..';

const PrescricaoVarSet = () => {

    const { prescricaoEdit, setPrescricaoEdit, medicamentoEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.name === 'continuo' ? target.checked : target.name === 'imprimirorientacoes' ? target.checked : target.value;
        setPrescricaoEdit({ ...prescricaoEdit, [name]: value })
    }

    const handleDataInicio = event => {
        setPrescricaoEdit({ ...prescricaoEdit, inicio: parseISO(event.target.value) })
    }

    const handleOrientacoes = () => {
        setPrescricaoEdit({
            ...prescricaoEdit,
            orientacoes: medicamentoEdit.orientacoes,
            imprimirorientacoes: true
        })
    }

    return (
        <>
            <Box display='flex'>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    color='primary'
                                    name="continuo"
                                    checked={prescricaoEdit.continuo}
                                    onChange={handleChange}
                                />}
                            label='Contínuo'
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    color='primary'
                                    name="imprimirorientacoes"
                                    checked={prescricaoEdit.imprimirorientacoes}
                                    onChange={handleChange}
                                />}
                            label='Imprimir orientações'
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            type="date"
                            name="inicio"
                            value={format(prescricaoEdit.inicio, "yyyy-MM-dd")}
                            onChange={(e) => handleDataInicio(e)}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<PostAddIcon />}
                            onClick={handleOrientacoes}
                        >
                            Padrão
                        </Button>
                    </Grid>
                </Grid>
            </Box >
            <Box>
                <TextField
                    fullWidth
                    multiline
                    variant='outlined'
                    rows={4}
                    name="orientacoes"
                    label="Orientações adicionais"
                    value={prescricaoEdit.orientacoes}
                    onChange={handleChange}
                />
            </Box>

            {/* <Box mt={1}>
                <Button
                    variant="contained"
                    onClick={() => {
                        setPrescricaoEdit(prescricaoEdit)
                        setStep(0)
                    }}
                >{!prescricaoEdit.id ? 'Encerrar' : 'Atualizar'}
                </Button>
                <Button
                    className="ml-2"
                    disabled={!prescricaoEdit.lme}
                    variant="contained"
                    onClick={() => {
                        setPrescricaoEdit(prescricaoEdit)
                        setStep(51)
                    }}
                >{!prescricaoEdit.id ? 'Vincular a uma LME' : 'Editar LME'}
                </Button>
            </Box> */}
        </>
    )
}

export default PrescricaoVarSet