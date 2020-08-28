import React, { useEffect, useRef, useState } from 'react';
import ReceitaSUS from './receitasus';

export default function MakerSUS() {

    //const { prescricoesSelecionadas } = useContext(ImpressaoContext)

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