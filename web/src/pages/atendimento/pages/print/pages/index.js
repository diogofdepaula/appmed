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
                        {/* depois faz o preparo para definir Fila de impressão */}
                        {/* quando for fazer a fila de impressao. o lme passado para o componente abaixo já está completo com 
                        com as prescrições e tudo. Então dá para mandar tudo (LME, Relatorio e Receita so por essa {lme})
                        ao inves de pegar a impresso.Selecionadas, passar como props para o FactoryReceitaSUS para poder usar tando para 
                        somente receita como para o lme
                        */}
                        <FactoryLME lme={impressao.lmesSelecionadas[0]} />
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