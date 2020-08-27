import React, { useContext } from 'react'
import { ImpressaoContext } from '../..'
import { Box } from '@material-ui/core'

const MakerSUS = () => {

    const { prescricoesSelecionadas } = useContext(ImpressaoContext) 


    prescricoesSelecionadas.map(presc)


    
    return (
        <>
           
        </>
    )
}

export default MakerSUS