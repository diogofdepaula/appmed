import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import ReceitaSUS from './sus';
import PrescricaoSUS from './sus/component/prescricaosus';
import Reorder from './../../component/reorder'
import { ImpressaoContext } from '../../../..';
import ReceitaConsultorio from './consultorio';
import ReceitaLME from './lme';

const ReceitaByLocal = ({ prescricoes, via, mes, tipo }) => {

    // variações conforme o local
    let receita = <div />

    switch (tipo) {
        case 'consultorio':
            receita = <ReceitaConsultorio teste={"teste"} />
            break;
        case 'cisgap':
        case 'cisco':
            receita = <ReceitaSUS prescricoes={prescricoes} via={via} mes={mes} tipo={tipo} />
            break;
        case 'lme':
            receita = <ReceitaLME prescricoes={prescricoes} via={via} mes={mes} />
            break;
        default:
            break;
    }
    return receita
}

const FactoryReceitas = ({ listPresc, via, mes, tipo }) => {

    const { impressao } = useContext(ImpressaoContext)

    const itemsRef = useRef([]);

    useEffect(() => {
        itemsRef.current = itemsRef.current.slice(0, listPresc.length);
    }, [listPresc]);

    const [listReceitas, setReceitas] = useState([])

    const divide = useCallback(() => {
        let soma = 0
        let listIndex = []
        let listOfListIndex = []
        itemsRef.current.forEach((w, index) => {
            if (soma <= impressao.somaheighta4) {  ///(a4size.height - 1000)  // fazer a definição em breve heightbloco no index.js do sus
                console.log("soma teste   ", soma);
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
            let grupoprescricoes = listPresc.slice(r[0], r[r.length - 1] + 1)

            let grupoprescricoessort = Reorder(grupoprescricoes)

            listReceitas.push(
                <div key={r}>
                    {/* <ReceitaSUS prescricoes={grupoprescricoessort} via={props.via} mes={props.mes} /> */}
                    <ReceitaByLocal prescricoes={grupoprescricoessort} via={via} mes={mes} tipo={tipo} />
                </div>
            )
        })

        setReceitas(listReceitas)

    }, [impressao.somaheighta4, listPresc, mes, tipo, via])

    useEffect(() => {
        if (itemsRef.current) {
            divide()
        }
    }, [divide])

    return (
        <>
            {itemsRef.current.length === 0 &&
                listPresc.map((p, i) =>
                    <div key={i} ref={el => itemsRef.current[i] = el} >
                        {/* vai ter que mudar aqui depois */}
                        <PrescricaoSUS prescricao={p} />
                        {/* {impressao.local === 'consultorio' ? <PrescricaoSUS prescricao={p} /> : <PrescricaoConsultorio prescricao={p} />} */}
                    </div>
                )
            }
            {listReceitas && listReceitas}
        </>
    )
}

export default FactoryReceitas