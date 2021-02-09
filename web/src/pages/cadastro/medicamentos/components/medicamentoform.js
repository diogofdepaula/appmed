import { FormControl, FormControlLabel, FormGroup, Grid, InputLabel, Select, Switch, TextField } from '@material-ui/core';
import React, { useContext } from 'react';
import { MedicamentosContext } from '..';
import Classes from './classes';

const MedicamentoForm = () => {

    const { medicamentoEdit, setMedicamentoEdit } = useContext(MedicamentosContext)

    const handleChange = event => {
        setMedicamentoEdit({ ...medicamentoEdit, [event.target.name]: event.target.value })
    }

    const handleChangeCheck = event => {
        setMedicamentoEdit({ ...medicamentoEdit, [event.target.name]: event.target.checked })
    }

    const classes = Classes()
    
    //     farmaco: '',
    //     orientacoes: '',
    //     abreviatura: '',
    //     lme: '',
    //     controlado: '',
    //     favorito: '',
    //     classe: '',
    //     nomescomerciais: [nc],
    //     apresentacoes: [ap],
    //     posologias: [pp]

    return (
        <>
            <Grid container spacing={2} >
                <Grid container item spacing={2} >
                    <Grid item xs={10} >
                        <TextField
                            autoFocus
                            fullWidth
                            name="farmaco"
                            label="Nome do fármaco"
                            variant="outlined"
                            value={medicamentoEdit.farmaco}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            fullWidth
                            name="abreviatura"
                            label="Abreviatura"
                            variant="outlined"
                            value={medicamentoEdit.abreviatura}
                            onChange={handleChange}
                        />



                        {/* <RadioGroup aria-label="gender" name="gender" onChange={handleChange}>
                            <Box display="flex" >
                                <FormControlLabel
                                    name='sexo'
                                    value="feminino"
                                    control={<Radio />}
                                    checked={clienteEdit.sexo === "feminino"}
                                    label="Feminino"
                                    variant="outlined"
                                />
                                <FormControlLabel
                                    name='sexo'
                                    value="masculino"
                                    control={<Radio />}
                                    checked={clienteEdit.sexo === "masculino"}
                                    label="Masculino"
                                    variant="outlined"
                                />
                            </Box>
                        </RadioGroup> */}
                    </Grid>
                </Grid>
                <Grid container item spacing={2} >
                    <Grid item xs={6}>
                        <FormGroup row>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={medicamentoEdit.lme}
                                        onChange={handleChangeCheck}
                                        name="lme"
                                        color="primary"
                                    />
                                }
                                label="LME"
                            />
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={medicamentoEdit.controlado}
                                        onChange={handleChangeCheck}
                                        name="controlado"
                                        color="primary"
                                    />
                                }
                                label="Controlado"
                            />
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={medicamentoEdit.favorito}
                                        onChange={handleChangeCheck}
                                        name="favorito"
                                        color="primary"
                                    />
                                }
                                label="Favorito"
                            />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-age-native-simple">Classe</InputLabel>
                            <Select
                                native
                                value={medicamentoEdit.classes}
                                onChange={handleChange}
                                label="Classe"
                                inputProps={{
                                    name: 'classe',
                                    id: 'outlined-age-native-simple',
                                  }}
                            >
                                <option aria-label="None" value="" />
                                {classes.map((c, i) =>
                                    <option key={i} value={c}>{c}</option>
                                )}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                {/* <Grid container item spacing={2}>
                    <Grid item xs>
                        <TextField
                            name="nascimento"
                            label="Data de Nascimento"
                            type="date"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={clienteEdit.nascimento}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            name="peso"
                            variant="outlined"
                            label="Peso(Kg)"
                            value={clienteEdit.peso}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            name="altura"
                            variant="outlined"
                            label="Altura(cm)"
                            value={clienteEdit.altura}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            name="telefone"
                            variant="outlined"
                            label="Telefone"
                            value={clienteEdit.telefone}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            name="celular"
                            variant="outlined"
                            label="Celular"
                            value={clienteEdit.celular}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid> */}
                {/* <Grid container item spacing={2}>
                    <Grid item xs>
                        <TextField
                            fullWidth
                            name="cns"
                            variant="outlined"
                            label="CNS"
                            value={clienteEdit.cns}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            fullWidth
                            name="cpf"
                            variant="outlined"
                            label="CPF"
                            value={clienteEdit.cpf}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            fullWidth
                            name="email"
                            variant="outlined"
                            label="Email"
                            value={clienteEdit.email}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
                <Grid container item spacing={2}>
                    <Grid item xs sm>
                        <TextField
                            fullWidth
                            name="mae"
                            variant="outlined"
                            label="Nome da Mãe"
                            value={clienteEdit.mae}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            fullWidth
                            variant="outlined"
                            name="endereco"
                            label="Endereço"
                            value={clienteEdit.endereco}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid> */}
            </Grid>
        </>
    )
}

export default MedicamentoForm