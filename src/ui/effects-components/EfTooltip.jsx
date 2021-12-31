import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip } from '@mui/material'
import { useTheme } from '@emotion/react'

export default function EfTooltip(props) {
  const theme = useTheme()
  const { title, children } = props
  theme.effects ||= ''

  return (
    <Tooltip title={theme.effects.tooltips ? title : ''} props={props}>
      {children}
    </Tooltip>
  )
}
EfTooltip.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}
