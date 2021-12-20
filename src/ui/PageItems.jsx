import React from 'react'
import Paper from '@mui/material/Paper'
import { useTheme } from '@emotion/react'

import PropTypes from 'prop-types'
import { alpha } from '@mui/material/styles'
import { Typography } from '@mui/material'

export default function PageItem(props) {
  const theme = useTheme()

  const { id, children, label } = props

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
      <div style={{ textAlign: 'center', display: label ? 'block' : 'none' }}>
        <Typography variant="h4" style={{ fontSize: '35px', fontWeight: 'normal' }} sx={{ m: 0, pb: 5 }}>
          {label}
        </Typography>
      </div>
      {children}
    </Paper>
  )
}
PageItem.defaultProps = {
  label: '',
}
PageItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  children: PropTypes.element.isRequired,
}

/*
Quality Checked: Brian Francis - 12/17/2021
 */
