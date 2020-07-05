import React from 'react';
import { Container } from 'react-bootstrap';

export default function PrescricaoInfo(props) {


    //TENTAR DEPOIS UNIR NUMA COISA SÓ A PRESCRICAOINFO COM A PRESCRICAODATA
    // A DIFERENÇA É QUE A PRESCRICAOINFO RECEBE UMA {prescricao} COM OS MEDICAMENTO, APRESENTACO, POSOLOGIAS JÁ DENTRO
    // E A PRESCRICAODATA RECEBE {prescricao} separado do {medicamento}

    const prescricao = props.prescricao

    // tem que fazer esse if se não dá erro devido o undefined quando carrega
    if (!prescricao) {
        return <div></div>
    } else {
        return (
            <div>
                <Container className="mt-2" >
                    <p>{prescricao.medicamento.farmaco} ({prescricao.apresentaco.descricao})</p>
                    {prescricao.continuo
                        ? <p>Contínuo: sim</p>
                        : <p>Contínuo: não</p>
                    }
                    {prescricao.usoposologiapadrao ?
                        <div>
                            Posologia:
                        <p>{prescricao.posologia.posologia}</p>
                            <p>{prescricao.posologia.quantidade} {prescricao.posologia.forma}</p>
                        </div>
                        :
                        <div>
                            Posologia:
                        <p>{prescricao.posologianaopadrao}</p>
                            <p>{prescricao.quantidadenaopadrao} {prescricao.formanaopadrao}</p>
                        </div>
                    }
                    {prescricao.imprimirorientacoes
                        ? <p>Imprimir orientações: sim</p>
                        : <p>Imprimir orientações: não</p>
                    }
                    <p>Orientações: {prescricao.orientacoes}</p>
                    <p>LME: {prescricao.lmemes1} | {prescricao.lmemes2} | {prescricao.lmemes3}</p>
                    <p>Início: {prescricao.inicio}</p>
                    {prescricao.termino &&
                        <div>
                            <p>Termino: {prescricao.termino} </p>
                            <p>Motivo do termimo: {prescricao.motivotermico}</p>
                        </div>
                    }
                </Container>
            </div>
        )
    }
}