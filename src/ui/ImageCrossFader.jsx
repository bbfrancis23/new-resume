import { Box } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'

export default function ImageCrossFader(props) {
  const { imgs, selectedId, ...forwardProps } = props

  return (
    <Box {...forwardProps}>
      {
          imgs.map((img) => (
            <img
              key={img.id}
              src={img.src}
              alt={img.label}
              style={{
                position: 'absolute',
                transition: 'opacity 1s ease-in-out',
                opacity: img.id === selectedId ? 1 : 0,
                filter: img.id === selectedId ? 'alpha(opacity=0)' : 'alpha(opacity=0)',
              }}
            />
          ))
        }

    </Box>
  )
}
ImageCrossFader.propTypes = {
  imgs: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedId: PropTypes.string.isRequired,
}
