import React from 'react'
import PropTypes from 'prop-types'

/* eslint-disable */

import {
  useTheme, Fab, Stack, Box,
} from '@mui/material'

import { NightsStay as DarkModeIcon, WbSunny as LightModeIcon } from '@mui/icons-material'
import { appThemes, effects } from './AppThemes'
import EfTooltip from './ui/effects-components/EfTooltip'

import {themeHeroes} from "./content/imgs";

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

  // const updateThemeOptions = (themeName) => {
  //   const mode = (themeName === theme.name && theme.palette.mode === 'light') ? 'dark' : 'light'
  //   updateTheme(themeName, { mode })
  // }

  const getThemeButton = (t) => (
    <EfTooltip key={t.name} title={getTooltipTitle(t.name)}>

      <Fab
          onClick={() => updateTheme({name: t.name})}
          sx={{

            backgroundImage:
                `url(${themeHeroes[t.name]})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
      >
      {
        t.palette.mode === 'light'
          ? <DarkModeIcon style={{ visibility: t.name === theme.name ? 'visible' : 'hidden' }}  />
          : <LightModeIcon style={{ visibility: t.name === theme.name ? 'visible' : 'hidden' }}  />
        }
       </Fab>
    </EfTooltip>
  )

  return (
    <Box>
      <EfTooltip
        title=""
        placement="right"
        style={{ cursor: theme.effects.tooltips ? 'help' : 'default' }}
      >
        <span>Select Theme</span>
      </EfTooltip>
      <Stack direction="row" spacing={2} sx={{ p: 2 }}>
        {
          appThemes.slice(0, 2).map((t) => getThemeButton(t))
        }
      </Stack>
      <Stack direction="row" spacing={2} sx={{ p: 2 }}>
        {
          appThemes.slice(2, 4).map((t) => getThemeButton(t))
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
