import React, { useCallback, useEffect, useState } from 'react';
import ClienteSet from './component/clienteset';
import Main from './pages';

export default function Atendimento() {

    const [page, setPage] = useState(1)
    const [cliente, setCliente] = useState()

    const pageset = useCallback(
        () => {
            setPage(2)
        }, []
    )

    useEffect(() => {
        pageset()
    }, [cliente, pageset])

    console.log('page ', page )

    return (
        <div>
            {page === 1 && <ClienteSet passCliente={setCliente} />}
            {page === 2 && <Main cliente={cliente} />}
        </div>
    )
}

//https://pt-br.reactjs.org/docs/context.html