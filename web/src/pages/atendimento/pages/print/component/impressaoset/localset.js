import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import React, { useContext } from 'react';
import { ImpressaoContext } from '../../../..';

const LocalSet = () => {

    const { impressao, setImpressao } = useContext(ImpressaoContext)

    const handleChange = (event) => {
        setImpressao({ ...impressao, [event.target.name]: event.target.value })
    }

    return (
        <>
            <RadioGroup row value={impressao.local} onChange={handleChange}>
                <FormControlLabel value="consultorio" control={<Radio />} label="Consultório" />
                <FormControlLabel value="cisgap" control={<Radio />} label="CISGAP" />
                <FormControlLabel value="cisco" control={<Radio />} label="CISCO" />
            </RadioGroup>
        </>
    )
}

export default LocalSet