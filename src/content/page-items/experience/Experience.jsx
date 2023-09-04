/*eslint-disable*/

import * as React from 'react'

import PropTypes from 'prop-types'

import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  Chip,
  IconButton,
  Stack,
  Button,
  CardActions,
} from '@mui/material'

import {MoreVert} from '@mui/icons-material'

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from '@mui/lab'

import experience from '../../data'
import ExpCarousel from './ExpCarousel'
import {PageItem, DialogBox, ToolTip} from '../../../ui'
import ExpMobile from './ExpMobile'

export default function ExperiencePageItem(props) {
  const {id} = props

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
        <ExpMobile />
        <Timeline position="alternate" sx={{m: 'auto', p: 0, display: {xs: 'none', md: 'block'}}}>
          {experience.map((item, index) => (
            <TimelineItem key={item.id}>
              <TimelineOppositeContent sx={{m: 'auto'}}>
                <Typography component="span" sx={{p: 1}}>
                  {item.yearsActive}
                </Typography>
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
                    // action={(
                    //   <ToolTip title="More Info" placement="right">
                    //     <IconButton onClick={() => handleDialogOpen(item)}><MoreVert /></IconButton>
                    //   </ToolTip>
                    // )}
                    sx={{flexDirection: index % 2 === 1 ? 'row-reverse' : 'row'}}
                  />
                  <CardContent>
                    Skills:
                    <br />
                    {item.relevantSkills.map((rSkill) => (
                      <Chip
                        variant="skill"
                        label={rSkill}
                        size="small"
                        key={rSkill}
                        color="primary"
                      />
                    ))}
                    <br />
                    Frame Works:
                    <br />
                    {item.otherSkills.map((oSkill) => (
                      <Chip
                        variant="skill"
                        label={oSkill}
                        size="small"
                        key={oSkill}
                        color={'secondary'}
                      />
                    ))}
                    <Stack
                      direction="row"
                      spacing={1}
                      justifyContent="left"
                      sx={{pt: 1, pl: 1}}></Stack>
                    <CardActions>
                      <Button
                        color="primary"
                        variant="contained"
                        label="View Samples"
                        onClick={() => handleDialogOpen(item)}>
                        View Samples
                      </Button>
                      {item.links && (
                        <>
                          {item.links.map((link) => (
                            <a href={link.url} target="_blank" rel="noreferrer">
                              <Button variant={'contained'} sx={{ml: 1}}>
                                {link.label}
                              </Button>
                            </a>
                          ))}
                        </>
                      )}
                    </CardActions>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
          ))}
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
