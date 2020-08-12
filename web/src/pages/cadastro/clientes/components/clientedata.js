import { Container, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { ClienteContext } from '..';

export default function ClienteData() {

    const { cliente } = useContext(ClienteContext)

    return (
        <>
            <Container>
                <Typography variant="h4" gutterBottom>{cliente.nome}</Typography >
                <p>Data de Nascimento: {cliente.nascimento}</p>
                {cliente.sexo
                    ? <p>Sexo: Masculino</p>
                    : <p>Sexo: Feminino</p>
                }
                <p>Peso: {cliente.peso} Kg</p>
                <p>Altura: {cliente.altura}cm</p>
                <p>Endereço: {cliente.endereco}</p>
                <p>Tefelone: {cliente.telefone}</p>
                <p>Celular: {cliente.celular}</p>
                <p>E-mail: {cliente.email}</p>
                <p>CNS: {cliente.cns}</p>
                <p>CPF: {cliente.cpf}</p>
                <p>Nome da mãe: {cliente.mae}</p>
            </Container>
        </>
    )
}