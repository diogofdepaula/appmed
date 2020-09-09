import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { ImpressaoContext } from '../..';
import PrescricaoSUS from './sus/componentes/prescricaosus';

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

//    const [listPrescricoes, setListPrescricoes] = useState([])

    const divide = useCallback(() => {
        let soma = 0
        let listIndex = []
        let listOfListIndex = []
        dimensions.forEach((w, index) => {
            console.log('index ', index)
            console.log('soma inicio ', soma )
            if (soma <= 600) {  ///(a4size.height - 1000)
                console.log('teste in')
                soma = soma + w.height
                listIndex.push(index)
            } else {
                console.log('teste else')
                listOfListIndex.push(listIndex)
                listIndex = []
                soma = w.height // recomeça a contagem
                listIndex.push(index)
            }
            if (index === dimensions.length -1 && listIndex.length > 0){
                console.log('teste 333')
                listOfListIndex.push(listIndex)
            }
            
            console.log('soma final ', soma )
            console.log('listOfListIndex ', listOfListIndex)
            console.log('listIndex ', listIndex)
        })
        // isso pega as sobras
        console.log('listOfListIndex final', listOfListIndex)
        
    }, [dimensions, ])

    useEffect(() => {
        if (dimensions.length === impressao.prescricoesSelecionadas.length) {
            divide()
        }
    }, [divide, dimensions, impressao])

    /// PROXIMO PASSO É AO INVES DE LISTOFLISTINDEX FAZER UMA LISTA DE RECEITAS MESMO 
    /// FAZ PRIMEIRO EM PARALELO E DEPOIS APAGA A PRIMEIRA

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