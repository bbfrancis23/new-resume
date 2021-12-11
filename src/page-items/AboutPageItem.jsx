import React from 'react'
import Box from '@mui/material/Box'
import { alpha, styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

import Paper from '@mui/material/Paper'
import BrianFrancis from '../img/portraits/brian-francis.jpg'
import { SkillChip } from './PageItems'

const PageHeaderArea = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5),
}))

export default function AboutPageItem(props) {
  const theme = useTheme()

  const { id } = props

  return (

    <Paper
      elevation={12}
      id={id}
      sx={{
        display: 'grid',
        margin: 'auto',
        width: {
          xs: '90%', md: '70%', lg: '70%', xl: '60%',
        },
        gridTemplateColumns: {
          xs: 'repeat(2, 1fr)', lg: 'repeat(6, 1fr)',
        },
        backgroundColor: alpha(theme.palette.background.default, 0.75),
        backdropFilter: 'blur(10px)',
        // color: theme.palette.getContrastText(theme.palette.background.paper),
        color: theme.palette.getContrastText(theme.palette.background.paper),
        border: `1px solid ${theme.palette.divider}`,
        gap: 1,
        gridTemplateRows: 'auto',
        gridTemplateAreas: {
          xs: '"info info"',
          lg: '"portrait portrait portrait info info info"',
        },
      }}
    >
      <PageHeaderArea sx={{ gridArea: 'portrait', display: { xs: 'none', lg: 'block' } }}>
        <img src={BrianFrancis} alt="Brian Francis" style={{ width: '100%' }} />
      </PageHeaderArea>
      <PageHeaderArea sx={{ gridArea: 'info', paddingLeft: { xs: theme.spacing(5), lg: theme.spacing(0) } }}>
        <Typography
          variant="h1"
          sx={{
            textAlign: 'left',
            fontFamily: 'Montserrat,sans-serif',
            textShadow: '0 5px 3px #4d4d4d',
            fontWeight: 'bold',
            fontSize: '40px',
            color: theme.palette.secondary.main,
          }}
        >
          BRIAN DAVID FRANCIS
        </Typography>
        <br />
        <Typography variant="h2" sx={{ fontSize: '35px' }}>Full Stack Web Developer</Typography>
        <Typography variant="h3" sx={{ fontSize: '30px' }}>Front End Specialist</Typography>
        <p>
          I have had over 15 year experience in Web Development and Programming.
          I studied Computer Science at Weber State University.
        </p>
        {/* <p> */}
        {/*  I was fully responsible for the “Marine Classifieds” program at iboats.com. */}
        {/*  This program collects, edits, displays marine advertisements (mainly boats for sale) on boats.iboats.com, */}
        {/*  from boat dealers, brokers and individual users. */}
        {/*  This included “For Sale By Owner”, “New Boat research”, */}
        {/*  “Dealer Locator” and various backend administration programs. */}
        {/*  During my tenure at iboats classifieds ads went from a few 100 ads to 50,000. */}
        {/* </p> */}
        <p>
          I worked for Arizona Department of Environmental Quality as a Contractor and then as an Employee.
          Where I was the team lead Front End Developer
        </p>

        <SkillChip label="CSS" size="small" color="primary" />
        <SkillChip label="ESLint" size="small" color="primary" />
        <SkillChip label="GIT" size="small" color="primary" />
        <SkillChip label="GoJS" size="small" color="primary" />
        <SkillChip label="HighCharts" size="small" color="primary" />
        <SkillChip label="HTML" size="small" color="primary" />
        <SkillChip label="JavaScript" size="small" color="primary" />
        <SkillChip label="Material UI 4 & 5" size="small" color="primary" />
        <SkillChip label="NPM" size="small" color="primary" />
        <SkillChip label="React" size="small" color="primary" />
        <SkillChip label="SCSS" size="small" color="primary" />
        <SkillChip label="SEO" size="small" color="primary" />
        <SkillChip label="TSLint" size="small" color="primary" />
        <SkillChip label="TypeScript" size="small" color="primary" />
        <SkillChip label="UNIX" size="small" color="primary" />
        <SkillChip label="WebStorm" size="small" color="primary" />
        <br />
        <SkillChip label="Express" size="small" color="secondary" />
        <SkillChip label="MongoDB" size="small" color="secondary" />
        <SkillChip label="MySQL" size="small" color="secondary" />
        <SkillChip label="NodeJS" size="small" color="secondary" />
        <SkillChip label="PhotoShop" size="small" color="secondary" />
        <SkillChip label="PostgreSQL" size="small" color="secondary" />
        <SkillChip label="SQL" size="small" color="secondary" />
      </PageHeaderArea>

    </Paper>

  )
}
AboutPageItem.propTypes = {
  id: PropTypes.string.isRequired,
}
