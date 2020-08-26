import React, { useContext } from 'react'
import { Typography } from '@material-ui/core'
import { ImpressaoContext } from '../..'

const ReceitaSUS = () => {

    const { prescricoesSelecionadas } = useContext(ImpressaoContext)

    
    return (
        <>
            {/* tranferir esse if para a montagem ou para o index antes de enviar para aqui */}
            {prescricoesSelecionadas[0] && <Typography variant={'h5'}>{prescricoesSelecionadas[0].id}</Typography>}
        </>
    )
}

export default ReceitaSUS