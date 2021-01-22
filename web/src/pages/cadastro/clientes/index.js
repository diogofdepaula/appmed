import { Box } from '@material-ui/core';
import React, { useState, createContext } from 'react';
import Content from './components/content';

// tem o ClienteContext (sem s) que eu preferi manter
// para poder acessar o Cliente de todo o programa
export const ClientesContext = createContext(null)

const Clientes = () => {

    const [ page, setPage ] = useState('')

    return (
        <>
            <ClientesContext.Provider value={{ page: page, setPage: setPage }} >
                <Box>
                    <Content />
                </Box>
            </ClientesContext.Provider>
        </>
    )
}

export default Clientes