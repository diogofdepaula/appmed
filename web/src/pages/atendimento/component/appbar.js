import { Box, Divider, IconButton, Tooltip } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import InputIcon from '@material-ui/icons/Input';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import HealingIcon from '@material-ui/icons/Healing';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import React from 'react';

const AtendimentoAppBar = ({ changePage }) => {

    return (
        <>
            <Box display="flex" justifyContent="flex-start" alignItems="center">
                <Tooltip title="Voltar">
                    <IconButton>
                        <ArrowBackIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Prescrições">
                    <IconButton
                        onClick={() => changePage('prescricoes')}
                    >
                        <ListAltIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="LMEs">
                    <IconButton>
                        <AccountBalanceIcon />
                    </IconButton>
                </Tooltip>
                <Divider orientation="vertical" flexItem />
                <Tooltip title="Solicitações">
                    <IconButton>
                        <InputIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Atestados">
                    <IconButton>
                        <RemoveRedEyeIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Termos de consentimento">
                    <IconButton>
                        <SpellcheckIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Outros">
                    <IconButton
                        onClick={() => changePage('teste')}
                    >
                        <HealingIcon />
                    </IconButton>
                </Tooltip>
            </Box>
        </>
    )
}

export default AtendimentoAppBar