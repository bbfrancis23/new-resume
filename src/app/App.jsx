import React from 'react'
import { useLocation } from 'react-router-dom'

import {
  styled, ThemeProvider, CssBaseline, Box, Fab, Fade,
} from '@mui/material'

import SettingsIcon from '@mui/icons-material/Settings'

import {
  appThemes, createGlobalTheme, themeEffects as effects, palettes,
} from './AppThemes'

import AppSideNav from './sidenav/AppSideNav'
import AppToolBar from './AppToolBar'
import AppDialog from './AppDialog'
import AppFooter from './AppFooter'
import AppRoutes from './router/AppRoutes'
import AppSettingsThemes from '../content/settings-itmes/AppSettingsThemes'
import EfTooltip from '../ui/EfTooltip'
import { appConfig } from './appConfig'
import { heroes } from '../content/imgs'
import ImageCrossFader from '../ui/ImageCrossFader'

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
      <ImageCrossFader
        imgs={heroes}
        selectedId={theme.name}
        sx={{
          position: 'fixed', width: '100%', height: '370px', zIndex: -1,
        }}
      />
      <AppToolBar
        appConfig={appConfig}
        settingsDialogOpen={handleSettingsDialogOpen}
        sx={{ display: { xs: 'block', md: 'none' } }}
      />
      <SideNavContainer sx={{ display: { xs: 'none', md: 'block' } }}>
        <Fade in={useLocation().pathname !== '/settings'} timeout={1000}>
          <span>
            <EfTooltip title="Settings">
              <Fab onClick={handleSettingsDialogOpen} variant="effects"><SettingsIcon /></Fab>
            </EfTooltip>
          </span>
        </Fade>
        <AppSideNav appConfig={appConfig} />
      </SideNavContainer>
      <AppDialog close={() => handleSettingsDialogClose()} open={appSettingsDialogOpen} label="App" moreLink="/settings">
        <AppSettingsThemes updateTheme={(options) => handleUpdateTheme(options)} />
      </AppDialog>
      <AppRoutes updateTheme={(options) => handleUpdateTheme(options)} />
      <AppFooter />
    </ThemeProvider>
  )
}
/*
Final QA : Brian Francis - 01/14/2022
 */
