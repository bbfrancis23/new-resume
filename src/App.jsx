import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import {
  styled, ThemeProvider, CssBaseline, Box, Fab,
} from '@mui/material'

import SettingsIcon from '@mui/icons-material/Settings'

import {
  appThemes, createGlobalTheme, effects, palettes,
} from './AppThemes'

import AppSideNav from './AppSideNav'
import AppToolBar from './AppToolBar'
import AppDialog from './AppDialog'
import AppFooter from './AppFooter'
import AppRoutes from './AppRoutes'
import EfTooltip from './ui/EfTooltip'
import { appConfig } from './AppConfig'
import { themeHeroes } from './content/imgs'
import AppSettingsThemes from './content/settings-itmes/AppSettingsThemes'

const HeroImgContainer = styled(Box)(() => ({
  position: 'fixed', width: '100%', height: '370px', zIndex: -1,
}))

const SideNavContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  right: theme.spacing(3),
  top: theme.spacing(3),
  zIndex: 'appBar',
}))

export default function App() {
  const [appSettingsDialogOpen, setAppSettingsDialogOpen] = React.useState(false)
  const handleSettingsDialogOpen = () => setAppSettingsDialogOpen(true)
  const handleSettingsDialogClose = () => setAppSettingsDialogOpen(false)

  const initTheme = () => {
    let themeOptions = localStorage.getItem('themeOptions')
    themeOptions = themeOptions ? (JSON.parse(themeOptions)) : appThemes[0]
    themeOptions.effects ||= effects
    return createGlobalTheme(themeOptions)
  }

  const [theme, setTheme] = React.useState(initTheme())
  const handleUpdateTheme = (options) => {
    let themeOptions = {}

    if (options) {
      themeOptions = localStorage.getItem('themeOptions')
      themeOptions = themeOptions ? (JSON.parse(themeOptions)) : { name: 'Hawaii', palette: palettes[0] }

      if (options.name) themeOptions.name = options.name
      if (options.palette) themeOptions.palette = options.palette
      if (options.mode) themeOptions.palette.mode = options.mode

      if (typeof options.stainedGlass === 'boolean') themeOptions.effects.stainedGlass = options.stainedGlass
      if (typeof options.threeD === 'boolean') themeOptions.effects.threeD = options.threeD
      if (typeof options.tooltips === 'boolean') themeOptions.effects.tooltips = options.tooltips
    }

    setTheme(createGlobalTheme(themeOptions))

    localStorage.setItem('themeOptions', JSON.stringify(themeOptions))
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <HeroImgContainer>
        <img src={themeHeroes[theme.name]} alt="Theme Hero" />
      </HeroImgContainer>

      <AppToolBar
        appConfig={appConfig}
        settingsDialogOpen={handleSettingsDialogOpen}
        sx={{ display: { xs: 'block', md: 'none' } }}
      />

      <SideNavContainer sx={{ display: { xs: 'none', md: 'block' } }}>
        <EfTooltip title="Settings">
          <span>
            <Fab
              onClick={handleSettingsDialogOpen}
              variant="stainedGlass"
              disabled={window.location.pathname === '/settings'}
            >
              <SettingsIcon />
            </Fab>
          </span>
        </EfTooltip>
        <AppSideNav appConfig={appConfig} />
      </SideNavContainer>
      <AppDialog close={() => handleSettingsDialogClose()} open={appSettingsDialogOpen} label="App" moreLink="/settings">
        <AppSettingsThemes updateTheme={(options) => handleUpdateTheme(options)} />
      </AppDialog>
      <BrowserRouter>
        <Box sx={{ width: '100%' }}>
          <AppRoutes updateTheme={(options) => handleUpdateTheme(options)} />
        </Box>
      </BrowserRouter>
      <AppFooter />
    </ThemeProvider>
  )
}

/*
Quality Checked XL display: Brian Francis - 01/05/2021
 */
