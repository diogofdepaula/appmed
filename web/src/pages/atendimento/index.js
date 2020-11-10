import React, { useState } from 'react';
import Main from './pages';

const Atendimento = () => {

    const [param] = useState({
        cliente: null,
        page: 1
    })

    // const changePage = (paramCli, paramPg) => () => {
    //     setParam({ cliente: paramCli, page: paramPg })
    // }

    const GetContent = () => {
        switch (param.page) {
            case 1:
                return <div>Aqui ficaria o ClienteSet Antigo</div>
            case 2:
                return <Main cliente={param.cliente} />
            default:
                return <div />
        }
    }

    return <GetContent />
}

export default Atendimento