import React from 'react';
import ReceitaSUS from './sus';

export default function FactoryReceitasSUS() {


    const { prescricoesSelecionadas } = useContext(ImpressaoContext)

    // A <Receita /> já existe. Ela precisa saber somente quais prescricoes vão no BlocoPrescricoes
    // Então passa por props (tem que ser props mesmo) para o <Receita /> quais serão as prescricoes
    // então chama ela de volta aqui
    // depios faz um if baseado no heigth para determinar quais irão 
    // por agora faz de 0 a 3 e 3 a 7.




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
            <div overflow="hidden" style={{ width: "1240px", height: "1754px" }} >
                <ReceitaSUS />
            </div>
        </>
    )
}