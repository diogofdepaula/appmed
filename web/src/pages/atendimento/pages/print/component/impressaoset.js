import React, { useContext, useCallback, useEffect, useState } from 'react'
import { Checkbox, FormControlLabel, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Radio, RadioGroup, Slider, TextField, Typography } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import PrintIcon from '@material-ui/icons/Print';
import TuneIcon from '@material-ui/icons/Tune';
import { ImpressaoContext } from '..';
import { ClienteContext } from '../..';
import { parseISO } from 'date-fns';

export default function ImpressaoSet(props) {

    const cliente = useContext(ClienteContext)
    const { impressao, setImpressao } = useContext(ImpressaoContext)
    const [prescricoes, setPrescricoes] = useState([])
    
    const fetchDataPrescricoes = useCallback(async () => {
        const res = await fetch(`http://localhost:4001/api.appmed/prescricoes/all/${cliente.id}`)
        const json = await res.json();
        setPrescricoes(json);
    }, [cliente])

    // const fetchDataLmes = useCallback(async () => {
    //     const res = await fetch(`http://localhost:4001/api.appmed/lmes/allfat/${cliente.id}`)
    //     const json = await res.json();
    //     setlmes(json);
    // }, [])

    useEffect(() => {
        fetchDataPrescricoes();
        //fetchDataLmes();
    }, [fetchDataPrescricoes])


    const handleCheck = param => (event) => {

        if (event.target.checked) {
            setImpressao(prevState => ({
                ...prevState,
                prescricoesSelecionadas: prevState.prescricoesSelecionadas.concat(param),
            }))
        } else {
            setImpressao(prevState => ({
                ...prevState,
                prescricoesSelecionadas: prevState.prescricoesSelecionadas.filter(presc => presc.id !== param.id)
            }))
        }
    }

    const handleChange = (event) => {
        setImpressao({ ...impressao, [event.target.name]: event.target.value })
    }

    const handleSliderChange = (event, newValue) => {
        setImpressao({ ...impressao, meses: newValue })
    }

    const handleDateChange = (event) => {
        setImpressao({ ...impressao, [event.target.name]: parseISO(event.target.value) })
    }

    return (
        <>
            <Grid container item spacing={2}>
                <Grid container item xs={4} direction={'column'}>
                    <Grid item>
                        <Typography variant={'h6'}>Quais serão impressos</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <List dense style={{ overflow: 'auto', maxHeight: 300 }}>
                            {prescricoes && prescricoes.map(prescricao =>
                                prescricao.emuso &&
                                <ListItem key={prescricao.id}>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            onChange={handleCheck(prescricao)}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary={prescricao.medicamento.farmaco} secondary={prescricao.apresentaco.descricao} />
                                </ListItem>
                            )}
                        </List>
                    </Grid>
                </Grid>
                <Grid container item xs={4} direction={'column'}>
                    <Grid container item>
                        <Grid item>
                            <Typography id="discrete-slider" gutterBottom>Para quantos meses</Typography>
                            <Slider
                                defaultValue={1}
                                getAriaValueText={(value) => `${value} mês`}
                                //getAriaValueText={valuetext}
                                aria-labelledby="discrete-slider"
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={1}
                                max={6}
                                onChange={handleSliderChange}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item>
                        <Grid item >
                            <Typography id="local" gutterBottom>Local</Typography>
                            <RadioGroup aria-label="local" name="local" value={impressao.local} onChange={handleChange}>
                                <FormControlLabel value="consultorio" control={<Radio />} label="Consultório" />
                                <FormControlLabel value="cisgap" control={<Radio />} label="CISGAP" />
                                <FormControlLabel value="cisco" control={<Radio />} label="CISCO" />
                            </RadioGroup>
                        </Grid>
                    </Grid>
                    <Grid>
                        <TextField
                            type='date'
                            name='database'
                            onBlur={handleDateChange} //Não deixei onchange se não ele fica travando
                        />
                    </Grid>
                    <Grid>
                        {impressao.lme &&  // AINDA NÃO FIZ O REMOVE
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={impressao.lme}
                                        onChange={handleChange}
                                        name="lme"
                                    //color="primary"
                                    />
                                }
                                label="Imprimir LME"
                            />
                        }
                    </Grid>
                </Grid>
                <Grid container item xs={4} direction={'column'}>
                    <Grid item>
                        <Typography variant={'h6'}>Adicionar orientação a receita</Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                            name='comentario'
                            onBlur={handleChange} //Não deixei onchange se não ele fica travando
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <IconButton
                        onClick={props.handlePrint}
                    >
                        <PrintIcon />
                    </IconButton>
                    <IconButton>
                        <CancelIcon />
                    </IconButton>
                    <IconButton
                        onClick={() => props.setValidacao(true)}
                    >
                        <TuneIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </>
    )
}
