import React from 'react'
import PropTypes from 'prop-types'

import {
  useTheme, Fab, Box, Typography,
} from '@mui/material'
import { Star as SelectedIcon } from '@mui/icons-material'

import { appThemes } from '../../effects/effects'

import EfTooltip from '../../ui/EfTooltip'

import { themeHeroes } from '../../content/imgs'
import SettingsStack from './components/core'

export default function AppSettingsThemes(props) {
  const theme = useTheme()

  const { updateTheme } = props

  const getThemeButton = (t) => (
    <EfTooltip key={t.name} title={t.name}>
      <Fab
        onClick={() => updateTheme({ name: t.name })}
        sx={{
          backgroundImage: `url(${themeHeroes[t.name]})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          ':hover': { opacity: 0.85 },
        }}
      >
        { t.name === theme.name && <SelectedIcon sx={{ color: 'white' }} /> }
      </Fab>
    </EfTooltip>
  )

  return (
    <Box>
      <Typography variant="span" sx={{ cursor: 'default' }}>Select Theme</Typography>
      <SettingsStack>
        { appThemes.slice(0, 3).map((t) => getThemeButton(t)) }
      </SettingsStack>
      <SettingsStack>
        { appThemes.slice(3, 6).map((t) => getThemeButton(t)) }
      </SettingsStack>
    </Box>
  )
}
AppSettingsThemes.propTypes = {
  updateTheme: PropTypes.func.isRequired,
}

/*
Quality Checked: Brian Francis - 01/09/2021
 */
