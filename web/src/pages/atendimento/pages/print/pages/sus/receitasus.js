import { Box } from '@material-ui/core'
import React, { useContext, useRef, useState, useEffect } from 'react'
import CabecalhoSUS from './componentes/cabecalhosus'
import ComentarioSUS from './componentes/comentariosus'
import DataSUS from './componentes/datasus'
import PrescricaoSUS from './componentes/prescricaosus'
import ViaSUS from './componentes/viasus'
import { ImpressaoContext } from '../..'

const ReceitaSUS = () => {

    const { prescricoesSelecionadas } = useContext(ImpressaoContext)

    const BlocoPrescricoes = () => {

        const conteudo = []
        prescricoesSelecionadas.forEach(element => {
            conteudo.push(
                <div key={element.id}>
                    <PrescricaoSUS prescricao={element} />
                </div>
            )
        });

        return conteudo
    }

    const targetRef = useRef();
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (targetRef.current) {
            setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetHeight
            });
        }
    }, []);

    console.log('dimensions', dimensions)

    return (
        <>
            <Box
                border={5}
                borderColor="text.primary"
                height="100%"
                p={5}
            >
                <ViaSUS />
                <CabecalhoSUS />
                <div ref={targetRef}>
                    <BlocoPrescricoes />
                </div>
                <ComentarioSUS />
                <DataSUS />
            </Box>
        </>
    )
}

export default ReceitaSUS