import { Box, Typography } from '@material-ui/core'
import React, { useState } from 'react'

const ViaSUS = () => {

    // depois passa um props, pois vai ter a primeira via do paciente e segunda via do sus
    const [via] = useState('via do paciente')


    return (
        <>
            <Box
                display="flex" 
                justifyContent="center"
            >
                <Typography variant={'h5'}>{via}</Typography>
            </Box>
        </>
    )
}

export default ViaSUS