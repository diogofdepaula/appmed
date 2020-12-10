import { Box, FormControl, FormControlLabel, TextField } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../../../..';

const RelatorioSet4 = () => {

    const { lmeEdit, setLmeEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        setLmeEdit({ ...lmeEdit, relatorio: {...lmeEdit.relatorio , [event.target.name]: event.target.value }})
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
                                label="PPD"
                                // value={format(lmeEdit.relatorio?.ppddata, "dd-MM-yyyy") || ''}
                                value={lmeEdit.relatorio?.ppddata}
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
                                   // checked={lmeEdit.relatorio?.ppdresultado === "a"}
                                    onChange={handleChange}
                                />
                                 <FormControlLabel 
                                    name='ppdresultado'
                                    value="b"
                                    control={<Radio />} 
                                    label="Acima de 5 mm"
                                   // checked={lmeEdit.relatorio?.ppdresultado === "b"}
                                    onChange={handleChange}
                                />
                               <FormControlLabel 
                                    name='ppdresultado'
                                    value="c"
                                    control={<Radio />} 
                                    label="Não reator"
                                   // checked={lmeEdit.relatorio?.ppdresultado === "c"}
                                    onChange={handleChange}
                                />
                    </FormControl>
                    </Box>
{/* parei aqui */}
                            {/* <Form.Control
                                type="date"
                                id="rxtoraxdata"
                                name="rxtoraxdata"
                                placeholder="RxTórax"
                                value={lmeEdit.relatorio?.rxtoraxdata || ''}
                                onChange={handleChange}
                            />
                            <Form.Check
                                inline
                                type="radio"
                                label="Radiografia de tórax normal"
                                name="rxtoraxresultado"
                                id="rxtoraxresultadoa"
                                value="a"
                                checked={lmeEdit.relatorio.rxtoraxresultado === "a"}
                                onChange={handleChange}

                            />

                            
                            <Form.Check
                                inline
                                type="radio"
                                label="Radiografia de tórax alterada"
                                name="rxtoraxresultado"
                                id="rxtoraxresultadob"
                                value="b"
                                checked={lmeEdit.relatorio.rxtoraxresultado === "b"}
                                onChange={handleChange}
                            />
                            {lmeEdit.relatorio.rxtoraxresultado === "b" &&
                                <Form.Control
                                    type="text"
                                    name="rxtoraxalteracao"
                                    placeholder="Resultado do Rx"
                                    value={lmeEdit.relatorio.rxtoraxalteracao}
                                    onChange={handleChange}
                                />
                    }
                            <Form.Control
                                type="date"
                                id="bhcgdata"
                                name="bhcgdata"
                                placeholder="Beta-HCG"
                                value={lmeEdit.relatorio.bhcgdata || ''}
                                onChange={handleChange}
                            />
                            <Form.Control
                                type="text"
                                id="bhcgjustificativa"
                                name="bhcgjustificativa"
                                placeholder="Justificativa do Beta-HCG"
                                value={lmeEdit.relatorio.bhcgjustificativa}
                                onChange={handleChange}
                            /> */}
            </Box>
        </>
    )
}

export default RelatorioSet4