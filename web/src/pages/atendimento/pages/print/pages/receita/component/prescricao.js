import { Box } from '@material-ui/core'
import React, { createContext } from 'react'
import Linha1 from './linha1'
import Linha2 from './linha2'
import Linha3 from './linha3'
import Linha4 from './linha4'
import Linha5 from './linha5'

export const PrescricaoPrintContext = createContext(null)

const Prescricao = ({ prescricao, mes }) => {

    console.log('teste Prescricao')
    // +++++         Linha1 = Uso + Continuo                                    +++++
    // +++++         Linha2 = NomesComerciais                                   +++++
    // +++++         Linha3 = Farmaco + Apresentacao + Quantidade + Forma       +++++
    // +++++         Linha4 = Posologia                                         +++++
    // +++++         Linha5 = Comentarios                                       +++++

    return (
        <>
            <Box mt={4}>
                <PrescricaoPrintContext.Provider value={prescricao}>
                    <Linha1 />
                    <Linha2 />
                    <Linha3 mes={mes} />
                    <Linha4 />
                    {prescricao.imprimirorientacoes && <Linha5 />}
                </PrescricaoPrintContext.Provider>
            </Box>
        </>
    )
}

export default Prescricao