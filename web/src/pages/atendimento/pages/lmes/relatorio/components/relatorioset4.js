import { Box, FormControl, FormControlLabel, TextField } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
//import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../../../..';

const RelatorioSet4 = () => {

    const { lmeEdit, setLmeEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        setLmeEdit({ ...lmeEdit, relatorio: { ...lmeEdit.relatorio, [event.target.name]: event.target.value } })
    }


    // const { relatorioContext, setRelatorioContext, setStepContext } = useContext(RelatorioContent)
    // const [validation, setValidation] = useState(false)

    // const handleChange = event => {
    //     setRelatorioContext({ ...relatorioContext, [event.target.name]: event.target.value })
    // }

    // const handleChangeRadio = event => {
    //     setRelatorioContext({ ...relatorioContext, [event.target.name]: event.target.value })
    // }

    // const send = useCallback(() => {
    //     setRelatorioContext(prevState => ({
    //         ...prevState,
    //         ppddata: (relatorioContext.ppddata === '' ? null : relatorioContext.ppddata),
    //         rxtoraxdata: (relatorioContext.rxtoraxdata === '' ? null : relatorioContext.rxtoraxdata),
    //         bhcgdata: (relatorioContext.bhcgdata === '' ? null : relatorioContext.bhcgdata),
    //     }))
    //     setStepContext(5)
    // }, [relatorioContext, setRelatorioContext, setStepContext])

    // useEffect(() => {
    //     if (validation) {
    //         send()
    //     }
    // }, [validation, send])

    return (
        <>
            <Box m={2}>
                <Box>
                    <TextField
                        type="date"
                        name="ppddata"
                        variant='outlined'
                        autoFocus
                        label="PPD"
                        InputLabelProps={{
                            shrink: true,
                          }}
                        // value={format(lmeEdit.relatorio?.ppddata, "dd-MM-yyyy") || ''}
                        value={lmeEdit.relatorio?.ppddata || ''}
                        onChange={handleChange}
                    />
                </Box>
                <Box>
                    <FormControl>
                        <FormControlLabel
                            name='ppdresultado'
                            value="a"
                            control={<Radio />}
                            label="Até 5 mm"
                            checked={lmeEdit.relatorio?.ppdresultado === "a" || false}
                            onChange={handleChange}
                        />
                        <FormControlLabel
                            name='ppdresultado'
                            value="b"
                            control={<Radio />}
                            label="Acima de 5 mm"
                            checked={lmeEdit.relatorio?.ppdresultado === "b" || false}
                            onChange={handleChange}
                        />
                        <FormControlLabel
                            name='ppdresultado'
                            value="c"
                            control={<Radio />}
                            label="Não reator"
                            checked={lmeEdit.relatorio?.ppdresultado === "c" || false}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <Box>
                        <TextField
                            type="date"
                            name="rxtoraxdata"
                            InputLabelProps={{
                                shrink: true,
                              }}
                            variant='outlined'
                            label="Rx de Tórax"
                            // value={format(lmeEdit.relatorio?.ppddata, "dd-MM-yyyy") || ''}
                            value={lmeEdit.relatorio?.rxtoraxdata || ''}
                            onChange={handleChange}
                        />
                    </Box>


                    <FormControl>
                        <FormControlLabel
                            name='rxtoraxresultado'
                            value="a"
                            control={<Radio />}
                            label="Radiografia de tórax normal"
                            checked={lmeEdit.relatorio?.rxtoraxresultado === "a" || false}
                            onChange={handleChange}
                        />
                        <FormControlLabel
                            name='rxtoraxresultado'
                            value="b"
                            control={<Radio />}
                            label="Radiografia de tórax alterada"
                            checked={lmeEdit.relatorio?.rxtoraxresultado === "b" || false}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <Box>
                        {lmeEdit.relatorio.rxtoraxresultado === "b" &&
                            <TextField
                                fullWidth
                                variant='outlined'
                                name='rxtoraxalteracao'
                                label='Resultado do Rx'
                                value={lmeEdit.relatorio.rxtoraxalteracao}
                                onChange={handleChange}
                            />
                        }
                    </Box>
                    <Box>
                        <TextField
                            type="date"
                            name="bhcgdata"
                            variant='outlined'
                            label="Beta-HCG"
                            InputLabelProps={{
                                shrink: true,
                              }}
                            // value={format(lmeEdit.relatorio?.ppddata, "dd-MM-yyyy") || ''}
                            value={lmeEdit.relatorio?.bhcgdata || ''}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                           // variant='outlined'
                            name='bhcgjustificativa'
                            label='Justificativa do Beta-HCG'
                            value={lmeEdit.relatorio.bhcgjustificativa}
                            onChange={handleChange}
                        />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default RelatorioSet4