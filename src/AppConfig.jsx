import React from 'react'

import AboutIcon from '@mui/icons-material/AccountCircle'
import ExperienceIcon from '@mui/icons-material/Work'
import PortfolioIcon from '@mui/icons-material/Collections'

import PropTypes from 'prop-types'

import AboutPageItem from './page-items/AboutPageItem'
import ExperiencePageItem from './page-items/ExperiencePageItem'
import PortfolioPageItem from './page-items/Portfolio'

export const appConfig = {
  pageItems: [
    {
      id: 'about',
      label: 'About',
      icon: <AboutIcon />,
      description: 'About Brian Francis',
      pageComponent: <AboutPageItem key="about" id="about" />,
    },
    {
      id: 'experience',
      label: 'Experience',
      icon: <ExperienceIcon />,
      description: 'Work timeline for Brian Francis',
      pageComponent: <ExperiencePageItem key="experience" id="experience" />,
    },
    {
      id: 'portfolio',
      label: 'Portfolio',
      icon: <PortfolioIcon />,
      description: 'Portfolio for Brian Francis',
      pageComponent: <PortfolioPageItem key="portfolio" id="portfolio" />,
    },
    // {
    //   id: 'testimonials',
    //   label: 'Testimonials',
    //   icon: <TestimonialIcon />,
    //   description: 'Testimonials for Brian Francis',
    // },

  ],
}

export const appConfigPropType = {
  pageItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
      description: PropTypes.string.isRequired,
      pageComponent: PropTypes.element.isRequired,
    }),
  ),
}

export default appConfig

/*
Quality Checked: Brian Francis - 12/18/2021
 */
