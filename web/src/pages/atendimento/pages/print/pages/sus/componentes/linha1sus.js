import { Box, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { PrescricaoSUSContext } from './prescricaosus'

const Linha1SUS = () => {

    const presc = useContext(PrescricaoSUSContext)

    console.log('presc', presc)
    return (
        <>
            <Box
                border={2}
                borderColor="text.primary"
                display="flex"
            >
                <Typography variant={'subtitle1'}>{presc.apresentaco.uso}</Typography>
                {presc.continuo && <Typography variant={'subtitle1'}>uso contínuo</Typography>}
            </Box>
        </>
    )
}

export default Linha1SUS