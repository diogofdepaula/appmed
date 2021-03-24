import { Box, IconButton, Tooltip } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PrintIcon from '@material-ui/icons/Print';
import TuneIcon from '@material-ui/icons/Tune';
import React, { useContext } from 'react';
import { ImpressaoContext } from '../../../..';

const PrintMainAppBar = () => {

    const { setValidacao } = useContext(ImpressaoContext)

    return (
        <>
            <Box>
                <Tooltip title="Voltar">
                    <span>
                        <IconButton
                        //disabled={!prescricaoOnDuty}
                        >
                            <ArrowUpwardIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Imprimir">
                    <span>
                        <IconButton
                            //onClick={handlePrint}
                        >
                            <PrintIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Visualizar">
                    <span>
                        <IconButton
                            onClick={() => setValidacao(true)}
                        >
                            <TuneIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                {/* <Tooltip title="Excluir">
                    <span>
                        <IconButton
                            disabled={!prescricaoOnDuty}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </span>
                </Tooltip> */}
            </Box>
        </>
    )
}

export default PrintMainAppBar