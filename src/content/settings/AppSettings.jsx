import React from 'react'
import Tooltip from '@mui/material/Tooltip'

import {
  useTheme, Fab, Stack, Box,
} from '@mui/material'

import DarkModeIcon from '@mui/icons-material/NightsStay'
import LightModeIcon from '@mui/icons-material/WbSunny'

import PropTypes from 'prop-types'

import { themes } from '../../Themes'

export default function AppSettings(props) {
  const theme = useTheme()
  theme.name = theme.name || ''

  const { updateTheme } = props

  const getTooltipTitle = (themeName) => {
    if (themeName === theme.name) {
      return theme.palette.mode === 'light' ? `${theme.name} dark mode ` : `${theme.name} light mode`
    }
    return themeName
  }

  const getThemeButton = (t) => (
    <Tooltip
      key={t.name}
      title={getTooltipTitle(t.name)}
    >
      <Fab
        color={`linear-gradient(
                            -45deg, 
                            ${t.palette.secondary.main} -75%,
                            ${t.palette.primary.main} 100% )
                            `}
        onClick={() => updateTheme(t.name)}
        sx={{ ':hover': { transform: 'scale(1.1)', transition: '.8s' }, transition: '.8s' }}
        style={{
          color: theme.palette.primary.contrastText,
          background:
                    `linear-gradient(
                            -45deg, 
                            ${t.palette.secondary.main} -75%,
                            ${t.palette.primary.main} 100% )
                            `,
        }}
      >
        {
              t.palette.mode === 'light'
                ? <DarkModeIcon style={{ visibility: t.name === theme.name ? 'visible' : 'hidden' }} />
                : <LightModeIcon style={{ visibility: t.name === theme.name ? 'visible' : 'hidden' }} />
            }
      </Fab>
    </Tooltip>
  )

  return (
    <Box>
      <Tooltip
        title="Select multiple times to toggle between light and dark modes."
        placement="right"
        style={{ cursor: 'help' }}
      >
        <span>Select Theme</span>
      </Tooltip>
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
Quality Checked: Brian Francis - 12/22/2021
 */
