import React from 'react'
// import { useTheme, alpha } from '@mui/material/styles'
import Tooltip from '@mui/material/Tooltip'
import Fab from '@mui/material/Fab'
import PropTypes from 'prop-types'

export default function StainedGlassButton(props) {
  // const theme = useTheme()
  const {
    tooltip, onClick, style, size, children, disabled,
  } = props

  return (

    <Tooltip title={tooltip || ''} onClick={onClick} style={style}>
      <Fab
        size={size}
        disabled={disabled}
        variant="stainedGlass"
      >
        {children}
      </Fab>
    </Tooltip>

  )
}

StainedGlassButton.defaultProps = {
  tooltip: '',
  style: {},
  size: '',
  disabled: false,
}

StainedGlassButton.propTypes = {
  tooltip: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  size: PropTypes.string,
  children: PropTypes.element.isRequired,
  disabled: PropTypes.bool,
}
