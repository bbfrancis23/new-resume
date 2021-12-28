import React from 'react'
import {
  styled, ThemeProvider, CssBaseline, Box, Tooltip, Fab,
} from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'

import { BrowserRouter } from 'react-router-dom'
import { themes, createGlobalTheme } from './Themes'
import { appConfig } from './AppConfig'

import AppSideNav from './AppSideNav'
import AppToolBar from './AppToolBar'

import AppDialog from './ui/AppDialog'
import AppSettings from './content/settings/AppSettings'
import AppFooter from './AppFooter'
import {
  MidnightHero, HawaiiHero, ArizonaHero, LushHero, PirateHero, CorporateHero,
} from './content/imgs'

import AppRoutes from './AppRoutes'

const themeHeroes = {
  Corporate: CorporateHero,
  Midnight: MidnightHero,
  Hawaii: HawaiiHero,
  Arizona: ArizonaHero,
  Pirate: PirateHero,
  Lush: LushHero,
}

const HeroContainer = styled('div')(() => ({
  position: 'fixed', width: '100%', height: '370px',
}))

export default function App() {
  const [appSettingsDialogOpen, setAppSettingsDialogOpen] = React.useState(false)
  const handleSettingsDialogOpen = () => setAppSettingsDialogOpen(true)
  const handleSettingsDialogClose = () => setAppSettingsDialogOpen(false)

  const initTheme = () => {
    let themeOptions = themes[0]
    const themeName = localStorage.getItem('themeName')
    if (themeName) themeOptions = themes.find((t) => t.name === themeName)
    themeOptions.palette.mode = !localStorage.getItem('themeMode') ? 'light' : localStorage.getItem('themeMode')

    return createGlobalTheme(themeOptions)
  }

  const [theme, setTheme] = React.useState(initTheme())
  theme.name = theme.name || themes[0].name
  theme.effects = theme.effects || themes[0].effects

  const handleUpdateTheme = (themeName, options) => {
    const themeOptions = themes.find((t) => t.name === themeName)
    if (themeOptions.name === theme.name) {
      themeOptions.palette.mode = themeOptions.palette.mode === 'light' ? 'dark' : 'light'
    } else {
      themeOptions.palette.mode = 'light'
    }

    if (options) {
      if (options.stainedGlass === true || options.stainedGlass === false) {
        themeOptions.effects.stainedGlass = options.stainedGlass
      }
    }

    setTheme(createGlobalTheme(themeOptions))
    localStorage.setItem('themeName', themeName)
    localStorage.setItem('themeMode', themeOptions.palette.mode)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>

        <HeroContainer>
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
          <Tooltip title="Settings">
            <Fab
              onClick={handleSettingsDialogOpen}
              size="large"
              variant={theme.effects.stainedGlass ? 'stainedGlass' : ''}
            >
              <SettingsIcon size="large" />
            </Fab>
          </Tooltip>
          <AppSideNav appConfig={appConfig} />
        </Box>
        <AppDialog close={() => handleSettingsDialogClose()} open={appSettingsDialogOpen} label="App" moreLink="/settings">
          <AppSettings updateTheme={(themeName, options) => handleUpdateTheme(themeName, options)} />
        </AppDialog>
        <Box sx={{ width: '100%' }}>
          <AppRoutes updateTheme={(themeName, options) => handleUpdateTheme(themeName, options)} />
        </Box>
        <AppFooter />
      </BrowserRouter>
    </ThemeProvider>
  )
}

/*
Quality Checked: Brian Francis - 12/27/2021
 */
