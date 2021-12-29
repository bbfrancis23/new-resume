import React from 'react'
import Paper from '@mui/material/Paper'
import { useTheme } from '@emotion/react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'

export default function PageItem(props) {
  const theme = useTheme()
  theme.effects ||= ''

  const { id, children, label } = props

  return (
    <Box id={id} sx={{ pt: 1 }}>
      <Paper
        sx={{
          m: 'auto',
          mt: 10,
          mb: 10,
          p: 5,
          width: {
            xs: '100%', md: '90%', lg: '70%', xl: '60%',
          },

        }}
        variant={theme.effects.stainedGlass ? 'stainedGlass' : 'outlined'}
        style={{
          //
        }}
      >
        { label
        && (
        <div style={{ textAlign: 'center', display: label ? 'block' : 'none' }}>
          <Typography variant="h4" style={{ fontSize: '35px', fontWeight: 'normal' }} sx={{ m: 0, pb: 5 }}>
            {label}
          </Typography>
        </div>
        )}

        {children}
      </Paper>
    </Box>

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
Quality Checked: Brian Francis - 12/27/2021
 */
