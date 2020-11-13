import { IconButton, Tooltip } from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import PrintIcon from '@material-ui/icons/Print';
import React, { useContext } from 'react';
import { PageAtendimentoContext } from '../..';

const SecondAppBar = () => {

    const { page, setPage } = useContext(PageAtendimentoContext)

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

    const GetAppBar = () => {

        switch (page) {
            case 'prescricoes':
                return <PrescricoesAppBar />
            default:
                return <div />
        }
    }

    return <GetAppBar />
}

export default SecondAppBar