import { Box, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { ClienteContext } from '../../../../../../../App'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    // root: {
    //     display: 'flex',
    //     backgroundColor: theme.palette.common.white
    // },
    box: {
        display: 'block',
        paddingTop: 3,
        paddingBottom: 7,
    },
    typonome: {
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    typocpf: {
        fontVariant: 'subtitle2',
        textAlign: 'center'
    }
}));


const Identificacao = () => {

    const classes = useStyles();

    const { clienteContext } = useContext(ClienteContext)

    return (
        <>
            <Box className={classes.box} >
                <Typography className={classes.typonome} >

                    {clienteContext.nome}
                </Typography>
                {clienteContext.cpf &&
                    <Typography className={classes.typocpf}  >
                        CPF: {clienteContext.cpf}
                    </Typography>
                }
            </Box>
        </>
    )
}

export default Identificacao