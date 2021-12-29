import React from 'react'

import {
  Box, MobileStepper, Paper, Typography, IconButton,
} from '@mui/material'

import { ArrowForwardIos as NextIcon, ArrowBackIosNew as PrevIcon } from '@mui/icons-material'

import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

export default function Carousel(props) {
  const { imgs } = props
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = imgs.length

  const handleNext = () => setActiveStep(activeStep === maxSteps - 1 ? 0 : (prevActiveStep) => prevActiveStep + 1)
  const handleBack = () => setActiveStep(activeStep === 0 ? (maxSteps - 1) : (prevActiveStep) => prevActiveStep - 1)
  const handleStepChange = (step) => setActiveStep(step)

  return (
    <Box sx={{ maxWidth: 800, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{imgs[activeStep].label}</Typography>
      </Paper>
      <Box sx={{ '& .react-swipeable-view-container': { alignItems: 'center' } }}>
        <AutoPlaySwipeableViews
          axis="x"
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {imgs.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    maxHeight: 500,
                    display: 'block',
                    maxWidth: 800,
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.img}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Box>

      <MobileStepper
        steps={maxSteps}
        position="static"
        sx={{ '& .MuiMobileStepper-dots': { m: 'auto' } }}
        activeStep={activeStep}
        nextButton={(
          <IconButton aria-label="Next Images" onClick={handleNext}>
            <NextIcon size="small" fontSize="12px" />
          </IconButton>
            )}
        backButton={(
          <IconButton aria-label="Previous Image" onClick={handleBack}>
            <PrevIcon size="small" fontSize="12px" />
          </IconButton>
            )}
      />
    </Box>
  )
}
Carousel.propTypes = {
  imgs: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

/*
Quality Checked: Brian Francis - 12/29/2021
 */
