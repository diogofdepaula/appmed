import { Divider } from '@material-ui/core';
import React from 'react';
import FirstAppBar from './firstappbar'
import SecondAppBar from './secondappbar';
import ThirdAppBar from './thirdappbar';

const AtendimentoAppBar = () => {
    return (
        <>
            <FirstAppBar />
            <Divider />
            <SecondAppBar />
            <Divider />
            <ThirdAppBar />
            <Divider />
        </>
    )
}
export default AtendimentoAppBar