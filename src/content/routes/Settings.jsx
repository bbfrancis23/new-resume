import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from '@mui/material/Tooltip'
import {
  Box, Fab, Grid, useTheme,
} from '@mui/material'
import PageItem from '../../ui/PageItems'
import AppSettings from '../../AppSettings'

import {
  MidnightHero, HawaiiHero, ArizonaHero, LushHero, PirateHero, CorporateHero,
} from '../imgs'

const themeHeroes = {
  Corporate: CorporateHero,
  Midnight: MidnightHero,
  Hawaii: HawaiiHero,
  Arizona: ArizonaHero,
  Pirate: PirateHero,
  Lush: LushHero,
}

export default function Settings(props) {
  const theme = useTheme()
  theme.name = theme.name ? theme.name : ''
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
              <Box sx={{ pt: 2 }}>
                <Tooltip title="Stained Glass Effect">
                  <Fab
                    color="secondary"
                    variant={theme.effects.stainedGlass ? 'stainedGlass' : ''}
                    onClick={() => updateTheme(theme.name, { stainedGlass: !theme.effects.stainedGlass })}

                  />
                </Tooltip>

                <Fab
                  variant="stainedGlass"
                  sx={{
                    position: 'relative',
                    right: '56px',
                    zIndex: -1,
                    backgroundImage:
                          `url(${themeHeroes[theme.name]})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                />
              </Box>

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
Quality Checked: Brian Francis - 12/29/2021
 */
