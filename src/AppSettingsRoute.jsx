import React from 'react'
import PropTypes from 'prop-types'
import {
  Box, Fab, Grid, Stack, Typography, useTheme,
} from '@mui/material'
import HelpIcon from '@mui/icons-material/Help'
import { NightsStay as DarkModeIcon, WbSunny as LightModeIcon } from '@mui/icons-material'
import PageItem from './ui/PageItems'
import AppSettings from './AppSettings'

/* eslint-disable */

import EfTooltip from './ui/effects-components/EfTooltip'

import { themeHeroes } from './content/imgs'
import {appThemes, palettes} from "./AppThemes";

export default function AppSettingsRoute(props) {
  const theme = useTheme()
  theme.name = theme.name ? theme.name : ''
  theme.effects = theme.effects ? theme.effects : ''
  const { updateTheme } = props

  const getTooltipTitle = () => (theme.palette.mode === 'light' ? `${theme.name} dark mode ` : `${theme.name} light mode`)

  const updateThemeOptions = (themeName) => {
    const mode = (themeName === theme.name && theme.palette.mode === 'light') ? 'dark' : 'light'
    updateTheme(themeName, { mode })
  }

  const getPaletteButton = (index) => (
    <EfTooltip key={index} title={getTooltipTitle()}>
       <Fab
        onClick={() => updateTheme({palette: palettes[index]})}
        sx={{
          background: `linear-gradient( -25deg, ${palettes[index].secondary.main} -50%, ${palettes[index].primary.main} 100% )`,
          ':hover':
              {
                background: `linear-gradient( -25deg, ${palettes[index].secondary.main} -5%, ${palettes[index].primary.main} 100% )`,
              },
        }}
        style={{
          color: theme.palette.getContrastText(palettes[index].primary.main),
        }}
       >

        {           theme.palette.mode === 'light' ? <DarkModeIcon  />  : <LightModeIcon />          }
      </Fab>
    </EfTooltip>
  )

  return (
    <Box sx={{ height: '96vh' }}>
      <PageItem id="settings">
        <Grid container>
          <Grid item xs={4}>
            <AppSettings updateTheme={(options) => updateTheme(options)} />
          </Grid>
          <Grid item xs={4}>
            <Box>
              <EfTooltip
                title="Select multiple times to toggle between light and dark modes."
                placement="right"
                style={{ cursor: theme.effects.tooltips ? 'help' : 'default' }}
              >
                <span>Palettes</span>
              </EfTooltip>
              <Stack direction="row" spacing={2} sx={{ p: 2 }}>
                {
                  palettes.slice(0, 3).map((t,index) => getPaletteButton(index))
                }
              </Stack>
              <Stack direction="row" spacing={2} sx={{ p: 2 }}>
                {
                  palettes.slice(3, 6).map((t,index) => getPaletteButton((index + 3)))
                }
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <EfTooltip
                title="Toggle Effects Off and On"
                placement="right"
                style={{ cursor: theme.effects.tooltips ? 'help' : 'default' }}
              >
                <span>Effects</span>
              </EfTooltip>
              <Box>
                <Stack direction="row" spacing={2} sx={{ p: 2 }}>
                  <Box>
                    <Typography>
                      Stained Glass
                    </Typography>
                    <Fab
                      color="secondary"
                      variant={theme.effects.stainedGlass ? 'stainedGlass' : ''}
                      onClick={() => updateTheme({ stainedGlass: !theme.effects.stainedGlass })}
                    />
                  </Box>
                  <Box>
                    <Typography>
                      Tooltips
                    </Typography>
                    <Fab
                      color="secondary"
                      variant={theme.effects.stainedGlass ? 'stainedGlass' : ''}
                      onClick={() => updateTheme({ tooltips: !theme.effects.tooltips })}
                    >
                      { theme.effects.tooltips && <HelpIcon size="large" />}
                    </Fab>
                  </Box>

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
AppSettingsRoute.propTypes = {
  updateTheme: PropTypes.func.isRequired,
}

/*
Quality Checked: Brian Francis - 12/30/2021
 */
