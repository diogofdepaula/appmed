import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { ImpressaoContext } from '../..';
import ReceitaSUS from './sus';
import PrescricaoSUS from './sus/componentes/prescricaosus';

export default function FactoryReceitasSUS() {

    const { impressao } = useContext(ImpressaoContext)

    // ver se dá para tirar daqui e passar um Context geral 
    const a4size = {
        width: 1240,
        height: 1754
    }

    const itemsRef = useRef([]);

    useEffect(() => {
        itemsRef.current = itemsRef.current.slice(0, impressao.prescricoesSelecionadas.length);
        console.log('teste 1')
    }, [impressao]);

    const [listPrescricoes, setListPrescricoes] = useState([])

    const divide = useCallback(() => {
        let soma = 0
        let listIndex = []
        let listOfListIndex = []
        itemsRef.current.forEach((w, index) => {
            if (soma <= 900) {  ///(a4size.height - 1000)  // fazer a definição em breve heightbloco no index.js do sus
                soma = soma + w.offsetHeight
                listIndex.push(index)
            } else {
                listOfListIndex.push(listIndex)
                listIndex = []
                soma = w.offsetHeight // recomeça a contagem
                listIndex.push(index)
            }
            if (index === itemsRef.current.length - 1 && listIndex.length > 0) {
                listOfListIndex.push(listIndex)
            }
        })
        let listReceitas = []

        listOfListIndex.forEach(r => {
            let grupoprescricoes = impressao.prescricoesSelecionadas.slice(r[0], r[r.length - 1] + 1)
            listReceitas.push(
                <div key={r}>
                    <ReceitaSUS prescricoes={grupoprescricoes} />
                </div>
            )
        })
        setListPrescricoes(listReceitas)
        console.log('teste 2')
    }, [impressao])

    useEffect(() => {
        console.log('teste 3')
        if (itemsRef.current) {
            divide()
        }
    }, [divide])

    return (
        <>
            <div overflow="hidden" style={{ width: a4size.width, height: a4size.height }} >
                <div>
                    
                    
                    {itemsRef.current.length === 0 &&
                    impressao.prescricoesSelecionadas.map((p, i) =>
                        <div key={i} ref={el => itemsRef.current[i] = el} >
                            <PrescricaoSUS prescricao={p} />
                        </div>
                    )
                    }
                    
                    {listPrescricoes && listPrescricoes}
                    {/* {listPrescricoes.length === 0 && prescricao}
                    {listPrescricoes && listPrescricoes} */}
                </div>
            </div>
        </>
    )
}