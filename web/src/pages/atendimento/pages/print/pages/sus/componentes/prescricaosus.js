import { Box } from '@material-ui/core'
import React, { createContext } from 'react'
import Linha1SUS from './linha1sus'
import Linha2SUS from './linha2sus'
import Linha3SUS from './linha3sus'
import Linha4SUS from './linha4sus'
import Linha5SUS from './linha5sus'

export const PrescricaoSUSContext = createContext(null)

const PrescricaoSUS = ({ presc }) => {

    return (
        <>
            <Box
                border={2}
                borderColor="text.primary"
            >
                <PrescricaoSUSContext.Provider value={presc}>
                    <Linha1SUS />
                    <Linha2SUS />
                    <Linha3SUS />
                    <Linha4SUS />
                    <Linha5SUS />
                </PrescricaoSUSContext.Provider>
            </Box>
        </>
    )
}

export default PrescricaoSUS