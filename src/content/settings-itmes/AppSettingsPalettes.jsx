import {
  Box, Fab, Grid, Stack, useTheme,
} from '@mui/material'
import { NightsStay as DarkModeIcon, WbSunny as LightModeIcon } from '@mui/icons-material'
import React from 'react'
import PropTypes from 'prop-types'
import { palettes } from '../../AppThemes'
import EfTooltip from '../../ui/effects-components/EfTooltip'

export default function AppSettingsPalettes(props) {
  const theme = useTheme()
  const { updateTheme } = props

  const getTooltipTitle = () => (theme.palette.mode === 'light' ? `${theme.name} dark mode ` : `${theme.name} light mode`)

  const updateThemeOptions = (index) => {
    const options = { palette: palettes[index] }

    if (theme.palette.name === palettes[index].name) {
      options.mode = theme.palette.mode === 'light' ? 'dark' : 'light'
    }
    updateTheme(options)
  }

  const getPaletteButton = (index) => (
    <EfTooltip key={index} title={getTooltipTitle()}>
      <Fab
        onClick={() => updateThemeOptions(index)}
        sx={{
          background:
            `linear-gradient( -25deg, ${palettes[index].secondary.main} -50%, ${palettes[index].primary.main} 100% )`,
          ':hover':
            {
              background:
                  `linear-gradient( -25deg, ${palettes[index].secondary.main} -5%, ${palettes[index].primary.main} 100% )`,
            },
        }}
        style={{
          color: theme.palette.getContrastText(palettes[index].primary.main),
        }}
      >
        {
            theme.palette.mode === 'light'
              ? <DarkModeIcon style={{ visibility: theme.palette.name === palettes[index].name ? 'visible' : 'hidden' }} />
              : <LightModeIcon style={{ visibility: theme.palette.name === palettes[index].name ? 'visible' : 'hidden' }} />
          }
      </Fab>
    </EfTooltip>
  )

  return (
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
          { palettes.slice(0, 3).map((t, index) => getPaletteButton(index)) }
        </Stack>
        <Stack direction="row" spacing={2} sx={{ p: 2 }}>
          { palettes.slice(3, 6).map((t, index) => getPaletteButton((index + 3))) }
        </Stack>
      </Box>
    </Grid>
  )
}

AppSettingsPalettes.propTypes = {
  updateTheme: PropTypes.func.isRequired,
}

/*
Quality Checked: Brian Francis - 12/30/2021
 */
