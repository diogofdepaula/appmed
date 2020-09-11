import { Box } from '@material-ui/core'
import React, { useRef, useState, useEffect } from 'react'
import CabecalhoSUS from './componentes/cabecalhosus'
import ComentarioSUS from './componentes/comentariosus'
import DataSUS from './componentes/datasus'
import PrescricaoSUS from './componentes/prescricaosus'
import ViaSUS from './componentes/viasus'

const ReceitaSUS = ({ prescricoes }) => {

    const a4size = {
        width: 1240,
        height: 1754
    }

    const [heightbloco, setHeightBloco] = useState(0)

    const boxRef = useRef()
    const viasusRef = useRef()
    const cabecalhoRef = useRef()
    const blocoprescricoesRef = useRef()
    const comentariosRef = useRef()
    const dataRef = useRef()
    const [dimensions, setDimensions] = useState({
        boxsus: { width: 0, height: 0 },
        viasus: { width: 0, height: 0 },
        cabecalho: { width: 0, height: 0 },
        blocoprescricoes: { width: 0, height: 0 },
        comentarios: { width: 0, height: 0 },
        data: { width: 0, height: 0 }
    });

    useEffect(() => {
        setDimensions(prevState => ({
            ...prevState,
            boxsus: {
                width: boxRef.current.offsetWidth,
                height: boxRef.current.offsetHeight
            },
            viasus: {
                width: viasusRef.current.offsetWidth,
                height: viasusRef.current.offsetHeight
            },
            cabecalho: {
                width: cabecalhoRef.current.offsetWidth,
                height: cabecalhoRef.current.offsetHeight
            },
            blocoprescricoes: {
                width: blocoprescricoesRef.current.offsetWidth,
                height: blocoprescricoesRef.current.offsetHeight
            },
            comentarios: {
                width: comentariosRef.current.offsetWidth,
                height: comentariosRef.current.offsetHeight
            },
            data: {
                width: dataRef.current.offsetWidth,
                height: dataRef.current.offsetHeight
            }
        }))
    }, []);

    const BlocoPrescricoes = () => {
        const conteudo = []
        prescricoes.forEach(element => {
            conteudo.push(
                <div key={element.id} >
                    <PrescricaoSUS prescricao={element} />
                </div>
            )
        });
        return conteudo
    }

    const margemdeerro = 200

    useEffect(() => {
        setHeightBloco(a4size.height - (dimensions.viasus.height + dimensions.cabecalho.height + dimensions.comentarios.height + dimensions.data.height) - margemdeerro)
    }, [a4size, dimensions])

    return (
        <>
            <div overflow="hidden" style={{ width: a4size.width, height: a4size.height }} >
                <Box
                    // Box que define o tamanho geral (apesar de ser definido pela div acima)
                    ref={boxRef}
                    height="100%"
                >
                    <Box
                        m={10}
                        p={5}
                        border={3}
                        borderColor={"black"}
                        borderRadius={10}
                    >
                        <div ref={viasusRef}>
                            <ViaSUS />
                        </div>
                        <div ref={cabecalhoRef}>
                            <CabecalhoSUS />
                        </div>
                        <div ref={blocoprescricoesRef} style={{ height: heightbloco}}>
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
            </div>
        </>
    )
}

export default ReceitaSUS