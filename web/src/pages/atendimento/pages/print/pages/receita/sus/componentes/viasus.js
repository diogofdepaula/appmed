import { Box, Typography } from '@material-ui/core'
import React from 'react'

const ViaSUS = (props) => {

    return (
        <>
            <Box display="flex" justifyContent="center">
                <Typography variant={'h5'}>{props.via === "Estado" ? "via do Estado" : "via do paciente"}</Typography>
            </Box>
        </>
    )
}

export default ViaSUS