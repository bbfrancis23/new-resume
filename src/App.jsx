import React from 'react'
import {
  styled, ThemeProvider, CssBaseline, Box, Fab,
} from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import { BrowserRouter } from 'react-router-dom'
import { appThemes, createGlobalTheme, effects } from './AppThemes'
import { appConfig } from './AppConfig'

import AppSideNav from './AppSideNav'
import AppToolBar from './AppToolBar'
import AppDialog from './AppDialog'
import AppSettings from './AppSettings'
import AppFooter from './AppFooter'
import AppRoutes from './AppRoutes'

import { themeHeroes } from './content/imgs'
import EfTooltip from './ui/effects-components/EfTooltip'

const HeroContainer = styled('div')(() => ({
  position: 'fixed', width: '100%', height: '370px',
}))

export default function App() {
  const [appSettingsDialogOpen, setAppSettingsDialogOpen] = React.useState(false)
  const handleSettingsDialogOpen = () => setAppSettingsDialogOpen(true)
  const handleSettingsDialogClose = () => setAppSettingsDialogOpen(false)

  const initTheme = () => {
    let themeOptions = localStorage.getItem('themeOptions')
    themeOptions = themeOptions ? (JSON.parse(themeOptions)) : appThemes[0]
    return createGlobalTheme(themeOptions)
  }

  const [theme, setTheme] = React.useState(initTheme())
  theme.name = theme.name || appThemes[0].name
  theme.effects ||= effects

  const handleUpdateTheme = (options) => {
    let themeOptions = {}

    console.log(options)

    if (options) {
      if (options.name) {
        themeOptions = appThemes.find((t) => t.name === options.name)
        themeOptions.effects = theme.effects
      } else {
        themeOptions = localStorage.getItem('themeOptions')
        themeOptions = themeOptions ? (JSON.parse(themeOptions)) : appThemes[0]
      }

      if (options.stainedGlass === true || options.stainedGlass === false) {
        themeOptions.effects.stainedGlass = options.stainedGlass
      }
      if (options.tooltips === true || options.tooltips === false) {
        themeOptions.effects.tooltips = options.tooltips
      }
      if (options.mode) {
        themeOptions.palette.mode = options.mode
      }

      if (options.palette) { themeOptions.palette = options.palette }
    }

    setTheme(createGlobalTheme(themeOptions))

    localStorage.setItem('themeOptions', JSON.stringify(themeOptions))
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <HeroContainer style={{ zIndex: -1 }}>
          <img src={themeHeroes[theme.name]} alt="Theme Hero" />
        </HeroContainer>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <AppToolBar appConfig={appConfig} settingsDialogOpen={handleSettingsDialogOpen} />
        </Box>
        <Box sx={{
          display: { xs: 'none', md: 'block' },
          position: 'fixed',
          right: theme.spacing(3),
          top: theme.spacing(3),
          zIndex: 'appBar',
        }}
        >
          <EfTooltip title="Settings">
            <span>
              <Fab
                onClick={handleSettingsDialogOpen}
                size="large"
                color="secondary"
                variant={theme.effects.stainedGlass ? 'stainedGlass' : ''}
                disabled={window.location.pathname === '/settings'}
              >
                <SettingsIcon size="large" />
              </Fab>
            </span>
          </EfTooltip>
          <AppSideNav appConfig={appConfig} />
        </Box>
        <AppDialog close={() => handleSettingsDialogClose()} open={appSettingsDialogOpen} label="App" moreLink="/settings">
          <AppSettings updateTheme={(options) => handleUpdateTheme(options)} />
        </AppDialog>
        <Box sx={{ width: '100%' }}>
          <AppRoutes updateTheme={(options) => handleUpdateTheme(options)} />
        </Box>
        <AppFooter />
      </BrowserRouter>
    </ThemeProvider>
  )
}

/*
Quality Checked: Brian Francis - 12/30/2021
 */
