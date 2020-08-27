import { Box } from '@material-ui/core'
import React from 'react'
import Linha1SUS from './linha1sus'
import Linha2SUS from './linha2sus'
import Linha3SUS from './linha3sus'
import Linha4SUS from './linha4sus'
import Linha5SUS from './linha5sus'

const PrescricaoSUS = () => {

    return (
        <>
            <Box
                border={2}
                borderColor="text.primary"
            >
                Teste PrescricaoSUS
                <Linha1SUS />
                <Linha2SUS />
                <Linha3SUS />
                <Linha4SUS />
                <Linha5SUS />
            </Box>
        </>
    )
}

export default PrescricaoSUS