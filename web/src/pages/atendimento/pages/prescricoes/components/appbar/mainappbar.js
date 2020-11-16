import { Box, IconButton, Tooltip } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import HealingIcon from '@material-ui/icons/Healing';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import React, { useContext } from 'react';
import { PageAtendimentoContext, PrescricaoMainContext } from '../../../..';

const PrescricoesMainAppBar = () => {

    const { setPage } = useContext(PageAtendimentoContext)

    const { prescricaoMain } = useContext(PrescricaoMainContext)

    console.log('PrescricaoMain na barra', prescricaoMain)

    return (
        <>
            <Box>
                <Tooltip title="Voltar">
                    <span>
                        <IconButton
                            disabled={!prescricaoMain}
                        >
                            <ArrowUpwardIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Editar">
                    <span>
                        <IconButton
                            disabled={!prescricaoMain}
                            onClick={() => setPage('prescricaoupdate')}
                        >
                            <EditIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Interromper uso">
                    <span>
                        <IconButton
                            disabled={!prescricaoMain}
                        >
                            <HighlightOffIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Excluir">
                    <span>
                        <IconButton
                            disabled={!prescricaoMain}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Outros">
                    <span>
                        <IconButton
                            disabled={!prescricaoMain}
                        //                        onClick={() => setPage('teste')}
                        >
                            <HealingIcon />
                        </IconButton>
                    </span>
                </Tooltip>
            </Box>
        </>
    )
}

export default PrescricoesMainAppBar