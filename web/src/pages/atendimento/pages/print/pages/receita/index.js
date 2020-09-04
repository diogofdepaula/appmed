import React, { useContext, useEffect, useRef, useState } from 'react';
import { ImpressaoContext } from '../..';
import PrescricaoSUS from './sus/componentes/prescricaosus';

export default function FactoryReceitasSUS() {

    const { prescricoesSelecionadas } = useContext(ImpressaoContext)

    // ver se dá para tirar daqui e passar um Context geral 
    const a4size = {
        width: 1240,
        height: 1754
    }

    const divRef = useRef(null)
    const [dimensions, setDimensions] = useState([{
        width: 0,
        height: 0
    }])

    useEffect(() => {
        prescricoesSelecionadas.forEach(element =>
            <div key={element.id} ref={divRef}>
                <PrescricaoSUS prescricao={element} />
            </div>
        )
        if (divRef.current) {
            setDimensions(prevState => [...prevState, {
                width: divRef.current.offsetWidth,
                height: divRef.current.offsetHeight
            }])
        }
    }, [divRef, prescricoesSelecionadas]);

    const Tamanho = () => {
        console.log('teste', dimensions)
        let sizes

        /// TEM QUE FORÇAR O RENDER PARA CADA LOOP
        prescricoesSelecionadas.forEach(element =>
            sizes = (
            <div key={element.id} ref={divRef}>
                <PrescricaoSUS prescricao={element} />
            </div>
            )
        );
        return sizes
    }



    // const SetReceitas = () => {
    //     const receitas = []
    //     receitas.push(
    //         <div>
    //             <ReceitaSUS prescricoes={prescricoesSelecionadas} />
    //         </div>
    //     )
    //     return receitas
    // }

    console.log('dimensions FactoryReceitasSUS', dimensions)

    return (
        <>
            <div overflow="hidden" style={{ width: a4size.width, height: a4size.height, backgroundColor: "red" }} >
                <div>
                    <Tamanho />
                </div>
            </div>
            {/* <SetReceitas /> */}
        </>
    )
}