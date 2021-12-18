import * as React from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import Typography from '@mui/material/Typography'
import DirectionsBoatFilledIcon from '@mui/icons-material/DirectionsBoatFilled'
import AddIcon from '@mui/icons-material/Add'
import {
  Card, CardContent, CardHeader, Chip,
} from '@mui/material'
import CodeIcon from '@mui/icons-material/Code'
import BadgeIcon from '@mui/icons-material/Badge'
import { useTheme } from '@mui/material/styles'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import PageItem from './PageItems'

const plusOneCard = (
  <Card>
    <CardHeader
      title="PlusOne Company / C-Tech"
      subheader="Front End Specialist"
      avatar={(
        <Avatar>
          <AddIcon fontSize="large" />
        </Avatar>
        )}
    />
    <CardContent>

      <Chip variant="skill" label="CSS" size="small" color="primary" />
      <Chip variant="skill" label="GoJS" size="small" color="primary" />
      <Chip variant="skill" label="GIT" size="small" color="primary" />
      <Chip variant="skill" label="HighCharts" size="small" color="primary" />
      <Chip variant="skill" label="HTML" size="small" color="primary" />
      <Chip variant="skill" label="JavaScript" size="small" color="primary" />
      <Chip variant="skill" label="NPM" size="small" color="primary" />
      <Chip variant="skill" label="SCSS" size="small" color="primary" />
      <Chip variant="skill" label="TSLint" size="small" color="primary" />
      <Chip variant="skill" label="TypeScript" size="small" color="primary" />
      <Chip variant="skill" label="UNIX" size="small" color="primary" />
      <Chip variant="skill" label="WebStorm" size="small" color="primary" />
      <br />
      <Chip variant="skill" label="Angular" size="small" color="secondary" />
    </CardContent>
  </Card>
)

const azdeqCard = (
  <Card>
    <CardContent>
      <Typography variant="h5">Impact / Arizona Department of Environmental Quality</Typography>
      <Typography variant="h4" component="h4">
        Front End Specialist
      </Typography>

      <Chip variant="skill" label="CSS" size="small" color="primary" />
      <Chip variant="skill" label="ESLint" size="small" color="primary" />
      <Chip variant="skill" label="GIT" size="small" color="primary" />
      <Chip variant="skill" label="HTML" size="small" color="primary" />
      <Chip variant="skill" label="JavaScript" size="small" color="primary" />
      <Chip variant="skill" label="NPM" size="small" color="primary" />
      <Chip variant="skill" label="SCSS" size="small" color="primary" />
      <Chip variant="skill" label="TypeScript" size="small" color="primary" />
      <Chip variant="skill" label="UNIX" size="small" color="primary" />
      <br />
      <Chip variant="skill" label="Angular" size="small" color="secondary" />
      <Chip variant="skill" label="Java" size="small" color="secondary" />
      <Chip variant="skill" label="Spring" size="small" color="secondary" />
      <Chip variant="skill" label="NgBootstrap" size="small" color="secondary" />
    </CardContent>

  </Card>
)

