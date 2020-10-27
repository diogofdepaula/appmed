import React, { useContext } from 'react';
//import ReceitaConsultorio from '../pages/receita/consultorio/receitaconsultorio'
import { ImpressaoContext } from '..';
import FactoryLME from './lme';
import FactoryReceitasSUS from './receita';
import FactoryRelatorio from './relatorio';

export default function Factory() {

    const { impressao } = useContext(ImpressaoContext)

    const PrintJob = () => {

        let jobs = []

        // print lmes
        let lmejob = impressao.lmesSelecionadas?.map((l, i) =>
            <div key={i}>
                <FactoryLME lme={l} />
                {l.relatorio && <FactoryRelatorio lme={l} />}
                <FactoryReceitasSUS listPresc={l.prescricoes} />
            </div>
        )
        if (lmejob) {
            jobs.push(lmejob)
        }


        // print prescricoesSelecionadas
        // let prescselecjob = lme.prescricoesSelecionadas.map((p, i) =>
        // )  tem que fazer dar cert
        


        return jobs

    }



    return (
        <>
            <PrintJob />
        </>
    )
}