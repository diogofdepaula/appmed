import { Box, Button, Checkbox, FormControlLabel, Grid, TextField } from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../../..';

const PrescricaoVarSet = () => {

    const { prescricaoEdit, setPrescricaoEdit, setStep } = useContext(AtendimentoContext)

    const handleChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.name === 'continuo' ? target.checked : target.name === 'imprimirorientacoes' ? target.checked : target.value;
        setPrescricaoEdit({ ...prescricaoEdit, [name]: value })
    }

    const handleOrientacoes = async () => {
        const res = await fetch(`http://localhost:4001/api.appmed/medicamentos/${prescricaoEdit.medicamentoId}`)
        const json = await res.json();
        setPrescricaoEdit({
            ...prescricaoEdit,
            orientacoes: json.orientacoes,
            imprimirorientacoes: true
        })
    }

    return (
        <>
            <Box display='flex'>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="continuo"
                                    checked={prescricaoEdit.continuo}
                                    onChange={handleChange}
                                />}
                            label='Contínuo'
                        />
                        </Grid>
                        <Grid item xs={4}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="imprimirorientacoes"
                                        checked={prescricaoEdit.imprimirorientacoes}
                                        onChange={handleChange}
                                    />}
                                label='Imprimir orientações'
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                type="date"
                                name="inicio"
                                value={prescricaoEdit.inicio}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
            </Box >
                <Box>
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<PostAddIcon />}
                        onClick={handleOrientacoes}
                    >
                        Adicionar orientação padrão
                </Button>
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

                <Box mt={1}>
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
                </Box>
        </>
    )
}

export default PrescricaoVarSet