const freeLanceCard = (
  <Card>
    <CardContent>
      <Typography variant="h5">FREELANCE</Typography>
      <Typography variant="h4" component="h4">
        Full Stack Web Developer
      </Typography>

      <Chip variant="skill" label="CSS" size="small" color="primary" />
      <Chip variant="skill" label="ESLint" size="small" color="primary" />
      <Chip variant="skill" label="GIT" size="small" color="primary" />
      <Chip variant="skill" label="HTML" size="small" color="primary" />
      <Chip variant="skill" label="JavaScript" size="small" color="primary" />
      <Chip variant="skill" label="Material UI 4 & 5" size="small" color="primary" />
      <Chip variant="skill" label="NPM" size="small" color="primary" />
      <Chip variant="skill" label="React" size="small" color="primary" />
      <Chip variant="skill" label="SCSS" size="small" color="primary" />
      <Chip variant="skill" label="SEO" size="small" color="primary" />
      <Chip variant="skill" label="TypeScript" size="small" color="primary" />
      <Chip variant="skill" label="UNIX" size="small" color="primary" />
      <br />
      <Chip variant="skill" label="Angular" size="small" color="secondary" />
      <Chip variant="skill" label="AngularJS" size="small" color="secondary" />
      <Chip variant="skill" label="Angular Material" size="small" color="secondary" />
      <Chip variant="skill" label="Bootstrap" size="small" color="secondary" />
      <Chip variant="skill" label="Express" size="small" color="secondary" />
      <Chip variant="skill" label="Illustrator" size="small" color="secondary" />
      <Chip variant="skill" label="JQuery" size="small" color="secondary" />
      <Chip variant="skill" label="LESS" size="small" color="secondary" />
      <Chip variant="skill" label="MongoDB" size="small" color="secondary" />
      <Chip variant="skill" label="MySQL" size="small" color="secondary" />
      <Chip variant="skill" label="NodeJS" size="small" color="secondary" />
      <Chip variant="skill" label="Perl" size="small" color="secondary" />
      <Chip variant="skill" label="Photoshop" size="small" color="secondary" />
      <Chip variant="skill" label="PHP" size="small" color="secondary" />
      <Chip variant="skill" label="PostgreSQL" size="small" color="secondary" />
      <Chip variant="skill" label="SASS" size="small" color="secondary" />
      <Chip variant="skill" label="SQL" size="small" color="secondary" />
    </CardContent>

  </Card>
)

const iboatsCard = (
  <Card>
    <CardContent>
      <Typography variant="h5">iBOATS</Typography>
      <Typography variant="h4" component="h4">
        Full Stack Web Developer
      </Typography>
      <Chip variant="skill" label="CSS" size="small" color="primary" />
      <Chip variant="skill" label="GIT" size="small" color="primary" />
      <Chip variant="skill" label="HTML" size="small" color="primary" />
      <Chip variant="skill" label="JavaScript" size="small" color="primary" />
      <Chip variant="skill" label="UNIX" size="small" color="primary" />
      <br />
      <Chip variant="skill" label="JQuery" size="small" color="secondary" />
      <Chip variant="skill" label="Perl" size="small" color="secondary" />
      <Chip variant="skill" label="PostgreSQL" size="small" color="secondary" />
      <Chip variant="skill" label="SQL" size="small" color="secondary" />
    </CardContent>

  </Card>
)

export default function ExperiencePageItem(props) {
  const theme = useTheme()
  const { id } = props

  return (
    <PageItem id={id}>
      <div style={{ margin: 'auto', textAlign: 'center' }}>
        <h4 style={{ fontSize: '35px', fontWeight: 'normal' }}>EXPERIENCE</h4>
      </div>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        {plusOneCard}
        <br />
        {azdeqCard}
        <br />
        {freeLanceCard}
        <br />
        {iboatsCard}
        <br />
      </Box>
      <Timeline position="alternate" sx={{ margin: 'auto', display: { xs: 'none', md: 'block' } }}>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            <Typography
              bgcolor={theme.palette.background.paper}
              component="span"
              sx={{ padding: theme.spacing(1) }}
            >
              2020 - 2021
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot variant="outlined" color="secondary">
              <AddIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            {plusOneCard}
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            <Typography
              bgcolor={theme.palette.background.paper}
              component="span"
              sx={{ padding: theme.spacing(1) }}
            >
              2017 - 2020
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <BadgeIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            {azdeqCard}
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            <Typography
              bgcolor={theme.palette.background.paper}
              component="span"
              sx={{ padding: theme.spacing(1) }}
            >
              2000 - Present
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <CodeIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            {freeLanceCard}
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            <Typography
              bgcolor={theme.palette.background.paper}
              component="span"
              sx={{ padding: theme.spacing(1) }}
            >
              2000 - 2016
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            <TimelineDot color="secondary">
              <DirectionsBoatFilledIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            {iboatsCard}

          </TimelineContent>

        </TimelineItem>
      </Timeline>
    </PageItem>

  )
}
ExperiencePageItem.propTypes = {
  id: PropTypes.string.isRequired,
}
