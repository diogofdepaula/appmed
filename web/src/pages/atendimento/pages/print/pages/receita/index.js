import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReceitaSUS from './sus';
import PrescricaoSUS from './sus/componentes/prescricaosus';

export default function FactoryReceitasSUS(props) {

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

            console.log('grupoprescricoes', grupoprescricoes)

            // colocar em ordem de importância

            let classes = [
                ['ANALGESICO', 10],
                ['ANTICONVULSIVANTE', 7],
                ['ANTIDEPRESSIVO', 8],
                ['ANTIMICROBIANO', 13],
                ['CONVENCIONAL', 14],
                ['CORTICOIDE', 4],
                ['MMCDB', 1],                     // TEM QUE VER O QUE EU PUS NO DATAINITIAL POIS NÃO BATE COM O CLASSE NO INSERT DO MEDICAMENTO
                ['MMCDS', 3],
                ['MMCDPM', 2],
                ['OPIOIDE', 11],
                ['OSTEOMETABOLICO', 5],
                ['SUPLEMENTO', 12],
                ['VASOATIVO', 6],
                ['ANTIINFLAMATORIO', 9]
            ]


            let grupoprescricoessort = grupoprescricoes
                .map(sa => {
                    let c = classes.find(e => e[0] === sa.medicamento.classe)  // TEM QUE MELHORAR AQUI
                    return [sa, c[1]]
                })
                .sort((a, b) => a[1] - b[1])
                .map(sb => sb[0])

            listReceitas.push(
                <div key={r}>
                    <ReceitaSUS prescricoes={grupoprescricoessort} via={props.via} mes={props.mes}/>
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
        <>
            {itemsRef.current.length === 0 &&
                props.listPresc.map((p, i) =>
                    <div key={i} ref={el => itemsRef.current[i] = el} >
                        <PrescricaoSUS prescricao={p} />
                    </div>
                )
            }
            {listReceitas && listReceitas}
        </>
    )
}