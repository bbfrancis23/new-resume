import {
  lightBlue, red, teal, brown, blueGrey, grey, green, lightGreen, deepPurple, indigo,
} from '@mui/material/colors'
import { alpha, createTheme } from '@mui/material/styles'

export const themeEffects = {
  stainedGlass: true,
  density: 'normal',
  threeD: true,
  tooltips: true,
}

export const palettes = [
  { name: 'Hawaii', primary: { main: teal[900] }, secondary: { main: lightBlue[400], light: lightBlue[50] } },
  { name: 'Midnight', primary: { main: deepPurple[800] }, secondary: { main: indigo[500], light: indigo[100] } },
  { name: 'Arizona', primary: { main: brown[400] }, secondary: { main: teal[300] } },
  { name: 'Pirate', primary: { main: grey[900] }, secondary: { main: red[900] } },
  { name: 'Lush', primary: { main: green[800] }, secondary: { main: lightGreen[300] } },
  { name: 'Corporate', primary: { main: blueGrey[500] }, secondary: { main: grey[400], light: grey[100] } },
]

export function createGlobalTheme(themeOptions) {
  let theme = createTheme(themeOptions)
  const { palette, effects } = theme
  const { mode, secondary } = palette
  const { threeD, stainedGlass } = effects

  const getEffectsCardBackground = () => {
    const color = mode === 'light' ? palette.grey['50'] : palette.grey['800']
    return stainedGlass ? alpha(color, 0.75) : color
  }

  const globalTheme = {
    contentItems: {
      width: {
        xs: '100%', md: '90%', lg: '70%', xl: '60%',
      },
    },
    components: {
      MuiTooltip: { defaultProps: { enterDelay: 1000 } },
      MuiCssBaseline: { styleOverrides: { body: { transition: 'all 0.375s linear' } } },
      MuiPaper: {
        variants: [
          {
            props: { variant: 'outlined' },
            style: { backgroundColor: mode === 'light' ? palette.grey['50'] : palette.grey['800'] },
          },
          {
            props: { variant: 'stainedGlass' },
            style: {
              backgroundColor: alpha(mode === 'light' ? palette.grey['50'] : palette.grey['800'], 0.75),
              backdropFilter: 'blur(10px)',
              boxShadow:
                '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
            },
          },
        ],
      },
      MuiCard: {
        variants: [{
          props: { variant: 'effects' },
          style: {
            backgroundColor: getEffectsCardBackground(),
            backdropFilter: stainedGlass ? 'blur(10px)' : 'none',
            boxShadow: threeD ? theme.shadows[5] : 'none',
            border: `1px solid ${palette.divider}`,
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
          props: { variant: 'effects' },
          style: {
            color: secondary.contrastText,
            backgroundColor: stainedGlass ? alpha(secondary.main, 0.25) : secondary.main,
            backdropFilter: stainedGlass ? 'blur(2px)' : 'none',
            transition: 'all 5s',
            ':hover': { background: alpha(secondary.main, 1.00), transition: '3s' },
          },
        }],
      },
    },
  }
  theme = createTheme(theme, globalTheme)

  return theme
}
export const hawaii = { name: 'Hawaii', palette: palettes[0] }
export const midnight = { name: 'Midnight', palette: palettes[1] }
export const arizona = { name: 'Arizona', palette: palettes[2] }
export const pirate = { name: 'Pirate', palette: palettes[3] }
export const lush = { name: 'Lush', palette: palettes[4] }
export const corporate = { name: 'Corporate', palette: palettes[5] }

export const appThemes = [hawaii, midnight, arizona, pirate, lush, corporate]

/*
Quality Checked: Brian Francis - 12/18/2021
 */
