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
      MuiPaper: {
        variants: [{
          props: { variant: 'stainedGlass' },
          style: {
            backgroundColor: alpha(theme.palette.background.default, 0.75),
            backdropFilter: 'blur(10px)',
            boxShadow:
                '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
          },
        }],
      },
      MuiChip: {
        variants: [{
          props: { variant: 'skill' },
          style: { margin: `0 0 ${theme.spacing(1)} ${theme.spacing(1)}`, height: '20px' },
        }],
      },
      MuiFab: {
        variants: [{
          props: { variant: 'stainedGlass' },
          style: {
            color: theme.palette.secondary.contrastText,
            backgroundColor: alpha(theme.palette.secondary.main, 0.25),
            backdropFilter: 'blur(2px)',
            transition: '5s',
            ':hover': { background: alpha(theme.palette.secondary.main, 1.00), transition: '3s' },
          },
        }],
      },
    },
    effects: {
      stainedGlass: true,
      density: 'normal',
      toolTips: true,
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

/*
Quality Checked: Brian Francis - 12/18/2021
 */
