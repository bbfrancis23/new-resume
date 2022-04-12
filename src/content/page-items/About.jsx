import React from 'react'
import PropTypes from 'prop-types'
import {
  useTheme, Typography, Chip, Grid,
} from '@mui/material'

import PageItem from '../../ui/PageItem'

import BrianFrancis from '../../img/portraits/brian-francis.jpg'

export default function AboutPageItem(props) {
  const theme = useTheme()
  const { id } = props

  return (
    <PageItem id={id}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography
            variant="h1"
            sx={{
              textAlign: 'center',
              fontFamily: 'Montserrat,sans-serif',
              textShadow: '0 5px 3px #4d4d4d',
              fontWeight: 'bold',
              fontSize: '40px',
              color: theme.palette.secondary.main,
            }}
          >
            BRIAN DAVID FRANCIS
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <img src={BrianFrancis} alt="Brian Francis" style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="h2" sx={{ fontSize: '35px' }}>Full Stack Web Developer</Typography>
          <Typography variant="h3" sx={{ fontSize: '30px' }}>Front End Specialist</Typography>
          <p>
            I have had over 20 year experience in Web Development and Programming.
            I studied Computer Science at Weber State University.
          </p>
          <p>
            I was fully responsible for the “Marine Classifieds” program at iboats.com.
            This program collects, edits, displays marine advertisements (mainly boats for sale) on boats.iboats.com,
            from boat dealers, brokers and individual users.
            This included “For Sale By Owner”, “New Boat research”,
            “Dealer Locator” and various backend administration programs.
            During my tenure at iboats classifieds ads went from a few 100 ads to over 50,000.
          </p>
          <p>
            I worked for Arizona Department of Environmental Quality as a Contractor and then as an Employee.
            Where I was the team lead Front End Developer.
            I helped put into production over 10 apps.
            They did many things including provide exceptions to state car emissions to applicants,
            submissions and interpretations of ground and water lab testing,
            in and out of compliance tools for various state contractors and permit holders.
          </p>
          <p>
            I worked for Plus One Company where I designed various User Interface Components,
            like a highly advanced date picker.
            I designed a drag and drop Dashboard with interchangeable items, a log in interface and workflow tool.
            I also implemented a style guide and documentation for various User Interface Components.
          </p>
          <Chip variant="skill" label="CSS" size="small" color="primary" />
          <Chip variant="skill" label="ESLint" size="small" color="primary" />
          <Chip variant="skill" label="GIT" size="small" color="primary" />
          <Chip variant="skill" label="GoJS" size="small" color="primary" />
          <Chip variant="skill" label="HighCharts" size="small" color="primary" />
          <Chip variant="skill" label="HTML" size="small" color="primary" />
          <Chip variant="skill" label="JavaScript" size="small" color="primary" />
          <Chip variant="skill" label="Material UI 4 & 5" size="small" color="primary" />
          <Chip variant="skill" label="NPM" size="small" color="primary" />
          <Chip variant="skill" label="React" size="small" color="primary" />
          <Chip variant="skill" label="SCSS" size="small" color="primary" />
          <Chip variant="skill" label="SEO" size="small" color="primary" />
          <Chip variant="skill" label="TSLint" size="small" color="primary" />
          <Chip variant="skill" label="TypeScript" size="small" color="primary" />
          <Chip variant="skill" label="UNIX" size="small" color="primary" />
          <Chip variant="skill" label="WebStorm" size="small" color="primary" />
          <br />
          <Chip variant="skill" label="Express" size="small" color="secondary" />
          <Chip variant="skill" label="MongoDB" size="small" color="secondary" />
          <Chip variant="skill" label="MySQL" size="small" color="secondary" />
          <Chip variant="skill" label="NodeJS" size="small" color="secondary" />
          <Chip variant="skill" label="PhotoShop" size="small" color="secondary" />
          <Chip variant="skill" label="PostgreSQL" size="small" color="secondary" />
          <Chip variant="skill" label="SQL" size="small" color="secondary" />
        </Grid>
      </Grid>
    </PageItem>
  )
}
AboutPageItem.propTypes = {
  id: PropTypes.string.isRequired,
}

/* QA - passed */
