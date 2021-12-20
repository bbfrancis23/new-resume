import Tooltip from '@mui/material/Tooltip'
import NightsStayIcon from '@mui/icons-material/NightsStay'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import React from 'react'
import { useTheme } from '@mui/material/styles'
import Fab from '@mui/material/Fab'
import Stack from '@mui/material/Stack'
import PropTypes from 'prop-types'
import { themes } from '../Themes'

export default function AppSettings(props) {
  const theme = useTheme()

  const { updateTheme } = props

  return (
    <div>
      <Tooltip title="Select two times to toggle between light and dark modes." placement="right">
        <span>Select Theme</span>
      </Tooltip>
      <Stack direction="row" spacing={2} sx={{ padding: theme.spacing(2) }}>
        {
          themes.slice(0, 3).map((t) => (
            <Tooltip
              key={t.name}
              title={
                // eslint-disable-next-line no-nested-ternary
                      t.name === theme.name
                        ? (t.palette.mode === 'light' ? `${t.name} dark mode` : `${t.name} light mode`)
                        : t.name
                    }
              enterDelay={1000}
            >
              <Fab
                onClick={() => updateTheme(t.name, 'dark')}
                sx={{ ':hover': { opacity: '0.75' } }}
                style={{
                  color: theme.palette.primary.contrastText,
                  background:
                          `linear-gradient(
                            -45deg, 
                            ${t.palette.primary.main} 35%, 
                            ${t.palette.secondary.main} 100%)`,
                }}
              >
                {
                      t.palette.mode === 'light'
                        ? <NightsStayIcon style={{ visibility: t.name === theme.name ? 'visible' : 'hidden' }} />
                        : <WbSunnyIcon style={{ visibility: t.name === theme.name ? 'visible' : 'hidden' }} />
                    }
              </Fab>
            </Tooltip>
          ))
        }
      </Stack>
      <Stack direction="row" spacing={2} sx={{ padding: theme.spacing(2) }}>
        {
          themes.slice(3, 6).map((t) => (
            <Tooltip
              key={t.name}
              title={
                    // eslint-disable-next-line no-nested-ternary
                    t.name === theme.name
                      ? (t.palette.mode === 'light' ? `${t.name} dark mode` : `${t.name} light mode`)
                      : t.name
                  }
              enterDelay={1000}
            >
              <Fab
                onClick={() => updateTheme(t.name, 'dark')}
                sx={{ ':hover': { opacity: '0.75' } }}
                style={{
                  color: theme.palette.primary.contrastText,
                  background:
                          `linear-gradient(
                            -45deg, 
                            ${t.palette.primary.main} 35%, 
                            ${t.palette.secondary.main} 100%)`,
                }}
              >
                {
                    t.palette.mode === 'light'
                      ? <NightsStayIcon style={{ visibility: t.name === theme.name ? 'visible' : 'hidden' }} />
                      : <WbSunnyIcon style={{ visibility: t.name === theme.name ? 'visible' : 'hidden' }} />
                  }
              </Fab>
            </Tooltip>
          ))
        }
      </Stack>
    </div>
  )
}
AppSettings.propTypes = {
  updateTheme: PropTypes.func.isRequired,
}
