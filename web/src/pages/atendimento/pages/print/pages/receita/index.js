import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReceitaSUS from './sus';
import PrescricaoSUS from './sus/componentes/prescricaosus';
import Reorder from './../../component/reorder'

const FactoryReceitasSUS = (props) => {

    const itemsRef = useRef([]);

    useEffect(() => {
        itemsRef.current = itemsRef.current.slice(0, props.listPresc.length);
    }, [props]);

    const [listReceitas, setReceitas] = useState([])

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
            let grupoprescricoes = props.listPresc.slice(r[0], r[r.length - 1] + 1)

            let grupoprescricoessort = Reorder(grupoprescricoes)

            listReceitas.push(
                <div key={r}>
                    <ReceitaSUS prescricoes={grupoprescricoessort} via={props.via} mes={props.mes} />
                </div>
            )
        })

        setReceitas(listReceitas)

    }, [props])

    useEffect(() => {
        if (itemsRef.current) {
            divide()
        }
    }, [divide])

    return (
        <div>
            {itemsRef.current.length === 0 &&
                props.listPresc.map((p, i) =>
                    <div key={i} ref={el => itemsRef.current[i] = el} >
                        <PrescricaoSUS prescricao={p} />
                    </div>
                )
            }
            {listReceitas && listReceitas}
        </div>
    )
}

export default FactoryReceitasSUS