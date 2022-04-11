import React, { useState } from 'react'

import PropTypes from 'prop-types'

import {
  Box, Fab, MobileStepper,
} from '@mui/material'

import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'

import { ToolTip } from '../../../ui'

import { expRecsPropType } from '../../data'

export default function ExpCarouselControls(props) {
  const { expRec, activeStep, setActiveStep } = props

  const [show, setShow] = useState(false)
  const maxSteps = expRec.imgs.length

  const handleNext = () => { setActiveStep((prevActiveStep) => prevActiveStep + 1) }
  const handleBack = () => { setActiveStep((prevActiveStep) => prevActiveStep - 1) }

  return (
    <>
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
                onClick={() => setActiveStep(index)}
              />
            </ToolTip>
          ))
        }
      </Box>
      <Box sx={{ height: '0px' }}>
        <MobileStepper
          onMouseOver={() => setShow(true)}
          onMouseOut={() => setShow(false)}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          backButton={(
            <Fab
              onClick={handleBack}
              disabled={activeStep === 0}
              variant="effects"
              fade="true"
              sx={{ visibility: show ? 'visible' : 'hidden', position: 'relative', right: '20px' }}
            >
              <KeyboardArrowLeft style={{ fontSize: '50px' }} />
            </Fab>
              )}
          nextButton={(
            <Fab
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              variant="effects"
              fade="true"
              sx={{ visibility: show ? 'visible' : 'hidden', position: 'relative', left: '20px' }}
            >
              <KeyboardArrowRight style={{ fontSize: '50px' }} />
            </Fab>
              )}
          sx={{
            position: 'relative',
            bottom: '525px',
            height: '500',
            background: 'transparent',
            '.MuiMobileStepper-dots': { visibility: 'hidden' },
          }}
        />
      </Box>
    </>

  )
}
ExpCarouselControls.propTypes = {
  expRec: expRecsPropType.expRec.isRequired,
  activeStep: PropTypes.number.isRequired,
  setActiveStep: PropTypes.func.isRequired,
}
