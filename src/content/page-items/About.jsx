/* eslint-disable max-lines */
import React from 'react'
import PropTypes from 'prop-types'
import {useTheme, Typography, Chip, Grid, IconButton, Box} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import PageItem from '../../ui/PageItem'
import BrianFrancis from '../../img/portraits/brian-francis.jpg'

export default function AboutPageItem(props) {
  const theme = useTheme()
  const {id} = props

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
            }}>
            BRIAN DAVID FRANCIS
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <img src={BrianFrancis} alt="Brian Francis" style={{width: '100%'}} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="h2" sx={{fontSize: '25px'}}>
            Full Stack Web Developer
          </Typography>
          <Typography variant="h3" sx={{fontSize: '20px'}}>
            Front End Specialist
          </Typography>

          <p>
            At iboats.com, I owned end-to-end development of the Marine Classifieds platform on
            boats.iboats.com, a marketplace connecting boat dealers, brokers, and individual sellers
            with buyers. I scaled the platform from a few hundred to over 50,000 active listings by
            building the tools that collected, edited, and published marine advertisements, and I
            designed and built several companion applications, including For Sale by Owner, New Boat
            Research, and Dealer Locator, along with backend administrative tools supporting the
            classifieds ecosystem.
          </p>
          <p>
            From there, I moved to Plus One Company, where I designed and built reusable UI
            components, including an advanced custom date picker, a drag-and-drop dashboard with
            interchangeable widgets, a login interface, and a workflow management tool. I also
            created and maintained a UI style guide and component documentation to standardize
            design patterns across products.
          </p>
          <p>
            Most recently, I worked as a React developer at Enterprise Rental Cars, where I was part
            of a team building reservation and rental agreement systems used across the Alamo,
            National, Enterprise, and Enterprise Truck brands.
          </p>
          <p>I am currently working getting the Claude Architect Certification </p>
          <Chip variant="skill" label="CSS" size="small" color="primary" />
          <Chip variant="skill" label="ES Lint" size="small" color="primary" />
          <Chip variant="skill" label="GIT" size="small" color="primary" />
          <Chip variant="skill" label="GoJS" size="small" color="primary" />
          <Chip variant="skill" label="HighCharts" size="small" color="primary" />
          <Chip variant="skill" label="HTML" size="small" color="primary" />
          <Chip variant="skill" label="JavaScript" size="small" color="primary" />
          <Chip variant="skill" label="Material UI" size="small" color="primary" />
          <Chip variant="skill" label="NextJS" size="small" color="primary" />
          <Chip variant="skill" label="NodeJS" size="small" color="primary" />
          <Chip variant="skill" label="NPM" size="small" color="primary" />
          <Chip variant="skill" label="React" size="small" color="primary" />
          <Chip variant="skill" label="SCSS" size="small" color="primary" />
          <Chip variant="skill" label="SEO" size="small" color="primary" />
          <Chip variant="skill" label="TypeScript" size="small" color="primary" />
          <Chip variant="skill" label="UNIX" size="small" color="primary" />
          <Chip variant="skill" label="VS Code" size="small" color="primary" />
          <Chip variant="skill" label="WebStorm" size="small" color="primary" />
          <br />
          <Chip variant="skill" label="Express" size="small" color="secondary" />
          <Chip variant="skill" label="MongoDB" size="small" color="secondary" />
          <Chip variant="skill" label="MySQL" size="small" color="secondary" />
          <Chip variant="skill" label="NodeJS" size="small" color="secondary" />
          <Chip variant="skill" label="PhotoShop" size="small" color="secondary" />
          <Chip variant="skill" label="PostgreSQL" size="small" color="secondary" />
          <Chip variant="skill" label="SQL" size="small" color="secondary" />
          <br />
          <Chip variant="skill" label="AWS" size="small" color="primary" />
          <Chip variant="skill" label="Vercel" size="small" color="primary" />
          <Box sx={{display: 'flex', textAlign: 'right', pt: 1}}>
            <Typography variant="h6">Contact:</Typography>
            <IconButton
              variant="contained"
              color="success"
              href="mailto:bbfrancis23@gmail.com"
              sx={{position: 'relative', top: '-5px'}}>
              <EmailIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </PageItem>
  )
}
AboutPageItem.propTypes = {id: PropTypes.string.isRequired}

/* QA passed 4-17-2022 */
