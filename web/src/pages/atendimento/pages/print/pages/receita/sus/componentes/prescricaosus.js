import { Box } from '@material-ui/core'
import React, { createContext, useState, useRef, useEffect } from 'react'
import Linha1SUS from './linha1sus'
import Linha2SUS from './linha2sus'
import Linha3SUS from './linha3sus'
import Linha4SUS from './linha4sus'
import Linha5SUS from './linha5sus'

export const PrescricaoSUSContext = createContext(null)

const PrescricaoSUS = (props) => {

    // +++++         Linha1 = Uso + Continuo                                    +++++
    // +++++         Linha2 = NomesComerciais                                   +++++
    // +++++         Linha3 = Farmaco + Apresentacao + Quantidade + Forma       +++++
    // +++++         Linha4 = Posologia                                         +++++
    // +++++         Linha5 = Comentarios                                       +++++

    const divRef = useRef()
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0
    })

    useEffect(() => {
        setDimensions(prevState => ({
            ...prevState,
            width: divRef.current.offsetWidth,
            height: divRef.current.offsetHeight
        }))
        props.setTeste('tem que tentar passar isso para o nível superior')
    }, [props, dimensions])


    //tem que tentar passar isso para o nível superior
    console.log('dimensions', dimensions)

    return (
        <>
            <div ref={divRef}>
                <Box
                    border={2}
                    borderColor="text.primary"
                >
                    <PrescricaoSUSContext.Provider value={props.prescricao}>
                        <Linha1SUS />
                        <Linha2SUS />
                        <Linha3SUS />
                        <Linha4SUS />
                        <Linha5SUS />
                    </PrescricaoSUSContext.Provider>
                </Box>
            </div>
        </>
    )
}

export default PrescricaoSUS