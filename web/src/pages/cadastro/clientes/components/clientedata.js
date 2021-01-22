import { Container, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { ClienteContext } from '../../../../App';

const ClienteData = () => {

    const { clienteEdit } = useContext(ClienteContext)

    return (
        <>
            <Container>
                <Typography variant="h4" gutterBottom>{clienteEdit.nome}</Typography >
                <p>Data de Nascimento: {clienteEdit.nascimento}</p>
                {clienteEdit.sexo
                    ? <p>Sexo: Masculino</p>
                    : <p>Sexo: Feminino</p>
                }
                <p>Peso: {clienteEdit.peso} Kg</p>
                <p>Altura: {clienteEdit.altura}cm</p>
                <p>Endereço: {clienteEdit.endereco}</p>
                <p>Tefelone: {clienteEdit.telefone}</p>
                <p>Celular: {clienteEdit.celular}</p>
                <p>E-mail: {clienteEdit.email}</p>
                <p>CNS: {clienteEdit.cns}</p>
                <p>CPF: {clienteEdit.cpf}</p>
                <p>Nome da mãe: {clienteEdit.mae}</p>
            </Container>
        </>
    )
}


export default ClienteData