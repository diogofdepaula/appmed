import React, { useState } from 'react';
import ClienteSet from '../../components/clienteset';
import Main from './pages';

const Atendimento = () => {

    const [param, setParam] = useState({
        cliente: null,
        page: 1
    })

    // const changePage = (paramCli, paramPg) => () => {
    //     setParam({ cliente: paramCli, page: paramPg })
    // }

    const GetContent = () => {
        switch (param.page) {
            case 1:
                return <ClienteSet />
            case 2:
                return <Main cliente={param.cliente} />
            default:
                return <div />
        }
    }

    return <GetContent />
}

export default Atendimento