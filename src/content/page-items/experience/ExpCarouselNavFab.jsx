import React from 'react'
import PropTypes from 'prop-types'
import {Fab} from '@mui/material'
import {KeyboardArrowLeft, KeyboardArrowRight} from '@mui/icons-material'

export default function ExpCarouselNavFab({
  direction, onClick, disabled, visible, sx,
}) {
  const Icon = direction === 'prev' ? KeyboardArrowLeft : KeyboardArrowRight
  const ariaLabel = direction === 'prev' ? 'Previous image' : 'Next image'

  return (
    <Fab
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
      variant="effects"
      fade="true"
      sx={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.2s',
        ...sx,
      }}>
      <Icon />
    </Fab>
  )
}

ExpCarouselNavFab.propTypes = {
  direction: PropTypes.oneOf(['prev', 'next']).isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  sx: PropTypes.object,
}
ExpCarouselNavFab.defaultProps = {
  sx: {},
}
