import { Divider, Grid, IconButton, LinearProgress, Tooltip } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import DeleteIcon from '@material-ui/icons/Delete';
import HealingIcon from '@material-ui/icons/Healing';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ReplayIcon from '@material-ui/icons/Replay';
import SaveIcon from '@material-ui/icons/Save';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../../../..';
import { ClienteContext } from '../../../../../../App';
import InitialPrescricao from '../../../../component/initialprescricao';

const EditorAppBar = () => {

  const { clientecontext } = useContext(ClienteContext)
  const { step, setStep, setPrescricaoEdit } = useContext(AtendimentoContext)

  const Reiniciar = () => {
    let newpresc = InitialPrescricao(clientecontext.id)
    setPrescricaoEdit(newpresc)
    setStep(11)
    // setMedicamento(initialMedicamento)
  }

  

  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Grid item xs>
        <Tooltip title="Voltar">
          <IconButton>
            <ArrowUpwardIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Reiniciar">
          <IconButton
            onClick={() => Reiniciar()}
          >
            <ReplayIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Anterior">
          <IconButton
            //onClick={() => Reiniciar()}
          >
            <ArrowBackIosIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Salvar">
          <IconButton>
            <SaveIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Próximo">
          <IconButton
            //onClick={() => Reiniciar()}
          >
            <ArrowForwardIosIcon />
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