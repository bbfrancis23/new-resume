import React from 'react'

import { Box, Typography } from '@mui/material'

import { bindKeyboard } from 'react-swipeable-views-utils'
import SwipeableViews from 'react-swipeable-views'

import ExpCarouselControls from './ExpCarouselControls'

import { expRecsPropType } from '../../data'

const Carousel = bindKeyboard(SwipeableViews)

export default function ExpCarousel(props) {
  const { expRec } = props

  const imgHeightWidth = '500'

  const [activeStep, setActiveStep] = React.useState(0)

  const handleStepChange = (step) => { setActiveStep(step) }

  return (
    <>
      <Carousel index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
        {
          expRec.imgs.map((step) => (
            <Box key={`${step.label}-${expRec.label}`}>
              <Typography component="span">{step.label}</Typography>
              <Box
                sx={{
                  display: 'flex', justifyContent: 'center', alignItems: 'center', height: `${imgHeightWidth}px`,
                }}
              >
                <img
                  src={step.img}
                  alt={step.label}
                  width={imgHeightWidth}
                  height={imgHeightWidth}
                  style={{
                    MaxWidth: '100%',
                    height: 'auto',
                    width: step.width ? step.width : '95%',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    overflow: 'hidden',
                  }}
                />
              </Box>
            </Box>
          ))
        }
      </Carousel>
      <ExpCarouselControls expRec={expRec} activeStep={activeStep} setActiveStep={handleStepChange} />
    </>

  )
}
ExpCarousel.propTypes = {
  expRec: expRecsPropType.expRec.isRequired,
}
