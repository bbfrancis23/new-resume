import React from 'react'
import PropTypes from 'prop-types'

import {
  AccountCircle as AboutIcon, Work as ExperienceIcon, StarOutline as TestimonialsIcon,
} from '@mui/icons-material'

import AboutPageItem from '../content/page-items/About'
import TestimonialsPageItem from '../content/page-items/Testimonials'
import ExperiencePageItem from '../content/page-items/experience/Experience'

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
      pageComponent: <ExperiencePageItem key="work-experience" id="experience" />,
    },
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

/* QA: Brian Francis - 04/20/2022 */
