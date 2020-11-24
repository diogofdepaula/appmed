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
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

const EditorAppBar = () => {

  const { clientecontext } = useContext(ClienteContext)
  const { step, setStep, prescricaoEdit, setPrescricaoEdit } = useContext(AtendimentoContext)

  const Reiniciar = () => {
    let newpresc = InitialPrescricao(clientecontext.id)
    setPrescricaoEdit(newpresc)
    setStep(11)
    // setMedicamento(initialMedicamento)
  }

  const Save = () => {
    setPrescricaoEdit(prescricaoEdit)
    setStep(0) // tem que tirar zero e colocar alguma outra coisa tipo lme mesmo ou sei la
  }


  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Grid item xs>
        <Tooltip title="Voltar">
          <IconButton>
            <ArrowUpwardIcon />
          </IconButton>
        </Tooltip>
        <Tooltip open={false} title="Reiniciar">
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
        <Tooltip title="Próximo">
          <IconButton
          //onClick={() => Reiniciar()}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Salvar">
          <IconButton
            color='secondary'
            disabled={step === 41 ? false : true}
            onClick={Save}
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
        <Tooltip title="LMEs">
          <IconButton>
            <AccountBalanceIcon />
          </IconButton>
        </Tooltip>
        <Divider />

        {/* 
        <Box mt={1}>
                <Button
                    variant="contained"
                    onClick={() => {
                        setPrescricaoEdit(prescricaoEdit)
                        setStep(0)
                    }}
                >{!prescricaoEdit.id ? 'Encerrar' : 'Atualizar'}
                </Button>
                <Button
                    className="ml-2"
                    disabled={!prescricaoEdit.lme}
                    variant="contained"
                    onClick={() => {
                        setPrescricaoEdit(prescricaoEdit)
                        setStep(51)
                    }}
                >{!prescricaoEdit.id ? 'Vincular a uma LME' : 'Editar LME'}
                </Button>
            </Box> */}


      </Grid>
      <Grid item>
        <LinearProgress variant='determinate' value={step} />
      </Grid>
    </Grid>
  )
}


export default EditorAppBar