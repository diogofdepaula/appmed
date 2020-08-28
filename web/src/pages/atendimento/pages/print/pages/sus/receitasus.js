import { Box } from '@material-ui/core'
import React, { useContext } from 'react'
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
                <div key={element}>
                    <PrescricaoSUS prescricao={element} />
                </div>
            )
        });

        return conteudo
    }


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
                <BlocoPrescricoes />
                <ComentarioSUS />
                <DataSUS />
            </Box>
        </>
    )
}

export default ReceitaSUS