import * as React from 'react'

import PropTypes from 'prop-types'

import {
  Typography, Card, CardContent, CardHeader, Chip, IconButton,
} from '@mui/material'

import { MoreVert } from '@mui/icons-material'

import {
  Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot,
} from '@mui/lab'

import experience from '../../data'
import ExpCarousel from './ExpCarousel'
import { PageItem, DialogBox, ToolTip } from '../../../ui'

export default function ExperiencePageItem(props) {
  const { id } = props

  const [dialogItem, setDialogItem] = React.useState(experience[0])
  const [dialogOpen, setDialogOpen] = React.useState(false)

  const handleDialogOpen = (item) => {
    setDialogItem(item)
    setDialogOpen(true)
  }
  const handleDialogClose = () => {
    setDialogOpen(false)
  }

  return (
    <PageItem id={id} label="EXPERIENCE">
      <>
        <Timeline position="alternate" sx={{ m: 'auto', p: 0, display: { xs: 'none', md: 'block' } }}>
          {
          experience.map((item, index) => (
            <TimelineItem key={item.id}>
              <TimelineOppositeContent sx={{ m: 'auto' }}>
                <Typography component="span" sx={{ p: 1 }}>{item.yearsActive}</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot variant="outlined">{item.icon}</TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Card raised>
                  <CardHeader
                    title={item.label}
                    subheader={item.title}
                    action={(
                      <ToolTip title="More Info" placement="right">
                        <IconButton onClick={() => handleDialogOpen(item)}><MoreVert /></IconButton>
                      </ToolTip>
                    )}
                    sx={{ flexDirection: index % 2 === 1 ? 'row-reverse' : 'row' }}
                  />
                  <CardContent>
                    {
                      item.relevantSkills.map((rSkill) => (
                        <Chip variant="skill" label={rSkill} size="small" color="primary" key={rSkill} />
                      ))
                    }
                    <br />
                    {
                      item.otherSkills.map((oSkill) => (
                        <Chip variant="skill" label={oSkill} size="small" color="secondary" key={oSkill} />
                      ))
                    }
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
          ))
        }
        </Timeline>
        <DialogBox close={() => handleDialogClose()} open={dialogOpen} label={dialogItem.label}>
          <ExpCarousel expRec={dialogItem} />
        </DialogBox>
      </>
    </PageItem>
  )
}
ExperiencePageItem.propTypes = {
  id: PropTypes.string.isRequired,
}

/*
Quality Checked: Brian Francis - 12/18/2021
 */
