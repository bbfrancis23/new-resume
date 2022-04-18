/* eslint-disable max-lines */
import React from 'react'
import PropTypes from 'prop-types'
import {
  useTheme, Typography, Chip, Grid, IconButton, Box, Button,
} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
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
          <Typography variant="h2" sx={{ fontSize: '25px' }}>Full Stack Web Developer</Typography>
          <Typography variant="h3" sx={{ fontSize: '20px' }}>Front End Specialist</Typography>
          <p>
            I have had 20 years of experience programming.
            My career in computer programing started at iboats. and I was fully responsible for the “Marine Classifieds”
            program. This program collects, edits, and displays marine advertisements (mainly boats for sale) on
            boats.iboats.com as this consisted of boat dealers, brokers, and individual users. Through this program,
            I also developed “For Sale by Owner”, “New Boat research”, “Dealer Locator” and various backend
            administration programs. During my tenure at iboats.com, the classified ads went from a few hundred ads to
            over 50,000 ads.
          </p>
          <p>
            After leaving iboats.com, I had transitioned my career to work for Arizona Department of Environmental (AZ DEQ)
            as the lead Front-End Developer for my team. I started as a contractor and eventually, I was converted to an
            employee. Through my time at AZ DEQ, I had helped put over 10 apps into production. The apps that I had
            helped develop included providing exceptions to state car emissions to applicants, submissions and
            interpretations of ground and water lab testing, along with in and out of compliance tools for various state
            contractors and permit holders.
          </p>
          <p>
            From there I went to work for Plus One Company where I designed various user interface components including
            a highly advanced date picker. I designed a drag and drop dashboard that has interchangeable items, a login
            interface, and a workflow tool. I have also implemented a style guide and documentation for various user
            interface components.
          </p>
          <Chip variant="skill" label="CSS" size="small" color="primary" />
          <Chip variant="skill" label="TS and ES Lint" size="small" color="primary" />
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

          <Box sx={{ display: 'flex', textAlign: 'right', pt: 1 }}>
            <Typography variant="h6">Contact:</Typography>
            <IconButton
              variant="contained"
              color="success"
              href="mailto:bbfrancis23@gmail.com"
              sx={{ position: 'relative', top: '-5px' }}
            >
              <EmailIcon />
            </IconButton>
            <Button href="tel:4733378901">
              801-867-1885
            </Button>
          </Box>
        </Grid>
      </Grid>
    </PageItem>
  )
}
AboutPageItem.propTypes = { id: PropTypes.string.isRequired }

/* QA passed 4-17-2022 */
