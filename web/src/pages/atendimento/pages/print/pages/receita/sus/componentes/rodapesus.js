import { Box, Typography } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import { ImpressaoContext } from '../../../..'

const RodapeSUS = () => {

    const { impressao } = useContext(ImpressaoContext)

    const [endereco] = useState(impressao.local === 'cisco' ? "R. Profa. Leonidia, 1203 - Centro, Guarapuava - PR, 85010-230" : "R. Pres. Getúlio Vargas, 1523 - Centro, Guarapuava - PR, 85010-280")


    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
                borderTop={0}
                mt={0}
                border={3}
                borderColor={"black"}
               // borderRadius={10}
            >
                <Typography variant={'h6'} >
                    <Box fontWeight="fontWeightBold" >{endereco}</Box>
                </Typography>
            </Box>
        </>
    )
}

export default RodapeSUS