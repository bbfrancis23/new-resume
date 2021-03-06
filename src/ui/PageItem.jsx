import React from 'react'
import PropTypes from 'prop-types'
import {
  Box, Typography, useTheme, Card,
} from '@mui/material'

export default function PageItem(props) {
  const theme = useTheme()
  theme.effects ||= ''

  const { id, children, label } = props

  return (
    <Box id={id} sx={{ pt: 1, zIndex: -1 }}>
      <Card
        sx={{
          m: 'auto',
          mt: 10,
          mb: 10,
          p: 5,
          width: theme.contentItems.width,

        }}
        variant="effects"
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
      </Card>
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
Quality Checked: Brian Francis - 12/30/2021
 */
