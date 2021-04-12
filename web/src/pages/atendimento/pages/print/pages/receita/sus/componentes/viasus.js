import { Box, Typography } from '@material-ui/core'
import React from 'react'

const ViaSUS = (props) => {

    return (
        <div>
            <Box display="flex" justifyContent="center">
                <Typography variant={'h5'}>{"via do " + props.via}</Typography>
            </Box>
        </div>
    )
}

export default ViaSUS