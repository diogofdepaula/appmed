import { Box, IconButton, Tooltip } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import HealingIcon from '@material-ui/icons/Healing';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import React, { useContext } from 'react';
import { PageAtendimentoContext } from '../../../..';

const PrescricoesMainAppBar = () => {

    const setPage = useContext(PageAtendimentoContext)

    return (
        <>
            <Box>
                <Tooltip title="Voltar">
                    <IconButton>
                        <ArrowBackIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Editar">
                    <IconButton
                        onClick={() => setPage('prescricaoupdate')}
                    >
                        <EditIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Interromper uso">
                    <IconButton>
                        <HighlightOffIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Excluir">
                    <IconButton
                    
                    >
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Outros">
                    <IconButton
                    //                        onClick={() => setPage('teste')}
                    >
                        <HealingIcon />
                    </IconButton>
                </Tooltip>
            </Box>
        </>
    )
}

export default PrescricoesMainAppBar