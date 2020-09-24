import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { LMEPrintContext } from '../..'

const Linha6LME = () => {

    const lme = useContext(LMEPrintContext)

    return (
        <>
            <Box
                mt={2}
            >
                <Grid container spacing={1}>
                    <Grid item xs={2}>
                        <Box
                            width={1}
                            border={1}
                            borderColor="black"
                            display="block"
                        >
                            <Box mt={-1} ml={2} display="flex">
                                <Typography component={'span'} variant="caption" noWrap={true} >
                                    <Box bgcolor="white" px={1}>9 - CID10</Box>
                                </Typography>
                            </Box>
                            <Box>
                                <Typography component={'span'} variant={'body1'} align={'center'}>
                                    <Box>{lme.cid10}</Box>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={10}>
                        <Box
                            width={1}
                            border={1}
                            borderColor="black"
                            display="block"
                        >
                            <Box mt={-1} ml={2} display="flex">
                                <Typography component={'span'} variant="caption" noWrap={true} >
                                    <Box bgcolor="white" px={1}>10 - Diagnóstico</Box>
                                </Typography>
                            </Box>
                            <Box ml={1}>
                                <Typography component={'span'} variant={'body1'} align={'left'}>
                                    <Box>{lme.diagnostico}</Box>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>



            </Box>
        </>
    )
}

export default Linha6LME