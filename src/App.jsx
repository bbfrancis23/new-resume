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
import AppSettingsThemes from './content/settings-itmes/AppSettingsThemes'
import EfTooltip from './ui/EfTooltip'
import { appConfig } from './appConfig'
import { themeHeroes } from './content/imgs'
/* eslint-disable */
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
        {
          Object.keys(themeHeroes).map((key) => (
            <img
              key={key}
              src={themeHeroes[key]}
              alt={`${key} Hero`}
              style={{
                position: 'absolute',
                transition: 'opacity 1s ease-in-out',
                opacity: theme.name === key ? 1 : 0,
                filter: theme.name === key ? 'alpha(opacity=0)' : 'alpha(opacity=0)',
              }}
            />
          ))
        }
        <img src={themeHeroes[theme.name]} alt="Theme Hero" />
      </HeroImgContainer>
      <BrowserRouter>
        <AppToolBar
          appConfig={appConfig}
          settingsDialogOpen={handleSettingsDialogOpen}
          sx={{ display: { xs: 'block', md: 'none' } }}
        />
        <SideNavContainer sx={{ display: { xs: 'none', md: 'block' } }}>
          <EfTooltip title="Settings">
              <Fab
                onClick={handleSettingsDialogOpen}
                variant="stainedGlass"
                disabled={window.location.pathname === '/settings'}
              >
                <SettingsIcon />
              </Fab>
          </EfTooltip>
          <AppSideNav appConfig={appConfig} />
        </SideNavContainer>
        <AppDialog close={() => handleSettingsDialogClose()} open={appSettingsDialogOpen} label="App" moreLink="/settings">
          <AppSettingsThemes updateTheme={(options) => handleUpdateTheme(options)} />
        </AppDialog>
        <AppRoutes updateTheme={(options) => handleUpdateTheme(options)} />
      </BrowserRouter>
      <AppFooter />
    </ThemeProvider>
  )
}

/*
Final QA XL: Brian Francis - 01/13/2022
 */
