import addMonths from 'date-fns/addMonths';
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

        console.log('impressao.lmesSelecionadas', impressao.lmesSelecionadas)

        // print lmes
        let lmejob = impressao.lmesSelecionadas?.map((l, i) =>
            <div key={i}>
                <FactoryLME lme={l} />
                {l.relatorio && <FactoryRelatorio lme={l} />}

                {/* Receitas */}
                {l.prescricoes.filter(p => p.medicamento.controlado) ?
                    [...Array(6).keys()].map(d =>
                        <div key={d}>
                            <FactoryReceitasSUS listPresc={l.prescricoes} via={"Estado"} data={addMonths(impressao.database, d)} />
                            {/* //FAZER UMA RECEITA DO PACIENTE COM A SOMATÓRIA DAS POSOLOGIAS DE CADA MÊS
                        // VER SE TEM COMO IR ALTERANDO A POSOLOGIA CONFORME PASSA OS MESES
                        //JÁ PENSANDO NUMA PROGRESSAO DE DOSE */}
                        </div>
                    )
                    :
                    <FactoryReceitasSUS listPresc={l.prescricoes} via={"Estado"} data={impressao.database} />
                }
                {/* Medicamentos não controlados */}
                <FactoryReceitasSUS listPresc={l.prescricoes} via={"paciente"} data={impressao.database} />
            </div>
        )
        if (lmejob) {
            jobs.push(lmejob)
        }

        // print prescricoesSelecionadas
        if (impressao.prescricoesSelecionadas) {
            // não passo parametro via para não aparecer a linha via
            // ser depois se fica melhor manter a 
            jobs.push(<FactoryReceitasSUS listPresc={impressao.prescricoesSelecionadas} />)
        }

        return jobs

    }

    return (
        <>
            <PrintJob />
        </>
    )
}