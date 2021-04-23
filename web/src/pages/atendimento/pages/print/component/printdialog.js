import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Factory from '../pages';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const PrintDialog = ({ open, handleClose }) => {

    const classes = useStyles();

    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        pageStyle: '@page { size: A4 portrait;}',
        onAfterPrint: () => handleClose()
    });

    return (
        <div>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Lista de impressão
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handlePrint}>
                            Imprimir
                        </Button>
                    </Toolbar>
                </AppBar>
                <div ref={componentRef}>
                    <Factory />
                </div>
            </Dialog>
        </div>
    );
}

export default PrintDialog