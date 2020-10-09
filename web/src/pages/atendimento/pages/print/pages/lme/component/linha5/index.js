import { Box } from '@material-ui/core'
import React, { useContext } from 'react'
import { LMEPrintContext } from '../..'
import Linha51LME from './linha51'
import Linha5ExtraLME from './linha5extra'
import Linha5xLME from './linha5x'

const Linha5LME = () => {

    const lme = useContext(LMEPrintContext)

    return (
        <>
            <Box
                mt={2}
                width={1}
                border={1}
                borderColor="black"
                style={{ backgroundColor: "grey" }}
            >
                <Linha51LME />
                {lme.prescricoes.map((p, i) =>
                    <div key={p.id}>
                        <Linha5xLME prescricao={p} numero={i}/>
                    </div>
                )}
                <Linha5ExtraLME numero={lme.prescricoes.length + 1} />
                <Linha5ExtraLME numero={lme.prescricoes.length + 2}/>
            </Box>
        </>
    )
}

export default Linha5LME