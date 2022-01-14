import React from 'react'
import PropTypes from 'prop-types'
import {
  ImageList, ImageListItem, ImageListItemBar,
} from '@mui/material'

import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/Info'

import AppDialog from '../../app/AppDialog'
import PageItem from '../../ui/PageItems'

import experience from '../data'
import Carousel from '../../ui/Carousel'

export default function Portfolio(props) {
  const { id } = props

  const [portfolioDialogOpen, setPortfolioDialogOpen] = React.useState(false)

  const [portIndex, setPortIndex] = React.useState(3)

  const handlePortfolioDialogOpen = (index) => () => {
    setPortIndex(index)
    setPortfolioDialogOpen(true)
  }
  const handlePortfolioDialogClose = () => setPortfolioDialogOpen(false)

  return (

    <PageItem id={id} label="PORTFOLIO">
      <>
        <ImageList gap={40}>
          {
            experience.map((item, index) => (
              <ImageListItem key={item.id} onClick={handlePortfolioDialogOpen(index)}>
                <img
                  src={item.cover}
                  alt={item.label}
                  style={{ width: '100%' }}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.label}
                  subtitle={item.title}
                  actionIcon={(
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${item.title}`}
                    >
                      <InfoIcon />
                    </IconButton>
                    )}
                />
              </ImageListItem>
            ))
          }
        </ImageList>
        <AppDialog close={() => handlePortfolioDialogClose()} open={portfolioDialogOpen} label="App">
          <Carousel imgs={experience[portIndex].imgs} />
        </AppDialog>
      </>
    </PageItem>

  )
}
Portfolio.propTypes = {
  id: PropTypes.string.isRequired,
}
/*
Quality Checked: Brian Francis - 12/22/2021
 */
