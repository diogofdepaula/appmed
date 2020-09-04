import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
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
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0
    })

    const teste = useCallback(() => {
        setDimensions({
            width: divRef.current.offsetWidth,
            height: divRef.current.offsetHeight
        })
    }, [])

    useEffect(() => {
        if (divRef.current) {
            teste()
        }
    }, [divRef, teste]);

    const Tamanho = () => {
        console.log('dimensions FactoryReceitasSUS', dimensions)

        const sizes = []
        prescricoesSelecionadas.forEach(element => {
            sizes.push(
                <div key={element.id}>
                    <PrescricaoSUS prescricao={element} />
                </div>
            )
        });
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

    

    return (
        <>
            <div overflow="hidden" style={{ width: a4size.width, height: a4size.height, backgroundColor: "red" }} >
                <div ref={divRef}>
                    <Tamanho />
                </div>
            </div>
            {/* <SetReceitas /> */}
        </>
    )
}