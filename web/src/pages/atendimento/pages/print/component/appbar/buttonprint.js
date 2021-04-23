import { IconButton, Tooltip } from '@material-ui/core';
import PrintIcon from '@material-ui/icons/Print';
import React, { useState } from 'react';
import PrintDialog from '../printdialog';

// class ComponentToPrint extends React.Component {
//     render() {
//         // Deixe o Factory entre <div> para pegar todos os elementos. 
//         // Caso contrário, ele imprimirá somente o primeiro
//         return (<div><Factory /></div>)
//     }
// }

const ButtonPrint = () => {

    // const componentRef = useRef();

    // const handlePrint = useReactToPrint({
    //     content: () => componentRef.current,
    //     pageStyle: '@page { size: A4 portrait;}'
    // });

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Tooltip title="Imprimir">
                <span>
                    <IconButton
                        onClick={handleOpen}
                    >
                        <PrintIcon />
                    </IconButton>
                </span>

            </Tooltip>
            <PrintDialog open={open} handleClose={handleClose} />
            {/* <div style={{ display: "none" }}>
                <ComponentToPrint ref={componentRef} />
            </div> */}
        </div>
    )
}

export default ButtonPrint