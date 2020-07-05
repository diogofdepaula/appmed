import React from 'react';
import { Container } from 'react-bootstrap';

export default function PrescricaoData(props) {

    const prescricao = props.prescricao

    const medicamento = props.medicamento

    // tem que fazer esse if se não dá erro devido o undefined quando carrega
    if (!prescricao) {
        return <div></div>
    } else {
        return (
            <div>
                <Container>
                    <p>Resumo da prescrição</p>
                    {prescricao.apresentacoId && 
                        <h5>{medicamento.farmaco} ({medicamento.apresentacoes.filter(y => y.id === prescricao.apresentacoId).map(w => w.descricao)})</h5>
                    }
                    {prescricao.usoposologiapadrao
                        ?
                        <h6>{medicamento.posologias && medicamento.posologias.filter(x => x.id === prescricao.posologiaId).map(y => y.posologia)}</h6>
                        :
                        <>
                            <h6>Posologia Não Padrão: {prescricao.posologianaopadrao}</h6>
                            <h6>Quantidade Não Padrão: {prescricao.quantidadenaopadrao}  {prescricao.formanaopadrao}</h6>
                        </>
                    }
                    {prescricao.continuo && <p>uso contínuo</p>}
                    {prescricao.imprimirorientacoes &&
                        <>
                            <p>Imprimirá a seguintes orientações</p>
                            <p>{prescricao.orientacoes}</p>
                        </>
                    }
                    {prescricao.inicio && <p>Início: {prescricao.inicio}</p>}
                </Container>
            </div>
        )
    }
}