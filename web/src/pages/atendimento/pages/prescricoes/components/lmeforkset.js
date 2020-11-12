import { Box, Divider, ListItem, ListItemText, Typography, List } from '@material-ui/core';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ClienteContext } from '../../../../../App';
import { PrescricaoEditorContext } from '../editor';

export default function LMEForkSet() {

    const { clientecontext } = useContext(ClienteContext)
    const { prescricaoContext, setPrescricaoContext, setStepContext } = useContext(PrescricaoEditorContext)
    const [lmes, setlmes] = useState([])

    const fetchData = useCallback(async () => {
        const res = await fetch(`http://localhost:4001/api.appmed/lmes/allfit/${clientecontext.id}`)
        const json = await res.json();
        setlmes(json);
    }, [clientecontext])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return (
        <div>
            <Typography variant={'h5'}>Escolha a qual LME</Typography>
            <Box mt={1}>
                <ListItem onClick={() => setStepContext(1)} >
                    <ListItemText primary="Criar uma nova LME" />
                </ListItem>
                <Divider />
                <List>
                    {lmes && lmes.map(lme =>
                        <ListItem
                            key={lme.id}
                            onClick={() => {
                                setPrescricaoContext({
                                    ...prescricaoContext,
                                    lmeId: lme.id
                                })
                                setStepContext(1)
                            }}
                        >
                            <ListItemText primary={lme.cid10 + ' - ' + lme.diagnostico} />
                        </ListItem>
                    )}
                </List>
            </Box>
        </div>
    )
}