import { Grid, IconButton, Tooltip } from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import HealingIcon from '@material-ui/icons/Healing';
import InputIcon from '@material-ui/icons/Input';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PostAddIcon from '@material-ui/icons/PostAdd';
import PrintIcon from '@material-ui/icons/Print';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import React, { useContext, useState } from 'react';
import { PageAtendimentoContext, PrescricaoMainContext } from '..';

const AtendimentoAppBar = () => {

    const { page, setPage } = useContext(PageAtendimentoContext)
    const { setPrescricaoMain } = useContext(PrescricaoMainContext)

    const [appbarright, setAppBarRight] = useState(page)

    const PrescricoesAppBar = () => {
        return (
            <div>
                <Tooltip title="Prescrições">
                    <IconButton
                        onClick={() => setPage('prescricaoinsert')}
                    >
                        <PostAddIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Imprimir">
                    <IconButton
                        onClick={() => setPage('print')}
                    >
                        <PrintIcon />
                    </IconButton>
                </Tooltip>
            </div>
        )
    }

    const GetAppBarRight = () => {

        switch (appbarright) {
            case 'prescricoes':
                return <PrescricoesAppBar />
            default:
                return <div />
        }
    }

    return (
        <>
            <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item xs>
                    <Tooltip title="Voltar">
                        <IconButton>
                            <ArrowBackIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Prescrições">
                        <IconButton
                            onClick={() => {
                                return (
                                    setPrescricaoMain(null),
                                    setPage('prescricoes'),
                                    setAppBarRight('prescricoes')
                                    //
                                )
                            }}
                        >
                            <ListAltIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="LMEs">
                        <IconButton>
                            <AccountBalanceIcon />
                        </IconButton>
                    </Tooltip>
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
                            onClick={() => setPage('teste')}
                        >
                            <HealingIcon />
                        </IconButton>
                    </Tooltip>
                </Grid>
                <Grid item >
                    <GetAppBarRight />
                </Grid>
            </Grid>
        </>
    )
}

export default AtendimentoAppBar