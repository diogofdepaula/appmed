import { Box, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { PrescricaoMainContext } from '../..';

export default function PrescricaoData() {

    const { prescricaoMain } = useContext(PrescricaoMainContext)
    const prescricao = prescricaoMain;

    return (
        <>
            <Box mt={4}>
                {prescricaoMain &&
                    <>
                        <Typography variant={'h6'}>{prescricao.medicamento.farmaco} ({prescricao.apresentaco.descricao})</Typography>
                        {prescricao.continuo
                            ? <Typography variant={'body1'}>Contínuo: sim</Typography>
                            : <Typography variant={'body1'}>Contínuo: não</Typography>}
                        {prescricao.usoposologiapadrao ?
                            <>
                                Posologia:
                                <Typography variant={'body1'} align={'justify'}>{prescricao.posologia.posologia}</Typography>
                                <Typography variant={'body1'}>{prescricao.posologia.quantidade} {prescricao.posologia.forma}</Typography>
                            </>
                            :
                            <>
                                Posologia:
                                <Typography variant={'body1'} align={'justify'}>{prescricao.posologianaopadrao}</Typography>
                                <Typography variant={'body1'}>{prescricao.quantidadenaopadrao} {prescricao.formanaopadrao}</Typography>
                            </>}
                        {prescricao.imprimirorientacoes
                            ? <Typography variant={'body1'}>Imprimir orientações: sim</Typography>
                            : <Typography variant={'body1'}>Imprimir orientações: não</Typography>
                        }
                        <Typography variant={'body1'}>Orientações: {prescricao.orientacoes}</Typography>

                        {prescricao.lmeId &&
                            <Typography variant={'body1'}>LME: {prescricao.lmemes1} | {prescricao.lmemes2} | {prescricao.lmemes3}</Typography>
                        }
                        <Typography variant={'body1'}>Início: {prescricao.inicio}</Typography>
                        {prescricao.termino &&
                            <>
                                <Typography variant={'body1'}>Termino: {prescricao.termino} </Typography>
                                <Typography variant={'body1'}>Motivo do termimo: {prescricao.motivotermico}</Typography>
                            </>
                        }
                    </>
                }
            </Box>
        </>
    );
}