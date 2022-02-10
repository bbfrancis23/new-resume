import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip } from '@mui/material'
import { useTheme } from '@emotion/react'

export default function ToolTip(props) {
  const theme = useTheme()
  const { title, children, ...forwardProps } = props

  return (
  /* It would be a waste of code in this case to list all props we want to pass individually to get rid of this warning
    The idea here to make a global way of turning off tooltips */
    <Tooltip title={theme.effects.tooltips ? title : ''} {...forwardProps}>
      {children}
    </Tooltip>
  )
}
ToolTip.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}

/* Final QA for version 1: Brian Francis - 01/10/2022  */
