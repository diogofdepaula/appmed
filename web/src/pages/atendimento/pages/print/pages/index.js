import React, { useContext } from 'react';
//import ReceitaConsultorio from '../pages/receita/consultorio/receitaconsultorio'
import { ImpressaoContext } from '..';
import FactoryLME from './lme';
import FactoryReceitasSUS from './receita';
import FactoryRelatorio from './relatorio';

export default function Factory() {

    const { impressao } = useContext(ImpressaoContext)

    const FilaImpressao = () => {

        let printjob = []

        let lmejob = <div></div>

        lmejob = impressao.lmesSelecionadas?.map((l, i) =>
            <div key={i}>
                <FactoryLME lme={l} />
                {l.relatorio ? <FactoryRelatorio lme={l} /> : <div></div>}
            </div>
        )

        printjob.push(lmejob)

        return printjob

    }

    return (
        <>
            <FilaImpressao />
        </>
    )
}