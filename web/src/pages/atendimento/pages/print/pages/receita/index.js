import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { ImpressaoContext } from '../..';
import PrescricaoSUS from './sus/componentes/prescricaosus';
import ReceitaSUS from './sus';

export default function FactoryReceitasSUS() {

    const { impressao } = useContext(ImpressaoContext)

    // ver se dá para tirar daqui e passar um Context geral 
    const a4size = {
        width: 1240,
        height: 1754
    }

    ///////////////////////////////////////////////////////////////////
    /////  MÉTODO PARA DEFINIR O TAMANHO DAS PRESCRICOES  //////////////
    /////  TALVEZ COLOCAR EM UM ARQUIVO SEPARADO PARA REAPROVEITAR ////
    ////  SE USAR EM OUTRO LUGAR ENTÃO FAZER ISSO //////////////

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
    //////      MÉTODO PARA DIVIDIR AS PRESCRICOES EM QUANTIDA- ///////
    //////      QUE CAIBA EM CADA RECEITA                       ///////

    const [listPrescricoes, setListPrescricoes] = useState([])

    const divide = useCallback(() => {
        let soma = 0
        let listIndex = []
        let listOfListIndex = []
        dimensions.forEach((w, index) => {
            if (soma <= 600) {  ///(a4size.height - 1000)  // fazer a definição em breve
                soma = soma + w.height
                listIndex.push(index)
            } else {
                listOfListIndex.push(listIndex)
                listIndex = []
                soma = w.height // recomeça a contagem
                listIndex.push(index)
            }
            if (index === dimensions.length - 1 && listIndex.length > 0) {
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

    }, [dimensions, impressao])

    useEffect(() => {
        if (dimensions.length === impressao.prescricoesSelecionadas.length) {
            divide()
        }
    }, [divide, dimensions, impressao])

    return (
        <>
            <div overflow="hidden" style={{ width: a4size.width, height: a4size.height, background:"violet"}} >
                <div>
                    {listPrescricoes.length === 0 && prescricao}
                    {listPrescricoes && listPrescricoes}
                </div>
            </div>
        </>
    )
}