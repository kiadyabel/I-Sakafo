import { Box, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const Footer = () => {
  return (
    <Container>
      <Box sx={{display:"flex",alignItem:"center",justifyContent:"center", margin:5}}>
        <Typography  align="center" variant="body3" >copyright Abel 2022</Typography>
        </Box>
    </Container>
  )
}

export default Footer