import { Button, List, ListItem, Typography, Box } from '@material-ui/core'
import React, { useContext } from 'react'
import { MedicamentoEditorContext, PrescricaoEditorContext } from '../editor'

export default function PosologiaSet(props) {

    const { prescricaoContext, setPrescricaoContext, setStepContext } = useContext(PrescricaoEditorContext)
    const { medicamentoContext } = useContext(MedicamentoEditorContext)

    return (
        <>
            <Typography variant={'h6'}>Escolha uma Posologia</Typography>
            <Box mt={1}>
                <List>
                    {medicamentoContext && medicamentoContext.posologias && medicamentoContext.posologias.map(posologia =>
                        <ListItem
                            key={posologia.id}
                            onClick={() => {
                                setPrescricaoContext({
                                    ...prescricaoContext,
                                    usoposologiapadrao: true,
                                    posologiaId: posologia.id
                                })
                                setStepContext(41)
                            }}
                        >
                            <>
                                {prescricaoContext.posologiaId === posologia.id && <Typography>(opção atual)</Typography>}
                            </>
                            {posologia.posologia}
                        </ListItem>
                    )}
                </List>
            </Box>
            <Box mt={1}>
                <Button
                    color='secondary'
                    onClick={() => {
                        setPrescricaoContext(prescricaoContext)
                        setStepContext(32)
                    }}
                >Usar posologia não padronizada
                    <>
                        {prescricaoContext.posologiaId === null && <Typography>  (opção atual)</Typography>}
                    </>
                </Button>
            </Box>
        </>
    )
}