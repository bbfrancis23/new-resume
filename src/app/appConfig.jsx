import React from 'react'
import PropTypes from 'prop-types'

import {
  AccountCircle as AboutIcon, Work as ExperienceIcon, StarOutline as TestimonialsIcon,
} from '@mui/icons-material'

import AboutPageItem from '../content/page-items/About'
// import Portfolio from '../content/page-items/Portfolio'
import TestimonialsPageItem from '../content/page-items/Testimonials'
import ExperiencePageItem from '../content/page-items/Experience'

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
    // {
    //   id: 'portfolio',
    //   label: 'Portfolio',
    //   icon: <PortfolioIcon />,
    //   description: 'Portfolio for Brian Francis',
    //   pageComponent: <Portfolio key="portfolio" id="portfolio" />,
    // },
    {
      id: 'testimonials',
      label: 'Testimonials',
      icon: <TestimonialsIcon />,
      description: 'Testimonials for Brian Francis',
      pageComponent: <TestimonialsPageItem key="testimonials" id="testimonials" />,
    },

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

/*
Final QA: Brian Francis - 01/14/2022
 */
