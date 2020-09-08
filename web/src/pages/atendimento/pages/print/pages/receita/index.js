import React, { useContext, useEffect, useRef, useState, useCallback } from 'react';
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

//    const [listPrescricoes, setListPrescricoes] = useState([])

    const divide = useCallback(() => {
        let soma = 0
        let listIndex = []
        let listOfListIndex = []
        dimensions.forEach((w, index) => {
            if (soma <= (a4size.height - 1000)) {
                console.log('teste in')
                soma = soma + w.height
                listIndex.push(index)
            } else {
                listOfListIndex.push(listIndex)
                listIndex = []
                soma = 0
                console.log('teste else')
            }
        })
        console.log('listOfListIndex', listOfListIndex)
        console.log('listIndex', listIndex)
    }, [a4size, dimensions, ])

    useEffect(() => {
        if (dimensions.length === impressao.prescricoesSelecionadas.length) {
            divide()
        }
    }, [divide, dimensions, impressao])

    /// TEM QUE DEFINIR O QUE VAI FAZER COM O DIMENTION 
    // TEM QUE DEFINIR SE O DIMENTION FICA AQUI OU LÁ NO IMPRESSÁO
    // SE NÁO FOR USAR EM OUTRO LUGAR PODE FICAR AQUI MESMO
    // SE FOR FICAR AQUI O IDEAL É QUE AUTOMATIZE O PROCESSO 
    // FAZER UM VALIDAcAO SE DIMENTION.LENGTH == PRESCRICAOSELECIONADAS.LENGHT
    // ENTÃO FAZER UM METODO QUE DIVIDA AS RECEITAS E ENTÃO DEVOLVA SOMENTE AS RECEITAS

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