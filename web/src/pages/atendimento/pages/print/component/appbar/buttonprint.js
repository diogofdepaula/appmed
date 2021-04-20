import { IconButton, Tooltip } from '@material-ui/core';
import PrintIcon from '@material-ui/icons/Print';
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Factory from '../../pages';

class ComponentToPrint extends React.Component {
    render() {
        // Deixe o Factory entre <div> para pegar todos os elementos. 
        // Caso contrário, ele imprimirá somente o primeiro
        return (<div><Factory /></div>)
    }
}

const ButtonPrint = () => {

    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        pageStyle: '@page { size: A4 portrait;}'
    });

    return (
        <div>
            <Tooltip title="Imprimir">
                <span>
                    <IconButton
                        onClick={handlePrint}
                    >
                        <PrintIcon />
                    </IconButton>
                </span>
            </Tooltip>
            <div style={{ display: "none" }}>
                <ComponentToPrint ref={componentRef} />
            </div>
        </div>
    )
}

export default ButtonPrint