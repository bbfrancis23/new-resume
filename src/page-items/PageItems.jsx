import React from 'react'
import Paper from '@mui/material/Paper'
import { useTheme } from '@emotion/react'

import PropTypes from 'prop-types'
import { alpha } from '@mui/material/styles'

export default function PageItem(props) {
  const theme = useTheme()

  const { id, children } = props

  return (
    <Paper
      elevation={12}
      id={id}
      sx={{
        margin: 'auto',
        width: {
          xs: '90%', md: '70%', lg: '70%', xl: '60%',
        },
        marginTop: theme.spacing(25),
        marginBottom: theme.spacing(25),
        padding: theme.spacing(5),
      }}
      style={{
        backgroundColor: alpha(theme.palette.background.default, 0.75),
        backdropFilter: 'blur(10px)',
      }}
    >
      {children}
    </Paper>
  )
}

PageItem.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}

/*
Quality Checked: Brian Francis - 12/17/2021
 */
