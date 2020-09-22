import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'

const Linha5xLME = () => {

    return (
        <>
            <Box>
                <Grid container>
                    <Grid container item direction="row" justify="center" alignItems="center" xs={7}>
                        <Grid item xs>
                            <Box borderTop={1}>
                                <Typography component={'span'} variant="h6" noWrap={true} >
                                    <Box ml={1}>Medicamento XXXXX</Box>
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container item xs={5}>
                        <Box width={1} borderLeft={1}>
                            <Grid container item direction="row" justify="center" alignItems="center">
                                <Grid item xs>
                                    <Box borderTop={1} borderRight={1}>
                                        <Typography component={'span'} variant="h6" noWrap={true} align="center"><Box>888</Box></Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs>
                                    <Box borderTop={1} borderRight={1}>
                                        <Typography component={'span'} variant="h6" noWrap={true} align="center"><Box>777</Box></Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs>
                                    <Box borderTop={1} borderRight={1}>
                                        <Typography component={'span'} variant="h6" noWrap={true} align="center"><Box>555</Box></Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs>
                                    <Box borderTop={1} borderRight={1}>
                                        <Typography component={'span'} variant="h6" noWrap={true} align="center"><Box>333</Box></Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs>
                                    <Box borderTop={1} borderRight={1}>
                                        <Typography component={'span'} variant="h6" noWrap={true} align="center"><Box>222</Box></Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs>
                                    <Box borderTop={1}>
                                        <Typography component={'span'} variant="h6" noWrap={true} align="center"><Box>000</Box></Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha5xLME