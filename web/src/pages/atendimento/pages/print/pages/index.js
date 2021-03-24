
import React, { useContext } from 'react';
import { ImpressaoContext } from '../../..';
//import ReceitaConsultorio from '../pages/receita/consultorio/receitaconsultorio'
import FactoryLME from './lme';
import FactoryReceitasSUS from './receita';
import FactoryRelatorio from './relatorio';

const Factory = () => {

    const { impressao } = useContext(ImpressaoContext)

    const PrintJob = () => {

        let jobs = []

        // print lmes
        let lmejob = impressao.lmesSelecionadas?.map((l, i) =>
            <div key={i}>
                <FactoryLME lme={l} />
                {l.relatorio && <FactoryRelatorio lme={l} />}

                {/* Receitas */}
                {l.prescricoes.filter(p => p.medicamento.controlado).length > 0 ?
                    [...Array(6).keys()].map(d =>
                        <div key={d}>
                            {/* tem que passar o valor de cada mes da prescricao para cada receita de cada mês se não sai somente a soma */}
                            <FactoryReceitasSUS listPresc={l.prescricoes} via={"Estado"} mes={d} />
                        </div>
                    )
                    :
                    <FactoryReceitasSUS listPresc={l.prescricoes} via={"Estado"} />
                }
                {/* Medicamentos não controlados */}
                {/* não passar a variável mês, para dar undifined lá nos componentes internos e saber, saber que é via paciente (aí não precisa passar o via paciente) */}
                <FactoryReceitasSUS listPresc={l.prescricoes} via={"paciente"} />
            </div>
        )

        if (lmejob) {
            jobs.push(lmejob)
        }

        // print prescricoesSelecionadas
        if (impressao.prescricoesSelecionadas.length > 0) {
            // não passo parametro via para não aparecer a linha via
            // ser depois se fica melhor manter a 
            jobs.push(<div key={0}><FactoryReceitasSUS listPresc={impressao.prescricoesSelecionadas} /></div>)
        }

        return jobs

    }

    return <PrintJob />
    
}

export default Factory