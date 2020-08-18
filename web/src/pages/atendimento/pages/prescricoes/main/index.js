import { Button, Grid, Box } from '@material-ui/core';
import React, { useContext } from 'react';
import { PageContext } from '../..';
import PrescricaoData from '../components/prescricaodata';
import PrescricaoList from '../components/prescricaolist';
import PostAddIcon from '@material-ui/icons/PostAdd';
import PrintIcon from '@material-ui/icons/Print';

export default function PrescricaoMain() {

    const setPage = useContext(PageContext)

    return (
        <>
            <Box mt={1}>
                <Grid container spacing={1}>
                    <Grid item>
                        <Button
                            variant="contained"
                            startIcon={<PostAddIcon />}
                            onClick={() => {
                                setPage('prescricaoinsert')
                            }}
                        >Nova Prescrição</Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            startIcon={<PrintIcon />}
                            onClick={() => {
                                setPage('prescricaoprint')
                            }}
                        >Imprimir</Button>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <PrescricaoList />
                    </Grid>
                    <Grid item xs>
                        <PrescricaoData />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}