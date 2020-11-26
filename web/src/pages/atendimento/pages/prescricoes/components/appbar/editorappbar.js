import { Divider, Grid, IconButton, Tooltip } from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ReplayIcon from '@material-ui/icons/Replay';
import SaveIcon from '@material-ui/icons/Save';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../../../..';
import { ClienteContext } from '../../../../../../App';
import InitialPrescricao from '../../../../component/initialprescricao';

const EditorAppBar = () => {

  const { clientecontext } = useContext(ClienteContext)
  const { step, setStep, prescricaoEdit, setPrescricaoEdit, page, medicamentoEdit, setMedicamentoEdit } = useContext(AtendimentoContext)

  const reiniciar = () => {
    let newpresc = InitialPrescricao(clientecontext.id)
    setPrescricaoEdit(newpresc)
    setMedicamentoEdit(null)
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
        <span>
          <IconButton
            disabled={step === 11 || step === 32}
            onClick={anterior}
          >
            <ArrowBackIosIcon />
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip title="Próximo">
        <span>
          <IconButton
            disabled={step === 11 || step === 41}
            onClick={proximo}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip title="Salvar">
        <span>
          <IconButton
            color='secondary'
            disabled={page === 'prescricaoinsert' ? (step === 41 ? false : true) : false}
            onClick={save}
          >
            <SaveIcon />
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip
        title={!prescricaoEdit.id ? 'Vincular a uma LME' : 'Editar LME'}
      >
        <span>
          <IconButton
            disabled={!medicamentoEdit?.lme}
            onClick={sendLME}
          >
            <AccountBalanceIcon />
          </IconButton>
        </span>
      </Tooltip>
      <Divider />
    </Grid>
  )
}
//PARA GARANTIR
//FALTA FAZER O SALVAR (VER SE DEU CERTO PRINCIPALMENTE O DATA DO INÍCIO) E ENVIAR PARA LME


export default EditorAppBar