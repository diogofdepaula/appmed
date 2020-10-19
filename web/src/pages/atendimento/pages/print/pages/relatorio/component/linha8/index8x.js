import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'

const Linha8xLME = (props) => {

    return (
        <>
            <Box>
                <Grid container item direction="row" justify="center" alignItems="stretch">
                    <Grid item xs={3} style={{backgroundColor: "red"}}>
                        <Box borderTop={1} borderRight={1} height={1}>
                            <Typography component={'span'} variant="body1" noWrap={true}>
                                <Box ml={1} display="flex" alignItems="center">{props.prescricao[0][1]}</Box>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box borderTop={1} borderRight={1} height={1}>
                            <Typography component={'span'} variant="body1" noWrap={true} align="center" >
                                <Box ml={1}>{props.prescricao[1][1]}</Box>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                        <Box borderTop={1} borderRight={1} height={1}>
                            <Typography component={'span'} variant="body1" noWrap={true} align="center" >
                                <Box ml={1}>{props.prescricao[2][1]}</Box>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                        <Box borderTop={1} borderRight={1} height={1}>
                            <Typography component={'span'} variant="body1" noWrap={true} align="center" >
                                <Box ml={1}>{props.prescricao[3][1]}</Box>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <Box borderTop={1} height={1}>
                            <Typography component={'span'} variant="body1" Wrap={true} >
                                <Box ml={1}>{props.prescricao[4][1]}</Box>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha8xLME