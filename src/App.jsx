import React from 'react'
import { styled, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import SettingsIcon from '@mui/icons-material/Settings'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import Fab from '@mui/material/Fab'

import { themes, createGlobalTheme } from './Themes'
import { appConfig } from './AppConfig'

import AppSideNav from './AppSideNav'
import AppToolBar from './AppToolBar'

import SettingsDialog from './ui/dialogs/SettingsDialog'
import AppSettings from './ui/settings/AppSettings'

import MidnightHero from './img/heroes/midnight.jpg'
import HawaiiHero from './img/heroes/hawaii.jpg'
import ArizonaHero from './img/heroes/arizona.jpg'
import LushHero from './img/heroes/lush.jpg'
import PirateHero from './img/heroes/pirate.jpg'
import corporateHero from './img/heroes/corp.jpg'
import AppFooter from './AppFooter'

const themeHeroes = {
  Corporate: corporateHero,
  Midnight: MidnightHero,
  Hawaii: HawaiiHero,
  Arizona: ArizonaHero,
  Pirate: PirateHero,
  Lush: LushHero,
}

const HeroContainer = styled('div')(() => ({
  position: 'fixed', zIndex: -1, width: '100%', height: '370px',
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

  const handleUpdateTheme = (themeName) => {
    const themeOptions = themes.find((t) => t.name === themeName)

    if (themeOptions.name === theme.name) {
      const themeMode = themeOptions.palette.mode === 'light' ? 'dark' : 'light'
      themeOptions.palette.mode = themeMode
      localStorage.setItem('themeMode', themeMode)
    }

    setTheme(createGlobalTheme(themeOptions))
    localStorage.setItem('themeName', themeName)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <HeroContainer>
        <img src={themeHeroes[theme.name]} alt="Theme Hero" />
      </HeroContainer>

      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <AppToolBar appConfig={appConfig} settingsDialogOpen={handleSettingsDialogOpen} />
      </Box>

      <Box sx={{
        display: { xs: 'none', md: 'block' }, position: 'fixed', right: theme.spacing(3), top: theme.spacing(3),
      }}
      >
        <Tooltip title="Settings">
          <Fab onClick={handleSettingsDialogOpen} size="large" variant="stainedGlass">
            <SettingsIcon size="large" />
          </Fab>
        </Tooltip>
        <AppSideNav appConfig={appConfig} />
      </Box>

      <SettingsDialog close={() => handleSettingsDialogClose()} open={appSettingsDialogOpen} label="App">
        <AppSettings updateTheme={(themeName) => handleUpdateTheme(themeName)} theme={theme} />
      </SettingsDialog>

      <Box sx={{ width: '100%', paddingTop: theme.spacing(1) }}>
        { appConfig.pageItems.map((item) => item.pageComponent) }
      </Box>

      <AppFooter />
    </ThemeProvider>
  )
}

/*
Quality Checked: Brian Francis - 12/18/2021
 */
