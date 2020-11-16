import { IconButton, Tooltip } from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import PrintIcon from '@material-ui/icons/Print';
import SaveIcon from '@material-ui/icons/Save';
import React, { useContext } from 'react';
import { PageAtendimentoContext } from '../..';

const SecondAppBar = () => {

    const { page, setPage, updatePage } = useContext(PageAtendimentoContext)

    return (
        <>
            {page ?
                <>
                    <Tooltip title="Nova Prescrição">
                        <IconButton
                            onClick={() => {
                                setPage('prescricaoinsert')
                                updatePage()
                            }}
                        >
                            <PostAddIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Salvar">
                        <IconButton
                            onClick={() => setPage('prescricaosave')}
                        >
                            <SaveIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Imprimir">
                        <IconButton
                            onClick={() => setPage('print')}
                        >
                            <PrintIcon />
                        </IconButton>
                    </Tooltip>
                </>
                :
                <div />
            }
        </>
    )
}

export default SecondAppBar