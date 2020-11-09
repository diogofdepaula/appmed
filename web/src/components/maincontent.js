import React, { useContext } from 'react';
import { MainContentContext } from '../App';
import Atendimento from '../pages/atendimento';

const MainContent = () => {

    const { maincontext } = useContext(MainContentContext)

    const GetContent = () => {

        switch (maincontext.page) {
            case 'atendimento':
                return <Atendimento />
            default:
                // FAZER UMA PÁGINA INICIAL DEPOIS
                return <div />
        }
    }

    return <GetContent />
}

export default MainContent