import { Box } from '@material-ui/core'
import React, { createContext } from 'react'
import Linha1SUS from './linha1sus'
import Linha2SUS from './linha2sus'
import Linha3SUS from './linha3sus'
import Linha4SUS from './linha4sus'
import Linha5SUS from './linha5sus'

export const PrescricaoSUSPrintContext = createContext(null)

const PrescricaoSUS = (props) => {

    console.log('teste PrescricaoSUS')
    // +++++         Linha1 = Uso + Continuo                                    +++++
    // +++++         Linha2 = NomesComerciais                                   +++++
    // +++++         Linha3 = Farmaco + Apresentacao + Quantidade + Forma       +++++
    // +++++         Linha4 = Posologia                                         +++++
    // +++++         Linha5 = Comentarios                                       +++++

    return (
        <div>
            <Box mt={4}>
                <PrescricaoSUSPrintContext.Provider value={props.prescricao}>
                    <Linha1SUS />
                    <Linha2SUS />
                    <Linha3SUS mes={props.mes} />
                    <Linha4SUS />
                    {props.prescricao.imprimirorientacoes && <Linha5SUS />}
                </PrescricaoSUSPrintContext.Provider>
            </Box>
        </div>
    )
}

export default PrescricaoSUS