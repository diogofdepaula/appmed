
import { Box } from '@material-ui/core';
import React, { useContext } from 'react';
import { ImpressaoContext } from '../../..';
import FactoryLME from './lme';
import FactoryReceitas from './receita';
import FactoryRelatorio from './relatorio';

const Factory = () => {

    const LMERelatorioJob = ({ lme }) => {

        return (
            <div style={{ backgroundColor: "lightsalmon" }} >
                <FactoryLME lme={lme} />
                {lme.relatorio && <FactoryRelatorio lme={lme} />}
            </div>
        )
    }

    const ReceitaEstadoLMEJob = ({ lme }) => {

        if (lme.prescricoes.filter(p => p.medicamento.controlado).length > 0) {
            return (
                [...Array(6).keys()].map(d =>
                    <div key={d}>
                        {/* tem que passar o valor de cada mes da prescricao para cada receita de cada mês se não sai somente a soma */}
                        <FactoryReceitas listPresc={lme.prescricoes} via={"Estado"} mes={d} />
                    </div>
                )
            )
        } else {
            return (
                <div>
                    <FactoryReceitas listPresc={lme.prescricoes} via={"Estado"} />
                </div>
            )
        }
    }

    const ReceitaPacienteLMEJob = ({ lme }) => {
        console.log('teste 3');
        return (
            <div>
                <FactoryReceitas listPresc={lme.prescricoes} via={"paciente"} />
            </div>
        )
    }


    const PrintJob = () => {

        const { impressao } = useContext(ImpressaoContext)

        let jobs = []

        const DistribuiJob = (lme) => {
            console.log('teste 2');
            jobs.push(<LMERelatorioJob lme={lme} />)
            jobs.push(<ReceitaEstadoLMEJob lme={lme} />)
            jobs.push(<ReceitaPacienteLMEJob lme={lme} />)
        }
        
        //        print lmes
        impressao.lmesSelecionadas?.map(lme => DistribuiJob(lme))

        //print prescricoesSelecionadas
        if (impressao.prescricoesSelecionadas.length > 0) {
            jobs.push(
                <Box key={0}>
                    <FactoryReceitas listPresc={impressao.prescricoesSelecionadas} />
                </Box>
            )
        }

        return jobs

    }

    return <PrintJob />

}

export default Factory