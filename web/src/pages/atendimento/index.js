import React, { useState } from 'react';
import ClienteSet from './component/clienteset';
import Main from './pages';

const Atendimento = () => {

    const [param, setParam] = useState({
        cliente: null,
        page: 1
    })

    const changePage = (paramCli, paramPg) => () => {
        setParam({ cliente: paramCli, page: paramPg })
    }

    const GetContent = () => {
        switch (param.page) {
            // case 1:
            //     return <ClienteSet param={changePage} />
            case 2:
                return <Main cliente={param.cliente} />
            default:
                return <ClienteSet param={changePage} />;
        }
    }

    return <GetContent />
}

export default Atendimento