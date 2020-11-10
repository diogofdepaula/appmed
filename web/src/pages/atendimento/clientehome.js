import React, { useContext } from 'react'
import { ClienteContext } from '../../App'

const ClienteHome = () => {

    const { clientecontext } = useContext(ClienteContext)
    
    return (
        <div display="flex">
            <div>
                Página ClienteHome
            </div>
            <div>
                {clientecontext.nome}
            </div>
        </div>
    )
}
export default ClienteHome