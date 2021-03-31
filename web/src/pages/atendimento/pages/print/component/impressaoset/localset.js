import { Box, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import React, { useContext } from 'react';
import { ImpressaoContext } from '../../../..';

const LocalSet = () => {

    const { impressao, setImpressao } = useContext(ImpressaoContext)

    const handleChange = (event) => {
        setImpressao({ ...impressao, local: event.target.value })
    }

    return (
        <>
            <Box mt={1}>
                <RadioGroup row value={impressao.local} onChange={handleChange}>
                    <FormControlLabel value="consultorio" control={<Radio />} label="Consultório" />
                    <FormControlLabel value="cisgap" control={<Radio />} label="CISGAP" />
                    <FormControlLabel value="cisco" control={<Radio />} label="CISCO" />
                </RadioGroup>
            </Box>
        </>
    )
}

export default LocalSet