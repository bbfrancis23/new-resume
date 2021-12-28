import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from '@mui/material/Tooltip'
import {
  Box, Fab, Grid, useTheme,
} from '@mui/material'
import PageItem from '../ui/PageItems'
import AppSettings from '../content/settings/AppSettings'

import { ArizonaHero } from '../content/imgs'

export default function Settings(props) {
  const theme = useTheme()
  theme.effects = theme.effects ? theme.effects : ''
  const { updateTheme } = props

  return (
    <Box sx={{ height: '96vh' }}>
      <PageItem id="settings">
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <AppSettings updateTheme={(themeName, options) => updateTheme(themeName, options)} />
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Tooltip
                title="Toggle Effects Off and On"
                placement="right"
                style={{ cursor: 'help' }}
              >
                <span>Effects</span>
              </Tooltip>
              <br />
              <Tooltip title="Stained Glass Effect">
                <Fab
                  color="secondary"
                  variant={theme.effects.stainedGlass ? 'stainedGlass' : ''}
                  onClick={() => updateTheme('Arizona', { stainedGlass: false })}

                />
              </Tooltip>

              <Fab
                variant="stainedGlass"
                onClick={() => updateTheme('Arizona', { stainedGlass: false })}
                sx={{
                  position: 'relative',
                  right: '56px',
                  zIndex: -1,
                  backgroundImage:
                      `url("${ArizonaHero}")`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              />
            </Box>
          </Grid>

        </Grid>
      </PageItem>
    </Box>
  )
}
Settings.propTypes = {
  updateTheme: PropTypes.func.isRequired,
}
/*
Quality Checked: Brian Francis - 12/28/2021
 */
