// import React from 'react'
// import ClienteHeader from '../component/clienteheader'
// import { Link } from 'react-router-dom'
// import { Container, Button } from 'react-bootstrap';

// export default function Main(props) {

//     const Cliente = React.createContext(props.location.state.cliente);

//     const cliente = props.location.state.cliente

//     return (
//         <div>
//             <ClienteHeader cliente={cliente} />

//             <p>
//                 EU QUERIA DEIXAR UNS BOTÕES BEM GRANDÕES PARECENDO CARDS
//                 FAZER ISSO DEPOIS PARA DIFERENCIAR E FACILITAR O CLICK
//             </p>
//             <Container fluid className="mt-2">
//                 <Link to={{ pathname: `/prescricoes/${cliente.id}`, state: { cliente } }} >
//                     <Button variant="outline-primary" className="ml-2">Prescrições</Button>
//                 </Link>
//                 <Link to={{ pathname: `/lmes/${cliente.id}`, state: { cliente } }}>
//                     <Button variant="outline-primary" className="ml-2">LME</Button>
//                 </Link>
//                 <Link to="/##">
//                     <Button variant="outline-primary" className="ml-2">Solicitações</Button>
//                 </Link>
//                 <Link to="/###">
//                     <Button variant="outline-primary" className="ml-2">Atestados</Button>
//                 </Link>
//                 <Link to="/###">
//                     <Button variant="outline-primary" className="ml-2">Termos de consentimento</Button>
//                 </Link>
//             </Container>
//         </div>
//     )
// }