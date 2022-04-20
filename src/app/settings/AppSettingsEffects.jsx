import React from 'react'
import {
  Box, Fab, useTheme,
} from '@mui/material'
import { Landscape as StainedGlassIcon, Help as HelpIcon, ViewInAr as ThreeDIcon } from '@mui/icons-material'
import PropTypes from 'prop-types'
import ToolTip from '../../ui/ToolTip'
import SettingsStack from './components/core'

export default function AppSettingsEffects(props) {
  const theme = useTheme()
  const { updateTheme } = props

  return (
    <Box>
      <ToolTip
        title="Toggle Effects Off and On"
        placement="right"
        style={{ cursor: theme.effects.tooltips ? 'help' : 'default' }}
      >
        <span>Effects</span>
      </ToolTip>
      <Box>
        <SettingsStack>
          <Box>
            <ToolTip
              title="Stained Glass"
              style={{ cursor: theme.effects.tooltips ? 'help' : 'pointer' }}
            >
              <Fab
                color={theme.effects.stainedGlass ? 'primary' : 'default'}
                onClick={() => updateTheme({ stainedGlass: !theme.effects.stainedGlass })}
              >
                <StainedGlassIcon size="large" />
              </Fab>
            </ToolTip>
          </Box>
          <Box>
            <ToolTip
              title="Tool Tips"
              style={{ cursor: theme.effects.tooltips ? 'help' : 'pointer' }}
            >
              <Fab
                color={theme.effects.tooltips ? 'primary' : 'default'}
                onClick={() => updateTheme({ tooltips: !theme.effects.tooltips })}
              >
                <HelpIcon size="large" />
              </Fab>
            </ToolTip>

          </Box>
          <Box>
            <ToolTip
              title="Tool Tips"
              style={{ cursor: theme.effects.tooltips ? 'help' : 'pointer' }}
            >
              <Fab
                color={theme.effects.threeD ? 'primary' : undefined}
                onClick={() => updateTheme({ threeD: !theme.effects.threeD })}
              >
                <ThreeDIcon size="large" />
              </Fab>
            </ToolTip>
          </Box>
        </SettingsStack>
      </Box>
    </Box>
  )
}

AppSettingsEffects.propTypes = {
  updateTheme: PropTypes.func.isRequired,
}

/* QA: Brian Francis - 04/19/2022  */
