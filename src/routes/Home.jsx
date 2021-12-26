import { Box } from '@mui/material'
import React from 'react'
import { appConfig } from '../AppConfig'

export default function Home() {
  return (
    <Box sx={{ width: '100%', pt: 1 }}>
      { appConfig.pageItems.map((item) => item.pageComponent) }
    </Box>
  )
}
