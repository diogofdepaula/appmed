import { Box } from '@material-ui/core';
import React, { createContext, useState } from 'react';
import MedicamentosAppBar from './components/appbar';
import Content from './components/content';

export const MedicamentosContext = createContext(null)

const Medicamentos = () => {

    const [page, setPage] = useState('')
    const [medicamentoOnDuty, setMedicamentoOnDuty] = useState()
    const [medicamentoEdit, setMedicamentoEdit] = useState()
    const [nomesComerciaisEdit, setNomesComerciaisEdit] = useState([])
    const [apresentacoesEdit, setApresentacoesEdit] = useState([])
    const [posologiasEdit, setPosologiasEdit] = useState([])

    console.log(medicamentoEdit);

    return (
        <>
            <MedicamentosContext.Provider value={{
                page: page,
                setPage: setPage,
                medicamentoOnDuty: medicamentoOnDuty,
                setMedicamentoOnDuty: setMedicamentoOnDuty,
                medicamentoEdit: medicamentoEdit,
                setMedicamentoEdit: setMedicamentoEdit,
                nomesComerciaisEdit: nomesComerciaisEdit,
                setNomesComerciaisEdit: setNomesComerciaisEdit,
                apresentacoesEdit: apresentacoesEdit,
                setApresentacoesEdit: setApresentacoesEdit,
                posologiasEdit: posologiasEdit,
                setPosologiasEdit: setPosologiasEdit,
            }} >
                <Box>
                    <MedicamentosAppBar />
                    <Content />
                </Box>
            </MedicamentosContext.Provider>
        </>
    )
}

export default Medicamentos