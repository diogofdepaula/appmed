import { Box } from '@material-ui/core'
import React, { useCallback, useContext } from 'react'
import { ImpressaoContext } from '../../../..'
import Linha51LME from './linha51'
import Linha5xLME from './linha5x'

const Linha5LME = () => {

    const { impressao } = useContext(ImpressaoContext)

    const LinhasMedicamentos = useCallback(() => {
       // let list = impressao.prescricoesSelecionadas.map(p => )

        return <Linha5xLME />
    }, [])

    

    return (
        <>
            <Box
                mt={2}
                width={1}
                border={1}
                borderColor="black"
            >
                <Linha51LME />
                <LinhasMedicamentos />
            </Box>
        </>
    )
}

export default Linha5LME