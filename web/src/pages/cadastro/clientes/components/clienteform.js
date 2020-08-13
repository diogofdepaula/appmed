import { Box, FormControlLabel, Grid, Radio, RadioGroup, TextField } from '@material-ui/core';
import React, { useContext } from 'react';
import { ClienteContext } from '..';

export default function ClienteForm() {

    const { cliente, setCliente } = useContext(ClienteContext)

    const handleChange = event => {
        setCliente({ ...cliente, [event.target.name]: event.target.value })
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid container spacing={2} >
                    <Grid item xs={9} >
                        <TextField
                            autoFocus
                            fullWidth
                            name="nome"
                            label="Nome completo"
                            value={cliente.nome}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <RadioGroup aria-label="gender" name="gender" onChange={handleChange}>
                            <Box display="flex" >
                                <FormControlLabel
                                    name='sexo'
                                    value="feminino"
                                    control={<Radio />}
                                    checked={cliente.sexo === "feminino"}
                                    label="Feminino"
                                />
                                <FormControlLabel
                                    name='sexo'
                                    value="masculino"
                                    control={<Radio />}
                                    checked={cliente.sexo === "masculino"}
                                    label="Masculino"
                                />
                            </Box>
                        </RadioGroup>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <TextField
                            name="nascimento"
                            label="Data de Nascimento"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={cliente.nascimento}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            name="peso"
                            label="Peso(Kg)"
                            value={cliente.peso}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            name="altura"
                            label="Altura(cm)"
                            value={cliente.altura}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            name="telefone"
                            label="Telefone"
                            value={cliente.telefone}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            name="celular"
                            label="Celular"
                            value={cliente.celular}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <TextField
                            fullWidth
                            name="cns"
                            label="CNS"
                            value={cliente.cns}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            fullWidth
                            name="cpf"
                            label="CPF"
                            value={cliente.cpf}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            fullWidth
                            name="email"
                            label="Email"
                            value={cliente.email}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs sm>
                        <TextField
                            fullWidth
                            name="mae"
                            label="Nome da Mãe"
                            value={cliente.mae}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            fullWidth
                            name="endereco"
                            label="Endereço"
                            value={cliente.enderecoe}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}


