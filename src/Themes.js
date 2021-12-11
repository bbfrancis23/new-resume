import {
  lightBlue, red, teal, brown, blueGrey, grey, green, lightGreen, deepPurple, indigo,
} from '@mui/material/colors'
import { alpha, createTheme } from '@mui/material/styles'

export function createGlobalTheme(themeOptions) {
  let theme = createTheme(themeOptions)

  const globalTheme = {
    components: {
      MuiTooltip: { defaultProps: { enterDelay: 1000 } },
      MuiCssBaseline: { styleOverrides: { body: { transition: 'all 0.375s linear' } } },
      Timeline: { backgroundColor: '#FF0000', color: '#FF0000' },
      MuiFab: {
        variants: [
          {
            props: { variant: 'stainedGlass' },
            style: {
              color: theme.palette.secondary.contrastText,
              backgroundColor: alpha(theme.palette.secondary.main, 0.25),
              backdropFilter: 'blur(2px)',
              ':hover': { background: alpha(theme.palette.secondary.main, 0.50) },
            },
          },
        ],
      },
    },
  }

  theme = createTheme(theme, globalTheme)
  return theme
}

export const midnight = {
  name: 'Midnight',
  palette: {
    primary: { main: deepPurple[800] },
    secondary: { main: indigo[500], light: indigo[100] },
  },
}

export const hawaii = {
  name: 'Hawaii',
  palette: {
    primary: { main: teal[900] },
    secondary: { main: lightBlue[400], light: lightBlue[50] },
  },
}

export const arizona = {
  name: 'Arizona',
  palette: {
    primary: { main: brown[400] },
    secondary: { main: teal[300] },
  },
}

export const pirate = {
  name: 'Pirate',
  palette: {
    primary: { main: grey[900] },
    secondary: { main: red[900] },
  },
}

export const lush = {
  name: 'Lush',
  palette: {
    primary: { main: green[800] },
    secondary: { main: lightGreen[300] },
  },
}

export const corporate = {
  name: 'Corporate',
  palette: {
    primary: { main: blueGrey[500] },
    secondary: { main: grey[400], light: grey[100] },
  },
}

export const themes = [midnight, hawaii, arizona, pirate, lush, corporate]
