import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { PrescricaoMainContext } from '../..';

export default function PrescricaoData() {

    const { prescricaoMain } = useContext(PrescricaoMainContext)
    const prescricao = prescricaoMain;

    return (
        <div>
            <Container className="mt-4">
                {prescricaoMain &&
                    <div>
                        <h5>{prescricao.medicamento.farmaco} ({prescricao.apresentaco.descricao})</h5>
                        {prescricao.continuo
                            ? <p>Contínuo: sim</p>
                            : <p>Contínuo: não</p>}
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
                            </div>}
                        {prescricao.imprimirorientacoes
                            ? <p>Imprimir orientações: sim</p>
                            : <p>Imprimir orientações: não</p>}
                        <p>Orientações: {prescricao.orientacoes}</p>
                        {prescricao.lmeId && <p>LME: {prescricao.lmemes1} | {prescricao.lmemes2} | {prescricao.lmemes3}</p>}
                        <p>Início: {prescricao.inicio}</p>
                        {prescricao.termino &&
                            <div>
                                <p>Termino: {prescricao.termino} </p>
                                <p>Motivo do termimo: {prescricao.motivotermico}</p>
                            </div>}
                    </div>
                }
            </Container>
        </div>
    );
}