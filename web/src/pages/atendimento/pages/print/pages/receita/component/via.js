import { Box, Typography } from '@material-ui/core'
import React from 'react'

const Via = ({ via }) => {

    return (
        <>
            <Box display="flex" justifyContent="center">
                <Typography variant={'h5'}>{"via do " + via}</Typography>
            </Box>
        </>
    )
}

export default Via