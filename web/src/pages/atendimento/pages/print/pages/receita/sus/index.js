import { Box } from '@material-ui/core'
import React, { useRef, useState, useEffect } from 'react'
import CabecalhoSUS from './componentes/cabecalhosus'
import ComentarioSUS from './componentes/comentariosus'
import DataSUS from './componentes/datasus'
import PrescricaoSUS from './componentes/prescricaosus'
import ViaSUS from './componentes/viasus'

const ReceitaSUS = ({ prescricoes }) => {

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
        if (boxRef.current) {
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
        }
    }, []);





    const BlocoPrescricoes = () => {
        const conteudo = []
        prescricoes.forEach(element => {
            conteudo.push(
                <div>
                    <PrescricaoSUS prescricao={element} />
                </div>
            )
        });
        return conteudo
    }

    console.log(dimensions)

    return (
        <>
            <Box
                ref={boxRef}
                // border={5}
                // borderColor="text.primary"
                height="100%"
                style={{ width: "1240px", height: "1754px" , backgroundColor: "red"}} 
            // p={5}
            >
                <div ref={viasusRef}>
                    <ViaSUS />
                </div>
                <div ref={cabecalhoRef}>
                    <CabecalhoSUS />
                </div>
                {/* o height do blocoprescriçao deverá se variável (fazer uma const e useState com a soma de subtração) */}
                <div ref={blocoprescricoesRef} style={{ height: "1000px" , backgroundColor: "blue"}}>
                    <BlocoPrescricoes />
                </div>
                <div ref={comentariosRef}>
                    <ComentarioSUS />
                </div>
                <div ref={dataRef}>
                    <DataSUS />
                </div>
            </Box>
        </>
    )
}

export default ReceitaSUS