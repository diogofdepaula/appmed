import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { format, parseISO } from 'date-fns';
import { ptBR } from "date-fns/locale";
import React, { useContext } from 'react';
import { ClienteContext } from '../../../../App';

const ClienteData = () => {

    const { clienteEdit } = useContext(ClienteContext)

    const date = clienteEdit.nascimento ? format(parseISO(clienteEdit.nascimento), "dd '/' MM '/' yyyy", { locale: ptBR }) : ''

    return (
        <>
            <Card>
                <CardActionArea>
                    <CardMedia
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {clienteEdit.nome}
                        </Typography>
                        {clienteEdit.nascimento && <p>Data de Nascimento: {date}</p>}
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
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <IconButton
                    >
                        <EditIcon />
                    </IconButton>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default ClienteData