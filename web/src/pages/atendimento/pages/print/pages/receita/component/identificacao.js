import { Box, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { ClienteContext } from '../../../../../../../App'
import { makeStyles } from '@material-ui/core/styles';
import PorTipo from '../../../component/portipo';

const useStylesA4 = makeStyles((theme) => ({
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

const useStylesA5 = makeStyles((theme) => ({
    // root: {
    //     display: 'flex',
    //     backgroundColor: theme.palette.common.white
    // },
    box: {
        display: 'block',
        paddingTop: 1,
        paddingBottom: 1,
    },
    typonome: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    typocpf: {
        display: 'none'
    }
}));

const Identificacao = ({ tipo }) => {

    const classesA4 = useStylesA4();
    const classesA5 = useStylesA5();
    const classes = PorTipo(tipo, classesA4, classesA5)

    const { clienteContext } = useContext(ClienteContext)

    return (
        <>
            <Box className={classes.box} >
                <Typography className={classes.typonome} >
                    {clienteContext.nome}
                </Typography>
                <Typography className={classes.typocpf}  >
                    CPF: {clienteContext.cpf}
                </Typography>
            </Box>
        </>
    )
}

export default Identificacao