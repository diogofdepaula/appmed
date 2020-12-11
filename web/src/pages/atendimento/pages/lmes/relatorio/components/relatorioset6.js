import { Box, Grid, TextField } from '@material-ui/core'
import React, { useContext } from 'react'
import { AtendimentoContext } from '../../../..'

const RelatorioSet6 = () => {

    const { lmeEdit, setLmeEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        setLmeEdit({ ...lmeEdit, relatorio: { ...lmeEdit.relatorio, [event.target.name]: event.target.value } })
    }
    
    const indices = [
        ['das28', lmeEdit.relatorio.das28],
        ['cdai', lmeEdit.relatorio.cdai],
        ['sdai', lmeEdit.relatorio.sdai],
        ['basdai', lmeEdit.relatorio.basdai],
        ['asdas', lmeEdit.relatorio.asdas],
        ['mda', lmeEdit.relatorio.mda],
        ['eva', lmeEdit.relatorio.eva],
    ]

    return (
        <>
            <Box m={2}>
                <Grid container spacing={1}>
                    {indices?.map((w) =>
                        <Grid item xs>
                            <TextField
                                fullWidth
                                variant='outlined'
                                name={w[0]}
                                label={w[0].toLocaleUpperCase()}
                                value={w[1]}
                                onChange={handleChange}
                            />
                        </Grid>
                    )}
                </Grid>
            </Box>
        </>
    )
}

export default RelatorioSet6
