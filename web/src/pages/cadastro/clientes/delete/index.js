// import React, { useCallback, useContext, useEffect } from 'react';
// import { ClienteContext, PageContext } from '..';

// export default function ClienteDelete(param) {

//     const setPage = useContext(PageContext)
//     const { setCliente } = useContext(ClienteContext)

//     const fetchData = useCallback(async () => {
//         fetch(`http://localhost:4001/api.appmed/clientes/${param}`, {
//             method: 'delete',
//         }).then(data => {
//             if (data.ok) {
//                 setPage('clientemain')
//                 setCliente(null)
//                 console.log('teste um')
//             }
//         })
//     }, [param, setPage, setCliente])

//     useEffect(() => {
//         fetchData();
//     }, [fetchData])

//     console.log('teste')

//     return (
//         <div>

//         </div>
//     )
// }

