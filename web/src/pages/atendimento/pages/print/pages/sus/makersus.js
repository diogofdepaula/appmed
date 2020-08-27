import React, { useContext, useRef, useState, useEffect } from 'react'
import { ImpressaoContext } from '../..'
import ReceitaSUS from './receitasus'

export default function MakerSUS() {

    const { prescricoesSelecionadas } = useContext(ImpressaoContext)

    prescricoesSelecionadas.map(presc =>
        console.log(presc)
    )

    const targetRef  = useRef();

    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (targetRef.current) {
            setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetHeight 
            });
        }
    }, []);

    return (
        <div ref={targetRef}>
            <ReceitaSUS />
            <ReceitaSUS />
            <ReceitaSUS />
            <ReceitaSUS />
        </div>
    )
}