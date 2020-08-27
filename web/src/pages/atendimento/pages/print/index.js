import { Checkbox, FormControlLabel, Grid, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Radio, RadioGroup, Slider, Typography } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import PrintIcon from '@material-ui/icons/Print';
import React, { useCallback, useContext, useEffect, useRef, useState, createContext } from 'react';
import { useReactToPrint } from 'react-to-print';
import { ClienteContext, PageContext } from '..';
import ReceitaConsultorio from './components/consultorio/receitaconsultorio';
import ReceitaSUS from './components/sus/receitasus'

export const ImpressaoContext = createContext(null)

export default function Print() {

    const setPage = useContext(PageContext)
    const cliente = useContext(ClienteContext)
    const [prescricoes, setPrescricoes] = useState([])
    const [lmes, setlmes] = useState([])

    //variáveis para definir o que será impresso

    const [impressao, setImpressao] = useState({
        prescricoesSelecionadas: [],
        tipo: '', // simples, controlado
        meses: 1,
        local: 'consultorio', // consultorio, SUS (cisgap, cisco)
        lme: true,
        relatorio: true
    })

    // const [prescricoesSelecionadas, setPrescricoesSelecionadas] = useState([])
    // const [tipo, setTipo] = useState('') // simples, controlado
    // const [meses, setMeses] = useState(0)
    // const [local, setLocal] = useState('') // consultorio, cisgap, cisco
    // const [lme, setLme] = useState(true)
    // const [relatorio, setRelatorio] = useState(true)

    const fetchDataPrescricoes = useCallback(async () => {
        const res = await fetch(`http://localhost:4001/api.appmed/prescricoes/all/${cliente.id}`)
        const json = await res.json();
        setPrescricoes(json);
    }, [cliente])

    const fetchDataLmes = useCallback(async () => {
        const res = await fetch(`http://localhost:4001/api.appmed/lmes/allfat/${cliente.id}`)
        const json = await res.json();
        setlmes(json);
    }, [cliente])


    useEffect(() => {
        fetchDataPrescricoes();
        fetchDataLmes();
    }, [fetchDataPrescricoes, fetchDataLmes])

    const handleCheck = param => (event) => {

        if (event.target.checked) {
            setImpressao(prevState => ({
                ...prevState,
                prescricoesSelecionadas: prevState.prescricoesSelecionadas.concat(param)
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

    

    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        //pageStyle: '@page { size: A4 portrait;}'
        });

    const FilaImpressao = () => {

        //provavelmente não venha colocar ReceitaConsultorio aqui , mas depois de ter montado
        // aqui passar já pronto após montagem
        // Fazer do sus primeiro por ser A4
        // Testar Context se pega passando lá por baixo

        if (impressao.local === 'consultorio') {
            return (
                <ReceitaConsultorio />
            )
        } else {
            return (
                <ReceitaSUS />
            )
        }
    }

    return (
        <>
            {/* {JSON.stringify(impressao)} */}
            <Grid container>
                <Grid item xs={3}>
                    <Typography variant={'h6'}>Quais serão impressos</Typography>
                    <List dense>
                        {prescricoes && prescricoes.map(prescricao =>
                            <ListItem key={prescricao.id}>
                                <ListItemText primary={prescricao.medicamento.farmaco} secondary={prescricao.apresentaco.descricao} />
                                <ListItemSecondaryAction>
                                    <Checkbox
                                        edge="end"
                                        onChange={handleCheck(prescricao)}
                                    />
                                </ListItemSecondaryAction>
                            </ListItem>
                        )}
                    </List>
                </Grid>
                <Grid container item xs>
                    <Grid container>
                        <Grid item xs={3}>
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
                        <Grid item xs={3}>
                            <Typography id="local" gutterBottom>Local</Typography>
                            <RadioGroup aria-label="local" name="local" value={impressao.local} onChange={handleChange}>
                                <FormControlLabel value="consultorio" control={<Radio />} label="Consultório" />
                                <FormControlLabel value="sus" control={<Radio />} label="SUS" />
                            </RadioGroup>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item>
                    <ImpressaoContext.Provider value={impressao}>
                        <div style={{ display: "none" }}>
                            <div ref={componentRef} >
                                <FilaImpressao />
                            </div>
                        </div>
                    </ImpressaoContext.Provider>
                    <IconButton
                        onClick={handlePrint}
                    >
                        <PrintIcon />
                    </IconButton>
                    <IconButton>
                        <CancelIcon />
                    </IconButton>
                </Grid>
            </Grid>

        </>
    )
}