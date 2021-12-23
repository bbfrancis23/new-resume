import * as React from 'react'

import PropTypes from 'prop-types'
import {
  Box, Grid, styled, Typography,
} from '@mui/material'
import Paper from '@mui/material/Paper'
import PageItem from '../../ui/PageItems'
import BrianMelinthin from '../../img/portraits/brian-m.jpg'

import JodyFarnsworthJones from '../../img/portraits/jody-farnsworth-uribe.jpg'

const Signature = styled(Typography)(() => ({
  margin: 'auto',
  fontSize: '20px',
  textAlign: 'center',
  paddingTop: '25px',
  fontFamily: '"Dancing Script", cursive',
}))

function FancyQuote() {
  return (
    <Box sx={{
      p: 2, textAlign: 'center', fontFamily: 'Georgia,Serif', fontSize: '75px',
    }}
    >
      “
    </Box>
  )
}

export default function Testimonials(props) {
  const { id } = props

  return (
    <PageItem id={id} label="TESTIMONIALS">
      <Paper elevation={12}>
        <Grid container>
          <Grid item xs={5}>
            <img src={BrianMelinthin} alt="Brian Melinthin" style={{ width: '100%', height: '100%' }} />
          </Grid>
          <Grid item xs={7}>
            <FancyQuote />
            <Typography sx={{ margin: 'auto', width: '60%', textAlign: 'center' }}>
              The quality of his work has allowed us to climb
              from the ranks of “also has classifieds” to an industry leader.
              We trust him to be responsible for roughly a third of iboats total traffic (our life blood).
              He has proven his ability to work well with other programmers to make positive changes to the
              underlying data structure which is common to other products in the company.
            </Typography>
            <Signature>
              - Brian Mellenthin
            </Signature>
            <Typography sx={{ textAlign: 'center' }}>
              - Former VP Operations iboats.com.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={12} sx={{ mt: 5 }}>
        <Grid container>

          <Grid item xs={7}>
            <FancyQuote />
            <Typography sx={{ margin: 'auto', width: '60%', textAlign: 'center' }}>
              Brian absolutely exceeded all of my expectations in designing my website.
              He took all of my content and transformed into a phenomenal website.
              He edited my photos, created my logo, found perfect pictures to represent my services.
              All of my categories are layout are perfectly placed and the site flows magically.
              I highly recommend Brian. He is very prompt and delivers amazing service.
            </Typography>
            <Signature>
              - Jody Farnsworth Jones
            </Signature>
            <Typography sx={{ textAlign: 'center' }}>
              - Owner Magic Healing Hands
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <img src={JodyFarnsworthJones} alt="Brian Melinthin" style={{ width: '100%', height: '100%' }} />
          </Grid>
        </Grid>
      </Paper>

    </PageItem>
  )
}
Testimonials.propTypes = {
  id: PropTypes.string.isRequired,
}

/*
Quality Checked: Brian Francis - 12/18/2021
 */
