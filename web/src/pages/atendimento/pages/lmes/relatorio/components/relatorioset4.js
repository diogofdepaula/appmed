import { Box, TextField } from '@material-ui/core'
import React, { useContext, useState, useCallback, useEffect } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { RelatorioContent } from '../relatoriovarset'

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
                            <TextField
                                type="date"
                                name="ppddata"
                                label="PPD"
                                value={format(lmeEdit.relatorio.ppddata, "yyyy-MM-dd") || ''}
                                onChange={handleChange}
                            />
                                <Form.Check
                                    inline
                                    label="Até 5 mm"
                                    type='radio'
                                    name='ppdresultado' 
                                    id="ppdresultadoa"
                                    value="a"
                                   checked={lmeEdit.relatorio.ppdresultado === "a"}
                                    onChange={handleChangeRadio}
                                />
                                <Form.Check
                                    inline
                                    label="Acima de 5 mm"
                                    type='radio'
                                    name='ppdresultado'
                                    id="ppdresultadob"
                                    value="b"
                                   checked={lmeEdit.relatorio.ppdresultado === "b"}
                                    onChange={handleChangeRadio}
                                />
                                <Form.Check
                                    inline
                                    label="Não reator"
                                    type='radio'
                                    name='ppdresultado'
                                    id="ppdresultadoc"
                                    value="c"
                                    checked={lmeEdit.relatorio.ppdresultado === "c"}
                                    onChange={handleChangeRadio}
                                />
                            <Form.Control
                                type="date"
                                id="rxtoraxdata"
                                name="rxtoraxdata"
                                placeholder="RxTórax"
                                value={lmeEdit.relatorio.rxtoraxdata || ''}
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
                                onChange={handleChangeRadio}

                            />

                            
                            <Form.Check
                                inline
                                type="radio"
                                label="Radiografia de tórax alterada"
                                name="rxtoraxresultado"
                                id="rxtoraxresultadob"
                                value="b"
                                checked={lmeEdit.relatorio.rxtoraxresultado === "b"}
                                onChange={handleChangeRadio}
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
                            />
                </Form.Group>
            </Box>
        </>
    )
}

export default RelatorioSet4