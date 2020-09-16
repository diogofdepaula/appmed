import { Box } from '@material-ui/core'
import React, { createContext } from 'react'
import Linha1SUS from './linha1sus'
import Linha2SUS from './linha2sus'
import Linha3SUS from './linha3sus'
import Linha4SUS from './linha4sus'
import Linha5SUS from './linha5sus'

export const PrescricaoSUSContext = createContext(null)

const PrescricaoSUS = (props) => {

    console.log('teste 6')
    // +++++         Linha1 = Uso + Continuo                                    +++++
    // +++++         Linha2 = NomesComerciais                                   +++++
    // +++++         Linha3 = Farmaco + Apresentacao + Quantidade + Forma       +++++
    // +++++         Linha4 = Posologia                                         +++++
    // +++++         Linha5 = Comentarios                                       +++++

    return (
        <>
            <Box mt={4}>
                <PrescricaoSUSContext.Provider value={props.prescricao}>
                    <Linha1SUS />
                    <Linha2SUS />
                    <Linha3SUS />
                    <Linha4SUS />
                    {props.prescricao.imprimirorientacoes && <Linha5SUS />}
                </PrescricaoSUSContext.Provider>
            </Box>
        </>
    )
}

export default PrescricaoSUS