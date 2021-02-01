import { Divider, Grid, IconButton, Tooltip } from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ReplayIcon from '@material-ui/icons/Replay';
import SaveIcon from '@material-ui/icons/Save';
import { lastDayOfISOWeek } from 'date-fns';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../../../..';
import { ClienteContext } from '../../../../../../App';
import InitialPrescricao from '../../../../component/initialprescricao';

// PRESCRICAO EDITOR Prescricao
const EditorAppBar = () => {

  const { clienteContext } = useContext(ClienteContext)
  const { step, setStep, prescricaoEdit, setPrescricaoEdit, page, setPage, medicamentoEdit, setMedicamentoEdit, lmeEdit } = useContext(AtendimentoContext)

  const reiniciar = () => {
    let newpresc = InitialPrescricao(clienteContext.id)
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

  const fetchSubmit = (var1, var2, var3 ) => {

  }

  const handleSubmit = event => {

    // submit do insert e update , da prescricoes e lme juntos

    let prespost = [`http://localhost:4001/api.appmed/prescricoes`, 'post', prescricaoEdit]
    let lmepost = [`http://localhost:4001/api.appmed/lmes`, 'post', lmeEdit]
    let presput = prescricaoEdit ? [`http://localhost:4001/api.appmed/prescricoes/${prescricaoEdit.id}`, 'put', prescricaoEdit] : []
    let lmeput = lmeEdit ? [`http://localhost:4001/api.appmed/lmes/${lmeEdit.id}`, 'put', lmeEdit] : []

    let submitvar

    switch (page) {
      case 'prescricaoinsert':
        submitvar = prespost
        break;
      case 'lmeinsert':
        submitvar = lmepost
        break;
      case 'prescricaoupdate':
        submitvar = presput
        break;
      case 'lmeupdate':
        submitvar = lmeput
        break;
      default:
        break;
    }

    TEM QUE REFAZER ISSO AQUI PARA SALVAR E ATUALIZAR TANTO PRESCRICAO NOVA COMO UPDATE E LME NOVA E UPDATE
    TEM QUE FAZER PARA OS DOIS 
    USAR O IF ID >0 OU != NULL PARA DeferredPermissionRequest
    FAZER UMA FUNÇÃO NOVA.

    event.preventDefault();
    fetch(submitvar[0], {
      method: submitvar[1],
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(submitvar[2])
    }).then(data => {
      if (data.ok) {
        setPage('prescricoesmain')
        setStep(0)
        let newpresc = InitialPrescricao(clienteContext.id)
        setPrescricaoEdit(newpresc)
        setMedicamentoEdit(null)
      }
    })
  }

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   fetch(`http://localhost:4001/api.appmed/prescricoes`, {
  //     method: 'post',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(prescricaoEdit)
  //   }).then(data => {
  //     if (data.ok) {
  //       setPage('prescricoesmain')
  //       setStep(0)
  //       let newpresc = InitialPrescricao(clienteContext.id)
  //       setPrescricaoEdit(newpresc)
  //       setMedicamentoEdit(null)
  //     }
  //   })
  // }

  const sendFork = () => {
    setPrescricaoEdit(prescricaoEdit)
    if (prescricaoEdit.lmeId) {
      setPage('lmeupdate')
      setStep(21) // manda para o lmeupdate
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
            disabled={page === 'prescricaoinsert' ? (step === 41 ? !medicamentoEdit?.lme : true) : false}
            onClick={linkLME}
          >
            <ArrowForwardIcon />
            <AccountBalanceIcon />
          </IconButton>
        </span>
      </Tooltip>
      {step === 51 &&
        <div>
          <Tooltip title="Continuar editando LME">
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