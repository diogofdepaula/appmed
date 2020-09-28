import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'

const Linha5ExtraLME = () => {

    return (
        <>
            <Box>
                <Grid container>
                    <Grid container item direction="row" justify="center" xs={7} >
                        <Grid item xs>
                            <Box borderTop={1} height={1}>
                                <Typography component={'span'} variant="h6" noWrap={true} style={{color: "white"}}>
                                    <Box ml={1}>-</Box>
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container item xs={5}>
                        <Box width={1} borderLeft={1}>
                            <Grid container item direction="row" justify="center" alignItems="stretch" style={{height: "100%"}}>  
                                <Grid item xs>
                                    <Box borderTop={1} borderRight={1} height={1}>
                                        {/* <Typography component={'span'} variant="h6" noWrap={true} align="center"><Box></Box></Typography> */}
                                    </Box>
                                </Grid>
                                <Grid item xs>
                                    <Box borderTop={1} borderRight={1} height={1}>
                                        {/* <Typography component={'span'} variant="h6" noWrap={true} align="center"><Box></Box></Typography> */}
                                    </Box>
                                </Grid>
                                <Grid item xs>
                                    <Box borderTop={1} borderRight={1} height={1}>
                                        {/* <Typography component={'span'} variant="h6" noWrap={true} align="center"><Box></Box></Typography> */}
                                    </Box>
                                </Grid>
                                <Grid item xs>
                                    <Box borderTop={1} borderRight={1} height={1}>
                                        {/* <Typography component={'span'} variant="h6" noWrap={true} align="center"><Box></Box></Typography> */}
                                    </Box>
                                </Grid>
                                <Grid item xs>
                                    <Box borderTop={1} borderRight={1} height={1}>
                                        {/* <Typography component={'span'} variant="h6" noWrap={true} align="center"><Box></Box></Typography> */}
                                    </Box>
                                </Grid>
                                <Grid item xs>
                                    <Box borderTop={1} borderRight={0} height={1}>
                                        {/* <Typography component={'span'} variant="h6" noWrap={true} align="center"><Box></Box></Typography> */}
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

export default Linha5ExtraLME