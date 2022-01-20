import React from 'react'

import { Stack } from '@mui/material'

/* eslint-disable react/destructuring-assignment  */
/* eslint-disable react/prop-types */

export default function SettingsStack(props) {
  return (
    <Stack direction="row" spacing={2} sx={{ p: 2 }}>
      {props.children}
    </Stack>
  )
}

/*
Quality Checked: Brian Francis - 01/09/2021
 */
