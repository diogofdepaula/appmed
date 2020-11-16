import { Divider, Grid, IconButton, LinearProgress, Tooltip } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import HealingIcon from '@material-ui/icons/Healing';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import React, { useContext } from 'react';
import { StepAtendimentoContext } from '../../../..';

const EditorAppBar = () => {

  const { step } = useContext(StepAtendimentoContext)

  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Grid item xs>
        <Tooltip title="Voltar">
          <IconButton>
            <ArrowUpwardIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Salvar">
          <IconButton>
            <SaveIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Interromper uso">
          <IconButton>
            <HighlightOffIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Excluir">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Outros">
          <IconButton>
            <HealingIcon />
          </IconButton>
        </Tooltip>
        <Divider />
      </Grid>
      <Grid item>
        <LinearProgress variant='determinate' value={step} />
      </Grid>
    </Grid>
  )
}


export default EditorAppBar