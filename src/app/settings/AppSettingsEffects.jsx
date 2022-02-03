import {
  Box, Fab, Typography, useTheme,
} from '@mui/material'
import { Landscape as StainedGlassIcon, Help as HelpIcon, ViewInAr as ThreeDIcon } from '@mui/icons-material'
import React from 'react'
import PropTypes from 'prop-types'
import EfTooltip from '../../effects/EfTooltip'
import SettingsStack from './components/core'

export default function AppSettingsEffects(props) {
  const theme = useTheme()
  const { updateTheme } = props

  return (
    <Box>
      <EfTooltip
        title="Toggle Effects Off and On"
        placement="right"
        style={{ cursor: theme.effects.tooltips ? 'help' : 'default' }}
      >
        <span>Effects</span>
      </EfTooltip>
      <Box>
        <SettingsStack>
          <Typography variant="caption" sx={{ width: '56px', textAlign: 'center' }}>Stained Glass </Typography>
          <Typography variant="caption" sx={{ width: '56px', textAlign: 'center' }}>Tooltips</Typography>
          <Typography variant="caption" sx={{ width: '56px', textAlign: 'center' }}>3-D</Typography>
        </SettingsStack>
        <SettingsStack>
          <Box>

            <Fab
              color={theme.effects.stainedGlass ? 'primary' : ''}
              onClick={() => updateTheme({ stainedGlass: !theme.effects.stainedGlass })}
            >
              <StainedGlassIcon size="large" />
            </Fab>
          </Box>
          <Box>

            <Fab
              color={theme.effects.tooltips ? 'primary' : 'default'}
              onClick={() => updateTheme({ tooltips: !theme.effects.tooltips })}
            >
              <HelpIcon size="large" />
            </Fab>
          </Box>
          <Box>
            <Fab
              color={theme.effects.threeD ? 'primary' : undefined}
              onClick={() => updateTheme({ threeD: !theme.effects.threeD })}
            >
              <ThreeDIcon size="large" />
            </Fab>
          </Box>

        </SettingsStack>

      </Box>

    </Box>
  )
}

AppSettingsEffects.propTypes = {
  updateTheme: PropTypes.func.isRequired,
}

/*
Quality Checked: Brian Francis - 01/09/2021
 */
