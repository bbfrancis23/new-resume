import React from 'react'
import PropTypes from 'prop-types'
import {
  ImageList, ImageListItem, ImageListItemBar, MobileStepper, styled, useTheme, Paper, Box, Typography,
} from '@mui/material'

import NextIcon from '@mui/icons-material/ArrowForwardIos'
import PrevIcon from '@mui/icons-material/ArrowBackIosNew'
import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/Info'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import SettingsDialog from '../ui/dialogs/SettingsDialog'
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

  /**
   * next button handler
   */
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
          <IconButton aria-label="Next Images" disabled={activeStep === maxSteps - 1}>
            <NextIcon onClick={handleNext} size="small" fontSize="12px" />
          </IconButton>
        )}
        backButton={(
          <IconButton aria-label="Previous Image" disabled={activeStep === 0}>
            <PrevIcon onClick={handleBack} size="small" fontSize="12px" />
          </IconButton>
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
