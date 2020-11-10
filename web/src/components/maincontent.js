import React, { useContext } from 'react';
import { MainContentContext } from '../App';
import Atendimento from '../pages/atendimento';

const MainContent = () => {

    const { maincontext } = useContext(MainContentContext)

    const GetContent = () => {

        switch (maincontext.page) {
            case 'atendimento':
                return <Atendimento />
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