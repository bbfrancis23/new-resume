import React from 'react'
import PropTypes from 'prop-types'
import {
  ImageList, ImageListItem, ImageListItemBar, MobileStepper,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import BadgeIcon from '@mui/icons-material/Badge'
import CodeIcon from '@mui/icons-material/Code'
import IboatsIcon from '@mui/icons-material/DirectionsBoatFilled'
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
import PlusOneCover from '../img/portfolio/plueone/cover.png'
import AZDEQCover from '../img/portfolio/azdeq/cover.png'
import FreelanceCover from '../img/portfolio/freelance/cover.jpg'
import IboatsCover from '../img/portfolio/iboats/cover.jpg'
import SettingsDialog from '../ui/dialogs/SettingsDialog'

import iboatsHome from '../img/portfolio/iboats/home.jpg'
import iboatsAccount from '../img/portfolio/iboats/account-info.jpg'
import iboatsAd from '../img/portfolio/iboats/ad.jpg'
import iboatsSearch from '../img/portfolio/iboats/advanced-search.jpg'
import iboatsCheckout from '../img/portfolio/iboats/check-out.jpg'
import iboatsCreateBoat from '../img/portfolio/iboats/create-record.jpg'
import iboatsFeatured from '../img/portfolio/iboats/featured.jpg'
import iboatsOptions from '../img/portfolio/iboats/options.jpg'
import iboatsPromo from '../img/portfolio/iboats/promo.jpg'
import iboatsRecord from '../img/portfolio/iboats/record.jpg'
import iboatsResearch from '../img/portfolio/iboats/research.jpg'
import iboatsType from '../img/portfolio/iboats/type-listings.jpg'
import iboatsResearchType from '../img/portfolio/iboats/research-type-listing.jpg'
import flHome from '../img/portfolio/freelance/home.jpg'
import flProduct from '../img/portfolio/freelance/product.jpg'
import flTestimonials from '../img/portfolio/freelance/testimonials.jpg'
import flContact from '../img/portfolio/freelance/contact.jpg'
import StainedGlassButton from '../ui/buttons/StainedGlassButton'
import PageItem from './PageItems'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const Carousel = styled(MobileStepper)(() => ({
  dots: { margin: 'auto' },
}))

export const experienceData = [
  {
    id: 'plusone',
    label: 'PlusOne Company / C-Tech',
    title: 'Front End Specialist',
    relevantSkills: [
      'CSS', 'GoJS', 'GIT', 'HighCharts', 'HTML', 'JavaScript', 'NPM', 'SCSS', 'TSLint', 'TypeScript', 'UNIX', 'WebStorm',
    ],
    otherSkills: ['Angular'],
    icon: AddIcon,
    cover: PlusOneCover,
  },
  {
    id: 'azdeq',
    label: 'Impact / Arizona Department of Environmental Quality',
    title: 'Front End Specialist',
    relevantSkills: ['CSS', 'TSLint', 'GIT', 'HTML', 'JavaScript', 'NPM', 'SCSS', 'TypeScript', 'UNIX'],
    otherSkills: ['Angular', 'Java', 'Spring', 'NgBootstrap'],
    icon: BadgeIcon,
    cover: AZDEQCover,
  },
  {
    id: 'freelance',
    label: 'Freelance',
    title: 'Full Stack Web Developer',
    relevantSkills: [
      'CSS', 'ESLint', 'TSLint', 'GIT', 'HTML', 'JavaScript', 'Matrial UI', 'NPM', ' React', 'SCSS', 'SEO', 'TypeScript',
      'UNIX',
    ],
    otherSkills: [
      'Angular', 'AngularJS', 'Angular Material', 'Bootstrap', 'Express', 'Illustrator', 'JQuery', 'LESS', 'MongoDB',
      'MySQL', 'NodeJS', 'Perl', 'Photoshop', 'PHP', 'PostgreSQL', 'SASS', 'SQL',
    ],
    icon: CodeIcon,
    cover: FreelanceCover,
    imgs: [
      { img: flHome, label: 'Home' },
      { img: flProduct, label: 'Product' },
      { img: flTestimonials, label: 'Testimonials' },
      { img: flContact, label: 'Contact' },
    ],
  },
  {
    id: 'iboats',
    label: 'iBOATS',
    title: 'Full Stack Web Developer',
    relevantSkills: [
      'CSS', 'GIT', 'HTML', 'JavaScript', 'UNIX',
    ],
    otherSkills: ['JQuery', 'Perl', 'PostgreSQL', 'SQL'],
    icon: IboatsIcon,
    cover: IboatsCover,
    imgs: [
      { img: iboatsHome, label: 'Home' },
      { img: iboatsAccount, label: 'Account Info' },
      { img: iboatsAd, label: 'Ad' },
      { img: iboatsSearch, label: 'Advanced Search' },
      { img: iboatsCheckout, label: 'Check Out' },
      { img: iboatsCreateBoat, label: 'Creat Ad' },
      { img: iboatsFeatured, label: 'Featured Ad' },
      { img: iboatsOptions, label: 'Options' },
      { img: iboatsPromo, label: 'Promo' },
      { img: iboatsRecord, label: 'Research Item' },
      { img: iboatsResearch, label: 'Research' },
      { img: iboatsType, label: 'Type Listing' },
      { img: iboatsResearchType, label: 'Research Type Listing' },
    ],
  },
]

export function PortfolioItemSwiper(props) {
  const { portIndex } = props

  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = experienceData[portIndex].imgs.length

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
        <Typography>{experienceData[portIndex].imgs[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {experienceData[portIndex].imgs.map((step, index) => (
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

    <PageItem id={id}>
      <div style={{ margin: 'auto', textAlign: 'center' }}>
        <h4 style={{ fontSize: '35px', fontWeight: 'normal', paddingBottom: '25px' }}>PORTFOLIO</h4>
      </div>
      <ImageList gap={40}>
        {
            experienceData.map((item, index) => (
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
      <SettingsDialog close={() => handlePortfolioDialogClose()} open={portfolioDialogOpen}>
        <PortfolioItemSwiper portIndex={portIndex} />
      </SettingsDialog>
    </PageItem>

  )
}
PortfolioPageItem.propTypes = {
  id: PropTypes.string.isRequired,
}
