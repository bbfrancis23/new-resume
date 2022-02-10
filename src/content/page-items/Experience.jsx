import * as React from 'react'
import {
  Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot,
} from '@mui/lab'

import {
  Typography, Card, CardContent, CardHeader, Chip, IconButton,
} from '@mui/material'

import PropTypes from 'prop-types'
import { MoreVert } from '@mui/icons-material'
import PageItem from '../../ui/PageItem'
import experience from '../data'
import { ToolTip } from '../../ui'
import DialogBox from '../../ui/DialogBox'

export default function ExperiencePageItem(props) {
  const { id } = props

  const [dialogLabel, setDialogLabel] = React.useState('Your Mom')

  const [expDialogOpen, setExpDialogOpen] = React.useState(false)
  const handleExpDialogOpen = (label) => {
    setDialogLabel(label)
    setExpDialogOpen(true)
  }
  const handleExpDialogClose = () => setExpDialogOpen(false)

  return (
    <PageItem id={id} label="EXPERIENCE">
      <>
        <Timeline position="alternate" sx={{ m: 'auto', p: 0, display: { xs: 'none', md: 'block' } }}>
          {
          experience.map((item, index) => (
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
                  <CardHeader
                    title={item.label}
                    subheader={item.title}
                    action={(
                      <ToolTip title="More Info" placement="right">
                        <IconButton onClick={() => handleExpDialogOpen(item.label)}>
                          <MoreVert />
                        </IconButton>
                      </ToolTip>
                    )}
                    sx={{
                      flexDirection: index % 2 === 1 ? 'row-reverse' : 'row',
                    }}
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
        <DialogBox close={() => handleExpDialogClose()} open={expDialogOpen} label={dialogLabel}>
          <span>your mom</span>
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
