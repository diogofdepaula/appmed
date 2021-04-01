import { IconButton, Tooltip } from '@material-ui/core';
import PrintIcon from '@material-ui/icons/Print';
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Factory from '../../pages';

class ComponentToPrint extends React.Component {
    render() {
        return (<Factory />)
    }
}

const ButtonPrint = () => {

    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current
        //pageStyle: '@page { size: A4 portrait;}'
    });

    return (
        <>
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
        </>
    )
}

export default ButtonPrint