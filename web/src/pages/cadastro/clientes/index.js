import React, { useState, createContext } from 'react';
import ClienteMain from './main';
import ClienteDetails from './details';
import ClienteInsert from './insert';

export const PageContext = createContext('clientemain')
export const ClienteContext = createContext(null)

export default function Clientes() {

    const [page, setPage] = useState('clientemain')
    const [cliente, setCliente] = useState()

    return (
        <div>
            <PageContext.Provider value={setPage}>
                <ClienteContext.Provider value={{ cliente: cliente, setCliente: setCliente }} >
                    {page === 'clientemain' && <ClienteMain />}
                    {page === 'clientedetails' && <ClienteDetails />}
                    {page === 'clienteinsert' && <ClienteInsert />}
                    {/* {page === 'clienteupdate' && <Main cliente={cliente} />} */} 
                </ClienteContext.Provider>
            </PageContext.Provider>
        </div>
    )
}