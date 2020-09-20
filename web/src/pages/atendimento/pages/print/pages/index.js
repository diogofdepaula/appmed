import React, { useContext } from 'react';
//import ReceitaConsultorio from '../pages/receita/consultorio/receitaconsultorio'
import { ImpressaoContext } from '..';
import FactoryLME from './lme';
import FactoryReceitasSUS from './receita';

export default function Factory() {

    const { impressao } = useContext(ImpressaoContext)

    const FilaImpressao = () => {

        // montar aqui toda fila de impressão.
        // lme, relatorio, receitas e assim por diante

        if (impressao.prescricoesSelecionadas.length > 0) {
            if (impressao.local === 'consultorio') {
                return (
                    <div>
                        Receita do consultório
                    </div>
                )
            } else {
                return (
                    <div>
                        <FactoryReceitasSUS />
                        <FactoryLME />
                    </div>
                )
            }
        } else {
            return (
                <>
                </>
            )
        }
    }

    return (
        <>
            <FilaImpressao />
        </>
    )
}