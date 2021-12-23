import * as React from 'react'

import {
  Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot,
} from '@mui/lab'

import {
  Typography, Card, CardContent, CardHeader, Chip,
} from '@mui/material'

import PropTypes from 'prop-types'
import PageItem from '../../ui/PageItems'
import experience from './data'

export default function Experience(props) {
  const { id } = props

  return (
    <PageItem id={id} label="EXPERIENCE">

      {/* <Box sx={{ display: { xs: 'block', md: 'none' } }}> */}
      {/* */}
      {/* </Box> */}
      <Timeline position="alternate" sx={{ m: 'auto', p: 0, display: { xs: 'none', md: 'block' } }}>
        {
          experience.map((item) => (
            <TimelineItem key={item.id}>
              <TimelineOppositeContent sx={{ m: 'auto' }}>
                <Typography
                  component="span"
                  sx={{ p: 1 }}
                >
                  {item.yearsActive}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot variant="outlined">
                  {item.icon}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Card raised>
                  <CardHeader title={item.label} subheader={item.title} />
                  <CardContent>
                    {
                      item.relevantSkills.map((rSkill) => (
                        <Chip variant="skill" label={rSkill} size="small" color="primary" />
                      ))
                    }
                    <br />
                    {
                      item.otherSkills.map((oSkill) => (
                        <Chip variant="skill" label={oSkill} size="small" color="secondary" />
                      ))
                    }
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
          ))
        }
      </Timeline>
    </PageItem>
  )
}
Experience.propTypes = {
  id: PropTypes.string.isRequired,
}

/*
Quality Checked: Brian Francis - 12/18/2021
 */
