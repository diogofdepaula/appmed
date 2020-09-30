import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'

const Linha5xLME = (props) => {

    return (
        <>
            <Box>
                <Grid container>
                    <Grid container item direction="row" justify="center" alignItems="center" xs={7}>
                        <Grid item xs>
                            <Box borderTop={1}>
                                <Typography component={'span'} variant="h6" noWrap={true} >
                                    <Box ml={1}>{props.prescricao.medicamento.farmaco} - {props.prescricao.apresentaco.descricao}</Box>
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container item xs={5}>
                        <Box width={1} borderLeft={1}>
                            <Grid container item direction="row" justify="center" alignItems="stretch">
                                <Grid item xs>
                                    <Box borderTop={1} borderRight={1} height={1}>
                                        <Typography component={'span'} variant="h6" noWrap={true} align="center"><Box>{props.prescricao.lmemes1}</Box></Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs>
                                    <Box borderTop={1} borderRight={1} height={1}>
                                        <Typography component={'span'} variant="h6" noWrap={true} align="center"><Box>{props.prescricao.lmemes2}</Box></Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs>
                                    <Box borderTop={1} borderRight={1} height={1}>
                                        <Typography component={'span'} variant="h6" noWrap={true} align="center"><Box>{props.prescricao.lmemes3}</Box></Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs>
                                    <Box borderTop={1} borderRight={1} height={1}>
                                        <Typography component={'span'} variant="h6" noWrap={true} align="center"><Box>{props.prescricao.lmemes4}</Box></Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs>
                                    <Box borderTop={1} borderRight={1} height={1}>
                                        <Typography component={'span'} variant="h6" noWrap={true} align="center"><Box>{props.prescricao.lmemes5}</Box></Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs>
                                    <Box borderTop={1} height={1}>
                                        <Typography component={'span'} variant="h6" noWrap={true} align="center"><Box>{props.prescricao.lmemes6}</Box></Typography>
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