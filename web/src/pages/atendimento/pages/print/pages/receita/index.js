import React, { useContext, useEffect, useRef, useState } from 'react';
import { ImpressaoContext } from '../..';
import PrescricaoSUS from './sus/componentes/prescricaosus';

export default function FactoryReceitasSUS() {

    const { impressao, setImpressao } = useContext(ImpressaoContext)

    // ver se dá para tirar daqui e passar um Context geral 
    const a4size = {
        width: 1240,
        height: 1754
    }

    ///////////////////////////////////////////////////////////////////
    /////  MÉTODO PARA DEFINIR O TAMANHO DAS PRESCRICOES  //////////////
    const divRef = useRef(null)
    const [dimensions, setDimensions] = useState([])
    const [prescricao, setPrescricao] = useState()
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (count <= impressao.prescricoesSelecionadas.length - 2) {
            setCount(prevState => prevState + 1)
        }
        if (divRef.current) {
            setDimensions(prevState => [...prevState, {
                width: divRef.current.offsetWidth,
                height: divRef.current.offsetHeight
            }])
        }
        // tem que deixar a prescricao aqui na array dependência para ele calcular após os modificação e render
    }, [impressao, count, prescricao]);

    useEffect(() => {
        setPrescricao(
            <div key={impressao.prescricoesSelecionadas[count].id} ref={divRef}>
                <PrescricaoSUS prescricao={impressao.prescricoesSelecionadas[count]} />
            </div>
        )
    }, [impressao, count])
    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////

    // PEGAR O dimentions e fazer as receitas 

    console.log(impressao)

    return (
        <>
            <div overflow="hidden" style={{ width: a4size.width, height: a4size.height, backgroundColor: "red" }} >
                <div>
                    {prescricao}
                </div>
            </div>
        </>
    )
}