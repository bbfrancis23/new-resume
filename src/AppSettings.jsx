import React from 'react'
import PropTypes from 'prop-types'

import {
  useTheme, Fab, Stack, Box,
} from '@mui/material'

import { NightsStay as DarkModeIcon, WbSunny as LightModeIcon } from '@mui/icons-material'
import { themes, effects } from './Themes'
import EfTooltip from './ui/effects-components/EfTooltip'

export default function AppSettings(props) {
  const theme = useTheme()
  theme.effects ||= effects
  theme.name = theme.name || ''

  const { updateTheme } = props

  const getTooltipTitle = (themeName) => {
    if (themeName === theme.name) {
      return theme.palette.mode === 'light' ? `${theme.name} dark mode ` : `${theme.name} light mode`
    }
    return themeName
  }

  const updateThemeOptions = (themeName) => {
    const mode = (themeName === theme.name && theme.palette.mode === 'light') ? 'dark' : 'light'
    updateTheme(themeName, { mode })
  }

  const getThemeButton = (t) => (
    <EfTooltip key={t.name} title={getTooltipTitle(t.name)}>
      <Fab
        onClick={() => updateThemeOptions(t.name)}
        sx={{
          background: `linear-gradient( -25deg, ${t.palette.secondary.main} -50%, ${t.palette.primary.main} 100% )`,
          ':hover':
              {
                background: `linear-gradient( -25deg, ${t.palette.secondary.main} -5%, ${t.palette.primary.main} 100% )`,
              },
        }}
        style={{
          color: theme.palette.primary.contrastText,

        }}
      >
        {
        t.palette.mode === 'light'
          ? <DarkModeIcon style={{ visibility: t.name === theme.name ? 'visible' : 'hidden' }} />
          : <LightModeIcon style={{ visibility: t.name === theme.name ? 'visible' : 'hidden' }} />
        }
      </Fab>
    </EfTooltip>
  )

  return (
    <Box>
      <EfTooltip
        title="Select multiple times to toggle between light and dark modes."
        placement="right"
        style={{ cursor: theme.effects.tooltips ? 'help' : 'default' }}
      >
        <span>Select Theme</span>
      </EfTooltip>
      <Stack direction="row" spacing={2} sx={{ p: 2 }}>
        {
          themes.slice(0, 3).map((t) => getThemeButton(t))
        }
      </Stack>
      <Stack direction="row" spacing={2} sx={{ p: 2 }}>
        {
          themes.slice(3, 6).map((t) => getThemeButton(t))
        }
      </Stack>
    </Box>
  )
}
AppSettings.propTypes = {
  updateTheme: PropTypes.func.isRequired,
}

/*
Quality Checked: Brian Francis - 12/30/2021
 */
