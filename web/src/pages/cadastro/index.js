import React, { useState } from 'react';
import ClienteSet from './component/clienteset';
import Main from './pages';

export default function Atendimento() {

    const [page, setPage] = useState(1)
    //const [cliente, setCliente] = useState()

    const changePage = (paramCli, paramPg) => () => {
        setCliente(paramCli)
        setPage(paramPg)
    }

    return (
        <div>
            {page === 1 && <ClienteSet pass={changePage} />}
            {page === 2 && <Main cliente={cliente} />}
        </div>
    )
}