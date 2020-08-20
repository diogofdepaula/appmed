import React, { useContext, useState, useCallback, useEffect } from 'react'
import { ClienteContext, PageContext } from '..'
import { Box, ListItemSecondaryAction, ListItemText, Checkbox, List, ListItem, Paper } from '@material-ui/core'

export default function Print() {

    const setPage = useContext(PageContext)
    const cliente = useContext(ClienteContext)
    const [prescricoes, setPrescricoes] = useState([])
    const [lmes, setlmes] = useState([])

    //variáveis para definir o que será impresso

    const [impressao, setimpressao] = useState({
        prescricoesSelecionadas: [],
        tipo: '', // simples, controlado
        meses: 0,
        local: '', // consultorio, cisgap, cisco
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
            console.log('checked')
        } else {
            console.log('unchecked')
        }


    }

    return (
        <>
            <Box display='flex'>
                <Box border={3}>
                    <List>
                        {prescricoes && prescricoes.map(prescricao =>
                            <ListItem key={prescricao.id}>
                                <ListItemText primary={prescricao.medicamento.farmaco} secondary={prescricao.apresentaco.descricao} />
                                <ListItemSecondaryAction>
                                    <Checkbox
                                        edge="end"
                                        onChange={handleCheck(prescricao)}
                                    //checked={checked.indexOf(value) !== -1}
                                    //inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemSecondaryAction>
                            </ListItem>
                        )}
                    </List>
                </Box>
                <Box border={3}>
                    <Paper>
                        Só para fazer volume
                    </Paper>
                </Box>
            </Box>
        </>
    )
}