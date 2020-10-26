import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { PrescricaoEditorContext } from '../editor'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default function LMEDoses(props) {

    const { prescricaoContext, setPrescricaoContext, setStepContext } = useContext(PrescricaoEditorContext)
    const [indices, setIndices] = useState([])

    const funcaoTeste = useCallback(() => {
        setIndices([
            ['lmemes1', '1º mês', prescricaoContext.lmemes1],
            ['lmemes2', '2º mês', prescricaoContext.lmemes2],
            ['lmemes3', '3º mês', prescricaoContext.lmemes3],
            ['lmemes4', '4º mês', prescricaoContext.lmemes4],
            ['lmemes5', '5º mês', prescricaoContext.lmemes5],
            ['lmemes6', '6º mês', prescricaoContext.lmemes6]
        ])
    }, [prescricaoContext])

    useEffect(() => {
        funcaoTeste()
    }, [funcaoTeste])

    const handleChange = event => {
        setPrescricaoContext({ ...prescricaoContext, [event.target.name]: event.target.value })
    }

    const nextStep = () => {
        setPrescricaoContext(prescricaoContext)
        if (prescricaoContext.lmeId) {
            setStepContext(1) // manda para o lmeupdate
        } else {
            setStepContext(61) // continua a edição
        }
    }

    return (
        <>
            <Typography variant={'h5'}>Doses referente a cada mês</Typography>
            <Box>
                <Grid container spacing={5} nowrap >
                {indices && indices.map((w, i) =>
                    <Grid item xs key={i}> 
                        <TextField
                            size='small'
                            key={w[0]}
                            name={w[0]}
                            label={w[1]}
                            value={w[2]}
                            onChange={handleChange}
                        />
                    </Grid>
                )}
                </Grid>
            </Box>
            <Box mt={2}>
                <Button
                    onClick={() => nextStep()}
                    endIcon={<NavigateNextIcon />}
                > Próximo
                    </Button>
            </Box>
        </>
    )
}

