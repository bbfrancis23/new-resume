import React from 'react'
import {createTheme, styled, ThemeProvider} from '@mui/material/styles'
import CssBaseline from "@mui/material/CssBaseline"

import {themes, themeComponents} from "./Themes"
import SettingsIcon from '@mui/icons-material/Settings'

import MidnightHero from "./img/heroes/midnight.jpg"
import HawaiiHero from "./img/heroes/hawaii.jpg"
import ArizonaHero from "./img/heroes/arizona.jpg"
import LushHero from "./img/heroes/lush.jpg"
import PirateHero from "./img/heroes/pirate.jpg"
import corporateHero from "./img/heroes/corp.jpg"

import AppSideNav from './ui/AppSideNav'
import SettingsDialog from "./ui/dialogs/SettingsDialog"
import AppSettings from "./ui/settings/AppSettings";
import StainedGlassButton from "./ui/buttons/StainedGlassButton";

const themeHeroes = {
  'Corporate': corporateHero,
  'Midnight': MidnightHero,
  'Hawaii': HawaiiHero,
  'Arizona': ArizonaHero,
  'Pirate': PirateHero,
  'Lush': LushHero,
}

const HeroContainer = styled('div')(() => ({ position: 'fixed', zIndex: -1, width: '100%', height: '370px'}))

export default function App(){

  const [appSettingsDialogOpen, setAppSettingsDialogOpen] = React.useState(false)
  const handleSettingsDialogOpen = () => setAppSettingsDialogOpen(true)
  const handleSettingsDialogClose = () => setAppSettingsDialogOpen(false)

  const initTheme = () => {
    let themeOptions = themes[0]

    const themeName = localStorage.getItem('themeName')
    const themeMode = localStorage.getItem('themeMode')

    if(themeName) themeOptions = initThemeOptions(themes.find( t => t.name === themeName))
    if(themeMode) themeOptions.palette.mode = themeMode

    return createTheme(themeOptions)
  }

  const initThemeOptions = (themeOptions ) =>{
    themeOptions.components = themeComponents
    return themeOptions
  }

  const [theme, setTheme] = React.useState(initTheme())

  const handleUpdateTheme = (themeName) => {

    let themeOptions = initThemeOptions(themes.find( t => t.name === themeName))

    if(themeOptions.name ===  theme['name']) {
      const themeMode = themeOptions.palette.mode === 'light' ? 'dark' : 'light'
      themeOptions.palette.mode = themeMode
      localStorage.setItem('themeMode', themeMode)
    }

    setTheme( createTheme(themeOptions));
    localStorage.setItem('themeName', themeName);
  }

  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <HeroContainer>
        <img src={themeHeroes[ theme['name'] ]} alt="Theme Hero"/>
      </HeroContainer>
      <StainedGlassButton  tooltip="Settings" onClick={handleSettingsDialogOpen} style={{ position: 'fixed', right:theme.spacing(3), top: theme.spacing(3)}} >
        <SettingsIcon size={"large"}/>
      </StainedGlassButton>
      <AppSideNav/>
      <SettingsDialog close={() => handleSettingsDialogClose() } open={ appSettingsDialogOpen }>
        <AppSettings updateTheme={(themeName) =>handleUpdateTheme(themeName)} theme={theme}/>
      </SettingsDialog>
    </ThemeProvider>
  )
}
