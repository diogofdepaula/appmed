import React, { useContext } from 'react';
import { PageContentContext } from '../App';
import Atendimento from '../pages/atendimento';
import ClienteHome from '../pages/atendimento/clientehome';

const MainContent = () => {

    const { pagecontentcontext } = useContext(PageContentContext)

    const GetContent = () => {

        switch (pagecontentcontext) {
            case 'atendimento':
                return <Atendimento />
            case 'clientehome':
                return <ClienteHome />
            case 'teste':
                return <div>Deixa aqui para os testes</div>
            default:
                // FAZER UMA PÁGINA INICIAL DEPOIS
                return <div>Futuramente página inicial</div>
        }
    }

    return <GetContent /> 
}

export default MainContent