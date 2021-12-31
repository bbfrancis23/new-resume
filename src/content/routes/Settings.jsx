import React from 'react'
import PropTypes from 'prop-types'
import {
  Box, Fab, Grid, Stack, useTheme,
} from '@mui/material'
import HelpIcon from '@mui/icons-material/Help'
import PageItem from '../../ui/PageItems'
import AppSettings from '../../AppSettings'

import {
  MidnightHero, HawaiiHero, ArizonaHero, LushHero, PirateHero, CorporateHero,
} from '../imgs'
import EfTooltip from '../../ui/effects-components/EfTooltip'

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
              <EfTooltip
                title="Toggle Effects Off and On"
                placement="right"
                style={{ cursor: theme.effects.tooltips ? 'help' : 'default' }}
              >
                <span>Effects</span>
              </EfTooltip>

              <Box sx={{ pt: 2 }}>

                <Stack direction="row" spacing={2} sx={{ p: 2 }}>
                  <EfTooltip title="Stained Glass Effect">
                    <Fab
                      color="secondary"
                      variant={theme.effects.stainedGlass ? 'stainedGlass' : ''}
                      onClick={() => updateTheme(theme.name, { stainedGlass: !theme.effects.stainedGlass })}
                    />
                  </EfTooltip>

                  <EfTooltip title="Tooltips">
                    <Fab
                      color="secondary"
                      variant={theme.effects.stainedGlass ? 'stainedGlass' : ''}
                      onClick={() => updateTheme(theme.name, { tooltips: !theme.effects.tooltips })}
                    >
                      { theme.effects.tooltips && <HelpIcon size="large" />}
                    </Fab>
                  </EfTooltip>
                </Stack>
                <Fab
                  variant="stainedGlass"
                  sx={{
                    position: 'relative',
                    left: '16px',
                    bottom: '72px',
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
Quality Checked: Brian Francis - 12/30/2021
 */
