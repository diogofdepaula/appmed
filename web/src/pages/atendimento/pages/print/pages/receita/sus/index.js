import { Box } from '@material-ui/core'
import React, { useRef, useState, useEffect, useCallback } from 'react'
import CabecalhoSUS from './componentes/cabecalhosus'
import ComentarioSUS from './componentes/comentariosus'
import DataSUS from './componentes/datasus'
import PrescricaoSUS from './componentes/prescricaosus'
import ViaSUS from './componentes/viasus'

const ReceitaSUS = ({ prescricoes }) => {

    const a4size = {
        width: 1240,
        height: 1750 //1754
    }

    //const [heightbloco, setHeightBloco] = useState(0)

    const conteudoRef = useRef()
    const viasusRef = useRef()
    const cabecalhoRef = useRef()
    const blocoprescricoesRef = useRef()
    const comentariosRef = useRef()
    const dataRef = useRef()
    // const [dimensions, setDimensions] = useState({
    //     conteudoRef: { width: 0, height: 0 },
    //     viasus: { width: 0, height: 0 },
    //     cabecalho: { width: 0, height: 0 },
    //     blocoprescricoes: { width: 0, height: 0 },
    //     comentarios: { width: 0, height: 0 },
    //     data: { width: 0, height: 0 }
    // });

    const margemdeerro = 30  //(não está na conta alí embaixo as margens e padding)
    const newheight = useRef(0)

    useEffect(() => {

        newheight.current = a4size.height - (conteudoRef.current.offsetHeight + viasusRef.current.offsetHeight + cabecalhoRef.current.offsetHeight + comentariosRef.current.offsetHeight + dataRef.current.offsetHeight) - margemdeerro

        // setDimensions(prevState => ({
        //     ...prevState,
        //     conteudoRef: {
        //         width: conteudoRef.current.offsetWidth,
        //         height: conteudoRef.current.offsetHeight
        //     },
        //     viasus: {
        //         width: viasusRef.current.offsetWidth,
        //         height: viasusRef.current.offsetHeight
        //     },
        //     cabecalho: {
        //         width: cabecalhoRef.current.offsetWidth,
        //         height: cabecalhoRef.current.offsetHeight
        //     },
        //     blocoprescricoes: {
        //         width: blocoprescricoesRef.current.offsetWidth,
        //         height: blocoprescricoesRef.current.offsetHeight
        //     },
        //     comentarios: {
        //         width: comentariosRef.current.offsetWidth,
        //         height: comentariosRef.current.offsetHeight
        //     },
        //     data: {
        //         width: dataRef.current.offsetWidth,
        //         height: dataRef.current.offsetHeight
        //     }
        // }))
    }, [a4size]);

    const BlocoPrescricoes = useCallback(() => {
        return prescricoes.map((p, i) =>
            <div key={i} >
                <PrescricaoSUS prescricao={p} />
            </div>
        )
    }, [prescricoes])



    // useEffect(() => {
    //     setHeightBloco(a4size.height - (dimensions.conteudoRef.height + dimensions.viasus.height + dimensions.cabecalho.height + dimensions.comentarios.height + dimensions.data.height) - margemdeerro)
    // }, [a4size, dimensions])

    return (
        <>
            <div overflow="hidden" style={{ width: a4size.width, height: a4size.height }} >
                <Box
                    // Box que define o tamanho geral (apesar de ser definido pela div acima)
                    //height="80%"
                    p={10}
                >
                    <Box
                        p={5}
                        border={3}
                        borderColor={"black"}
                        borderRadius={10}
                    >
                        <Box ref={conteudoRef}>
                            <div ref={viasusRef}>
                                <ViaSUS />
                            </div>
                            <div ref={cabecalhoRef}>
                                <CabecalhoSUS />
                            </div>
                            <div ref={blocoprescricoesRef} style={{ height: newheight }}>
                                <BlocoPrescricoes />
                            </div>
                            <div ref={comentariosRef}>
                                <ComentarioSUS />
                            </div>
                            <div ref={dataRef}>
                                <DataSUS />
                            </div>
                        </Box>
                    </Box>
                </Box>
            </div>
        </>
    )
}

export default ReceitaSUS