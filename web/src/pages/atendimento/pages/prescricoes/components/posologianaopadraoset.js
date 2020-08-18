import { Box, Button, TextField, Typography, Grid } from '@material-ui/core'
import React, { useContext } from 'react'
import { PrescricaoEditorContext } from '../editor'

export default function PosologiaNaoPadraoSet(props) {

    const { prescricaoContext, setPrescricaoContext, setStepContext } = useContext(PrescricaoEditorContext)

    const handleChange = event => {
        setPrescricaoContext({
            ...prescricaoContext,
            usoposologiapadrao: false,
            posologiaId: null,
            [event.target.name]: event.target.value
        })
    }

    return (
        <>
            <Typography variant={'h6'}>Defina uma Posologia Não Padronizada</Typography>
            <Box>
                <TextField
                    fullWidth
                    multiline
                    rows={4}
                    name="posologianaopadrao"
                    label='Posologia não padronizada'
                    value={prescricaoContext.posologianaopadrao}
                    onChange={handleChange}
                />
            </Box>
            <Box display='flex' mt={1}>
                <Grid container spacing={2}>
                    <Grid item>
                        <TextField
                            name="quantidadenaopadrao"
                            label="Quantidade"
                            value={prescricaoContext.quantidadenaopadrao}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            name="formanaopadrao"
                            label="Forma"
                            value={prescricaoContext.formanaopadrao}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box mt={1}>
                <Button
                    variant='outlined'
                    onClick={() => {
                        setPrescricaoContext(prescricaoContext)
                        setStepContext(41)
                    }}
                >Usar posologia não padronizada
                </Button>
            </Box>
        </>
    )
}