import { Button, Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import { PageContext } from '../..';
import PrescricaoData from '../components/prescricaodata';
import PrescricaoList from '../components/prescricaolist';

export default function PrescricaoMain() {

    const setPage = useContext(PageContext)

    const indices = [
        ['prescricaoinsert', 'Nova Prescrição'],
        ['prescricaoprint', 'Imprimir Prescrições'],
        ['xxxxxxxxxxx', 'XXXXXX'],
        ['yyyyyyy', 'YYYYYYY'],
        ['zzzzzzzzzz', 'ZZZZZZ'],
    ]

    return (
        <>
            <Grid container spacing={1}>
                {indices.map(x =>
                    <Grid item>
                        <Button
                            key={x[0]}
                            variant="contained"
                            onClick={() => {
                                setPage(x[0])
                            }}
                        >{x[1]}
                        </Button>
                    </Grid>
                )}
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <PrescricaoList />
                </Grid>
                <Grid item xs>
                    <PrescricaoData />
                </Grid>
            </Grid>
        </>
    )
}