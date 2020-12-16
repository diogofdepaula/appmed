import { Divider, Grid, IconButton, Tooltip } from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ReplayIcon from '@material-ui/icons/Replay';
import SaveIcon from '@material-ui/icons/Save';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../../../..';
import { ClienteContext } from '../../../../../../App';
import InitialPrescricao from '../../../../component/initialprescricao';

// PRESCRICAO EDITOR Prescricao
const EditorAppBar = () => {

  const { clientecontext } = useContext(ClienteContext)
  const { step, setStep, prescricaoEdit, setPrescricaoEdit, page, setPage, medicamentoEdit, setMedicamentoEdit } = useContext(AtendimentoContext)

  const reiniciar = () => {
    let newpresc = InitialPrescricao(clientecontext.id)
    setPrescricaoEdit(newpresc)
    setMedicamentoEdit(null)
    setStep(11)
  }

  const linkLME = () => {
    setPrescricaoEdit(prescricaoEdit)
    setStep(51)
  }

  const previousStep = () => {
    setStep(prevState => prevState - 10)
  }

  const nextStep = () => {
    setStep(prevState => prevState + 10)
  }

  const handleSubmit = event => {
    event.preventDefault();
    fetch(`http://localhost:4001/api.appmed/prescricoes`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(prescricaoEdit)
    }).then(data => {
      if (data.ok) {
        setPage('prescricoesmain')
        setStep(0)
        let newpresc = InitialPrescricao(clientecontext.id)
        setPrescricaoEdit(newpresc)
        setMedicamentoEdit(null)
      }
    })
  }


  const sendFork = () => {
    setPrescricaoEdit(prescricaoEdit)
    if (prescricaoEdit.lmeId) {
      setStep(1) // manda para o lmeupdate
    } else {
      setStep(61) // continua a edição
    }
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
            onClick={previousStep}
          >
            <ArrowBackIosIcon />
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip title="Próximo">
        <span>
          <IconButton
            disabled={step === 11 || step === 41 || step === 61}
            onClick={nextStep}
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
            onClick={handleSubmit}
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
            onClick={linkLME}
          >
            <ArrowForwardIcon />
            <AccountBalanceIcon />
          </IconButton>
        </span>
      </Tooltip>
      {step === 51 &&
        <div>
          <Tooltip title="Próximo">
            <span>
              <IconButton
                color='primary'
                onClick={sendFork}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </span>
          </Tooltip>
        </div>
        }
      <Divider />
    </Grid>
  )
}

export default EditorAppBar