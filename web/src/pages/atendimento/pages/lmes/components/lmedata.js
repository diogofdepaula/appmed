import { Box, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../../..';

const LMEData = () => {

    const { lmeOnDuty } = useContext(AtendimentoContext)

    return (
        <>
            <Box>
                <Box my={1} display="flex" justifyContent="center" alignItems="flex-end">
                    <Typography variant={'h6'}>{lmeOnDuty.cid10 + " - " + lmeOnDuty.diagnostico} </Typography>
                </Box>
                <Box ml={1}>
                    <Typography variant={'body1'}>{lmeOnDuty.anamnese}</Typography>
                    <Box mt={1}>
                        <List>
                            {lmeOnDuty?.prescricoes.map(prescricao =>
                                prescricao.emuso &&
                                <ListItem>
                                    <ListItemText
                                        key={prescricao.id}
                                        primary={prescricao.medicamento.farmaco}
                                    />
                                </ListItem>
                            )}
                        </List>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default LMEData