import React from 'react'

import PropTypes from 'prop-types'

import { Box } from '@mui/material'

import { ToolTip } from '../../../ui'

import { expRecsPropType } from '../../data'

export default function ExpCarouselControls(props) {
  const { expRec, activeStep, onSelectStep } = props

  return (
    <Box style={{ textAlign: 'center' }}>
      {
        expRec.imgs.map((step, index) => (
          <ToolTip title={step.label} key={`${step.label}-${expRec.label}-tt`}>
            <Box
              component="div"
              role="button"
              key={`${step.label}-${expRec.label}-button`}
              sx={{
                height: 10,
                width: 10,
                mr: 1,
                border: 0,
                background: 'none',
                backgroundColor: activeStep === index ? 'primary.main' : 'text.disabled',
                borderRadius: '50%',
                display: 'inline-block',
                cursor: 'pointer',
              }}
              onClick={() => onSelectStep(index)}
            />
          </ToolTip>
        ))
      }
    </Box>
  )
}
ExpCarouselControls.propTypes = {
  expRec: expRecsPropType.expRec.isRequired,
  activeStep: PropTypes.number.isRequired,
  onSelectStep: PropTypes.func.isRequired,
}
