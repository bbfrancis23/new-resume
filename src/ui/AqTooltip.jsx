import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip, useTheme } from '@mui/material'

export default function AqTooltip(props) {
  const theme = useTheme()
  const {
    title, children, placement, style,
  } = props
  theme.effects ||= ''

  return (
    <Tooltip title={theme.effects.toolTips ? title : ''} placement={placement} style={style}>
      {children}
    </Tooltip>
  )
}
AqTooltip.defaultProps = {
  placement: undefined,
  style: {},
}
AqTooltip.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  placement: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
}

/*
Quality Checked: Brian Francis - 12/30/2021
 */
