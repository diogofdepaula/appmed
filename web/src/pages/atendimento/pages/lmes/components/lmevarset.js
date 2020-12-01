import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, FormControlLabel, TextField, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../../..';

const LMEVarSet = () => {

    const { lmeEdit, setLmeEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.name === 'tratamentoprevio' ? target.checked : target.name === 'atestadocapacidade' ? target.checked : target.value;;
        setLmeEdit({ ...lmeEdit, [name]: value })
    }

    return (
        <>
            <Box m={2}>
                <Box mb={2}>
                    <TextField
                        fullWidth
                        multiline
                        variant='outlined'
                        rows={4}
                        id="anamnese"
                        name="anamnese"
                        label="História clínica (Anamnese e tratamento prévio)"
                        value={lmeEdit.anamnese}
                        onChange={handleChange}
                    />
                </Box>
                <Accordion square>
                    <AccordionSummary>
                        <Typography>Editar outras variáveis</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box display="block">
                            <Box>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            color='primary'
                                            name="tratamentoprevio"
                                            checked={lmeEdit.tratamentoprevio}
                                            onChange={handleChange}
                                        />}
                                    label='Tratamento Prévio'
                                />
                                {lmeEdit.tratamentoprevio &&
                                    <TextField
                                        fullWidth
                                        variant='outlined'
                                        name="tratamentopreviotexto"
                                        label="Descrever tratamentos prévios"
                                        value={lmeEdit.tratamentopreviotexto}
                                        onChange={handleChange}
                                    />
                                }
                            </Box>
                            <Box>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            color='primary'
                                            name="atestadocapacidade"
                                            checked={lmeEdit.atestadocapacidade}
                                            onChange={handleChange}
                                        />}
                                    label='Atestado de capacidade'
                                />
                            </Box>
                            <Box>
                                <TextField
                                    variant='outlined'
                                    name="preenchidopor"
                                    label="Preenchido por"
                                    value={lmeEdit.preenchidopor}
                                    onChange={handleChange}
                                />
                                <TextField
                                    variant='outlined'
                                    name="preenchidoporCPF"
                                    label="CPF do preenchedor"
                                    value={lmeEdit.preenchidoporCPF}
                                    onChange={handleChange}
                                />
                                <TextField
                                    variant='outlined'
                                    name="raca"
                                    label="Raça"
                                    value={lmeEdit.raca}
                                    onChange={handleChange}
                                />
                            </Box>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </>
    )
}

export default LMEVarSet