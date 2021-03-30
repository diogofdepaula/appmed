import { Grid, Slider, TextField, Typography } from '@material-ui/core';
import { parseISO } from 'date-fns';
import React, { useContext } from 'react';
import { ImpressaoContext } from '../../../..';

const TempoSet = () => {

    const { impressao, setImpressao } = useContext(ImpressaoContext)

    const handleSliderChange = (event, newValue) => {
        setImpressao({ ...impressao, meses: newValue })
    }

    const handleDateChange = (event) => {
        setImpressao({ ...impressao, [event.target.name]: parseISO(event.target.value) })
    }

    return (
        <>
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
            <Grid>
                <TextField
                    type='date'
                    name='database'
                    onBlur={handleDateChange} //Não deixei onchange se não ele fica travando
                />
            </Grid>
        </>
    )
}

export default TempoSet