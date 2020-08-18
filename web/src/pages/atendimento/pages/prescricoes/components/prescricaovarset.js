import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { MedicamentoEditorContext, PrescricaoEditorContext } from '../editor'

export default function PrescricaoVarSet(props) {

    const { prescricaoContext, setPrescricaoContext, setStepContext } = useContext(PrescricaoEditorContext)
    const { medicamentoContext } = useContext(MedicamentoEditorContext)

    const handleChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.name === 'continuo' ? target.checked : target.name === 'imprimirorientacoes' ? target.checked : target.value;
        setPrescricaoContext({ ...prescricaoContext, [name]: value })
    }

    return (
        <>
            <Typography variant={'h5'}>Defina as outras variáveis</Typography>
            <Box>
                <Box display="flex">
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="continuo"
                                checked={prescricaoContext.continuo}
                                onChange={handleChange}
                            />}
                        label='Contínuo'
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="imprimirorientacoes"
                                checked={prescricaoContext.imprimirorientacoes}
                                onChange={handleChange}
                            />}
                        label='Imprimir orientações'
                    />
                    <TextField
                        type="date"
                        name="inicio"
                        value={prescricaoContext.inicio}
                        onChange={handleChange}
                    />
                </Box>
            </Box >
            <Box>
                <TextField
                    fullWidth
                    multiline
                    rows={4}
                    name="orientacoes"
                    label="Orientações adicionais"
                    value={prescricaoContext.orientacoes}
                    onChange={handleChange}
                />
            </Box>

            <Box mt={1}>
                <Button
                    variant="outline-primary"
                    onClick={() => {
                        setPrescricaoContext(prescricaoContext)
                        setStepContext(0)
                    }}
                >{!prescricaoContext.id ? 'Encerrar' : 'Atualizar'}
                </Button>
                <Button
                    className="ml-2"
                    disabled={!medicamentoContext.lme}
                    variant="outline-primary"
                    onClick={() => {
                        setPrescricaoContext(prescricaoContext)
                        setStepContext(51)
                    }}
                >{!prescricaoContext.id ? 'Vincular a uma LME' : 'Editar LME'}
                </Button>
            </Box>
        </>
    )
}