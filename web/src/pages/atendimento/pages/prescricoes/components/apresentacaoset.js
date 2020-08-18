import { Box, List, ListItem, Typography } from '@material-ui/core'
import React, { useCallback, useContext, useEffect } from 'react'
import { MedicamentoEditorContext, PrescricaoEditorContext } from '../editor'

export default function ApresentacaoSet() {

    const { prescricaoContext, setPrescricaoContext, setStepContext } = useContext(PrescricaoEditorContext)
    const { medicamentoContext, setMedicamentoContext } = useContext(MedicamentoEditorContext)

    const fetchData = useCallback(async () => {
        const res = await fetch(`http://localhost:4001/api.appmed/medicamentos/${prescricaoContext.medicamentoId}`)
        const json = await res.json();
        setMedicamentoContext(json)
    }, [prescricaoContext, setMedicamentoContext])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return (
        <>
            <Typography variant={'h6'}>Escolha uma Apresentação</Typography>
            <Box mt={1}>
                <List>
                    {medicamentoContext && medicamentoContext.apresentacoes && medicamentoContext.apresentacoes.map(apresentacao =>
                        <ListItem
                            key={apresentacao.id}
                            onClick={() => {
                                setPrescricaoContext({ ...prescricaoContext, apresentacoId: apresentacao.id })
                                setStepContext(31)
                            }}
                        >
                            <>
                                {prescricaoContext.apresentacoId === apresentacao.id && <Typography>(opção atual)</Typography>}
                            </>
                            {apresentacao.descricao}
                        </ListItem>
                    )}
                </List>
            </Box>
        </>
    )
}