import { Box, Button, Grid, TextField } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../../..';

const LMEDoses = () => {

    const { prescricaoEdit, setPrescricaoEdit, setStep } = useContext(AtendimentoContext)

    // const [indices, setIndices] = useState([])

    // const funcaoTeste = useCallback(() => {
    //     setIndices([
    //         ['lmemes1', '1º mês', prescricaoEdit.lmemes1],
    //         ['lmemes2', '2º mês', prescricaoEdit.lmemes2],
    //         ['lmemes3', '3º mês', prescricaoEdit.lmemes3],
    //         ['lmemes4', '4º mês', prescricaoEdit.lmemes4],
    //         ['lmemes5', '5º mês', prescricaoEdit.lmemes5],
    //         ['lmemes6', '6º mês', prescricaoEdit.lmemes6]
    //     ])
    // }, [prescricaoEdit])

    // useEffect(() => {
    //     funcaoTeste()
    // }, [funcaoTeste])

    const indica = [
        ['lmemes1', '1º mês', prescricaoEdit.lmemes1],
        ['lmemes2', '2º mês', prescricaoEdit.lmemes2],
        ['lmemes3', '3º mês', prescricaoEdit.lmemes3],
        ['lmemes4', '4º mês', prescricaoEdit.lmemes4],
        ['lmemes5', '5º mês', prescricaoEdit.lmemes5],
        ['lmemes6', '6º mês', prescricaoEdit.lmemes6]
    ]


    const handleChange = event => {
        setPrescricaoEdit({ ...prescricaoEdit, [event.target.name]: event.target.value })
    }

    const nextStep = () => {
        setPrescricaoEdit(prescricaoEdit)
        if (prescricaoEdit.lmeId) {
            setStep(1) // manda para o lmeupdate
        } else {
            setStep(61) // continua a edição
        }
    }

    return (
        <>
            {/* <Typography variant={'h5'}>Doses referente a cada mês</Typography> */}
            <Box>
                <Grid container spacing={1} nowrap >
                    {indica?.map((w, i) =>
                        <Grid item xs key={i}>
                            <TextField
                                fullWidth
                                variant='outlined'
                                key={w[0]}
                                name={w[0]}
                                label={w[1]}
                                value={w[2]}
                                onChange={(e) => handleChange(e)}
                            />
                        </Grid>
                    )}
                </Grid>
            </Box>
            <Box mt={2}>
                <Button
                    onClick={() => nextStep()}
                    endIcon={<NavigateNextIcon />}
                > Próximo
                    </Button>
            </Box>
        </>
    )
}

export default LMEDoses

