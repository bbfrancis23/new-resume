import React from 'react'
import PropTypes from 'prop-types'
import {
  ImageList, ImageListItem, ImageListItemBar, MobileStepper,
} from '@mui/material'
import NextIcon from '@mui/icons-material/ArrowForwardIos'

import PrevIcon from '@mui/icons-material/ArrowBackIosNew'

import { styled, useTheme } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/Info'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import SettingsDialog from '../ui/dialogs/SettingsDialog'
import StainedGlassButton from '../ui/buttons/StainedGlassButton'
import PageItem from '../ui/PageItems'

import experience from './data'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const Carousel = styled(MobileStepper)(() => ({
  dots: { margin: 'auto' },
}))

export function PortfolioItemSwiper(props) {
  const { portIndex } = props

  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = experience[portIndex].imgs.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

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
        <Typography>{experience[portIndex].imgs[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {experience[portIndex].imgs.map((step, index) => (
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
      <Carousel
        steps={maxSteps}
        position="static"
        sx={{
          '& .MuiMobileStepper-dots': {
            margin: 'auto',
          },
        }}
        activeStep={activeStep}
        nextButton={(

          <StainedGlassButton
            tooltip="Next"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            style={{
              position: 'absolute',
              bottom: '50%',
              left: '89%',

            }}
          >
            <NextIcon size="large" />
          </StainedGlassButton>

            )}
        backButton={(
          <StainedGlassButton
            tooltip="Previous"
            onClick={handleBack}
            disabled={activeStep === 0}
            style={{
              position: 'absolute',
              bottom: '50%',
              right: '89%',

            }}
          >
            <PrevIcon size="large" />
          </StainedGlassButton>
            )}
      />
    </Box>
  )
}
PortfolioItemSwiper.propTypes = {
  portIndex: PropTypes.number.isRequired,
}

export default function PortfolioPageItem(props) {
  const { id } = props

  const [portfolioDialogOpen, setPortfolioDialogOpen] = React.useState(false)

  const [portIndex, setPortIndex] = React.useState(3)

  const handlePortfolioDialogOpen = (index) => () => {
    setPortIndex(index)
    setPortfolioDialogOpen(true)
  }
  const handlePortfolioDialogClose = () => setPortfolioDialogOpen(false)

  return (

    <PageItem id={id} label="PORTFOLIO">

      <ImageList gap={40}>
        {
            experience.map((item, index) => (
              <ImageListItem key={item.id} onClick={handlePortfolioDialogOpen(index)}>
                <img
                  src={item.cover}
                  alt={item.label}
                  style={{ width: '100%' }}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.label}
                  subtitle={item.title}
                  actionIcon={(
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${item.title}`}
                    >
                      <InfoIcon />
                    </IconButton>
                    )}
                />
              </ImageListItem>
            ))
          }
      </ImageList>
      <SettingsDialog close={() => handlePortfolioDialogClose()} open={portfolioDialogOpen} label="App">
        <PortfolioItemSwiper portIndex={portIndex} />
      </SettingsDialog>
    </PageItem>

  )
}
PortfolioPageItem.propTypes = {
  id: PropTypes.string.isRequired,
}
