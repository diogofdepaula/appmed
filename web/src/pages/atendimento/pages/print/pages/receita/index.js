import React, { useContext } from 'react';
import ReceitaSUS from './sus';
import { ImpressaoContext } from '../..';

export default function FactoryReceitasSUS() {

    const { prescricoesSelecionadas } = useContext(ImpressaoContext)

    const SetReceitas = () => {

        const receitas = []

        receitas.push(
            <div>
                <ReceitaSUS prescricoes={prescricoesSelecionadas} />
            </div>
        )

        return receitas
    }




    // // commit antes de inicar o markerSUS
    // const targetRef = useRef();
    // const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    // useEffect(() => {
    //     if (targetRef.current) {
    //         setDimensions({
    //             width: targetRef.current.offsetWidth,
    //             height: targetRef.current.offsetHeight
    //         });
    //     }
    // }, []);

    // console.log('dimensions', dimensions)



    // al invez de chamar o <Receita /> lá em baixo.
    // fazer uma função de chama um "foreach" de receitas

    return (
        <>
            <SetReceitas />
        </>
    )
}