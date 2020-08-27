import React, { useContext } from 'react'
import { ImpressaoContext } from '../..'
import { Box } from '@material-ui/core'
import ViaSUS from './componentes/viasus'
import CabecalhoSUS from './componentes/cabecalhosus'
import PrescricaoSUS from './componentes/prescricaosus'
import ComentarioSUS from './componentes/comentariosus'
import DataSUS from './componentes/datasus'

const ReceitaSUS = () => {

    const { prescricoesSelecionadas } = useContext(ImpressaoContext) 


    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // +++++        ELEMENTOS DO BLOCO DE PRESCRICAO                            +++++
    // +++++                                                                    +++++
    // +++++         Containers                                                 +++++
    // +++++         Via                                                        +++++
    // +++++         Cabecalho                                                  +++++
    // +++++         Linha1 =  Uso + Continuo                                   +++++
    // +++++         Linha2 =  NomesComerciais                                  +++++
    // +++++         Linha3 = Farmaco + Apresentacao + Quantidade + Forma       +++++
    // +++++         Linha4 = Posologia                                         +++++
    // +++++         Orientações                                                +++++
    // +++++         Comentário Extra                                           +++++
    // +++++         Data                                                       +++++
    // +++++                                                                    +++++
    // +++++         Containers vão dentro do BlocoPrescricao                   +++++
    // +++++         BlocoPrescricao, junto com Cabecalho e Data,               +++++
    // +++++         vai dentro BlocoReceita                                    +++++
    // +++++                                                                    +++++
    // +++++                                                                    +++++
    // +++++                                                                    +++++
    // +++++                                                                    +++++
    // +++++         Deixei constante a estrutura  e StyleClass, o que          +++++
    // +++++         muda é somente o Stylesheets conforme                      +++++
    // +++++         o local de atendimento.                                    +++++
    // +++++         PARA FAZER AJUSTES DE TAMANHO, FAÇA NO CSS                 +++++
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
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
                <PrescricaoSUS />
                <ComentarioSUS />
                <DataSUS />
            </Box>
        </>
    )
}

export default ReceitaSUS