import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  styled, ThemeProvider, CssBaseline, Box, Fab, Fade,
} from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import {
  AppFooter, AppRoutes, AppToolBar, AppSideNav, appConfig,
} from '.'
import {
  appThemes, createGlobalTheme, themeEffects as effects, palettes,
} from './theme/theme'
import AppSettingsThemes from './settings/AppSettingsThemes'
import { ToolTip, ImageCrossFader } from '../ui'
import { heroes } from '../content/imgs'
import DialogBox from '../ui/DialogBox'

const SideNavContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  right: theme.spacing(3),
  top: theme.spacing(3),
  zIndex: theme.zIndex.appBar,
}))

export default function App() {
  const [appSettingsDialogOpen, setAppSettingsDialogOpen] = useState(false)
  const handleSettingsDialogOpen = () => setAppSettingsDialogOpen(true)
  const handleSettingsDialogClose = () => setAppSettingsDialogOpen(false)

  console.log('App is has redeployed')

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
      themeOptions = themeOptions ? (JSON.parse(themeOptions)) : {
        name: 'Hawaii',
        palette: palettes[0],
        effects: {
          stainedGlass: true, density: 'normal', threeD: true, tooltips: true,
        },
      }

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
            <ToolTip title="Settings">
              <Fab onClick={handleSettingsDialogOpen} variant="effects" color="primary" fade="true"><SettingsIcon /></Fab>
            </ToolTip>
          </span>
        </Fade>
        <AppSideNav appConfig={appConfig} />
      </SideNavContainer>
      <DialogBox
        close={() => handleSettingsDialogClose()}
        open={appSettingsDialogOpen}
        label="App Settings"
        moreLink="/settings"
      >
        <AppSettingsThemes updateTheme={(options) => handleUpdateTheme(options)} />
      </DialogBox>
      <AppRoutes updateTheme={(options) => handleUpdateTheme(options)} />
      <AppFooter />
    </ThemeProvider>
  )
}

/*
Final R&D : Brian Francis - 01/14/2022
 */
