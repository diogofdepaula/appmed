import { Divider, Grid, IconButton, Tooltip } from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import DeleteIcon from '@material-ui/icons/Delete';
import HealingIcon from '@material-ui/icons/Healing';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ReplayIcon from '@material-ui/icons/Replay';
import SaveIcon from '@material-ui/icons/Save';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../../../..';
import { ClienteContext } from '../../../../../../App';
import InitialPrescricao from '../../../../component/initialprescricao';

const EditorAppBar = () => {

  const { clientecontext } = useContext(ClienteContext)
  const { step, setStep, prescricaoEdit, setPrescricaoEdit, page } = useContext(AtendimentoContext)

  const reiniciar = () => {
    let newpresc = InitialPrescricao(clientecontext.id)
    setPrescricaoEdit(newpresc)
    setStep(11)
    // setMedicamento(initialMedicamento)
  }

  const save = () => {
    setPrescricaoEdit(prescricaoEdit)
    setStep(0) // tem que tirar zero e colocar alguma outra coisa tipo lme mesmo ou sei la
  }

  const sendLME = () => {
    setPrescricaoEdit(prescricaoEdit)
    setStep(51)
  }

  const anterior = () => {
    setStep(prevState => prevState - 10)
  }

  const proximo = () => {
    setStep(prevState => prevState + 10)
  }

  return (
    <Grid container direction="row" justify="flex-start" alignItems="center">
      <Tooltip title="Voltar">
        <IconButton>
          <ArrowUpwardIcon />
        </IconButton>
      </Tooltip>
      <Tooltip open={false} title="Reiniciar">
        <IconButton
          onClick={() => reiniciar()}
        >
          <ReplayIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Anterior">
        <IconButton
        onClick={anterior}
        >
          <ArrowBackIosIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Próximo">
        <IconButton
        onClick={proximo}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Salvar">
        <IconButton
          color='secondary'
          disabled={page === 'prescricaoinsert' ? (step === 41 ? false : true) : false}
          onClick={save}
        >
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
      <Tooltip title="Outros">
        <IconButton>
          <HealingIcon />
        </IconButton>
      </Tooltip>
      <Divider orientation="vertical" flexItem />
      <Tooltip
        title={!prescricaoEdit.id ? 'Vincular a uma LME' : 'Editar LME'}
      >
        <IconButton
          disabled={!prescricaoEdit.lme}
          onClick={sendLME}
        >
          <AccountBalanceIcon />
        </IconButton>
      </Tooltip>
      <Divider />
    </Grid>
  )
}


export default EditorAppBar