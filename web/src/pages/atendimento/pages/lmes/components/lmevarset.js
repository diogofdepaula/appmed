import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../../..';

const LMEVarSet = () => {

    const { lmeEdit, setLmeEdit } = useContext(AtendimentoContext)

    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setLmeEdit({ ...lmeEdit, [name]: value })
    }

    // console.log('lmeEdit.tratamentoprevio', lmeEdit.tratamentoprevio)
    // const [teste, setTeste] = useState(lmeEdit.tratamentoprevio)

    // const handleChangeTeste = (event) => {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;

    //     setTeste( value )
    // }

    console.log(lmeEdit.tratamentoprevio)

    return (
        <>
            <Box m={2}>
                <Box mb={2}>
                    <TextField
                        fullWidth
                        multiline
                        variant='outlined'
                        rows={4}
                        name="anamnese"
                        label="História clínica (Anamnese e tratamento prévio)"
                        InputLabelProps={{
                            shrink: true,
                        }}
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
                                <FormGroup row>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                color='primary'
                                                name="tratamentoprevio"
                                                //tiver que fazer isso, pois ele vem como undefined na primeira renderização
                                                // e na segunda o false vem como '' (uma string vazia), então dá erro
                                                checked={lmeEdit.tratamentoprevio === true ? true : false} 
                                                onChange={handleChange}
                                            />}
                                        label='Tratamento Prévio'
                                    />
                                </FormGroup>
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
                                            value={lmeEdit.atestadocapacidade}
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