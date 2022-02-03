import {
  lightBlue, red, teal, brown, blueGrey, grey, green, lightGreen, deepPurple, indigo,
} from '@mui/material/colors'
import { alpha, createTheme } from '@mui/material/styles'
import MuiFabVariants from './variants/MuiFab'

export const themeEffects = {
  stainedGlass: true, density: 'normal', threeD: true, tooltips: true,
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
  const { mode } = palette
  const { threeD, stainedGlass } = effects

  const getEffectsCardBackground = (alphaValue = 0.75) => {
    const color = mode === 'light' ? palette.grey['50'] : palette.grey['800']
    return stainedGlass ? alpha(color, alphaValue) : color
  }

  const globalTheme = {
    contentItems: {
      width: {
        xs: '1200px',
      },
    },
    components: {
      MuiTooltip: { defaultProps: { enterDelay: 1000 } },
      MuiCssBaseline: { styleOverrides: { body: { transition: 'all 0.375s linear' } } },
      MuiListItemButton: {
        variants: [{
          props: { variant: 'effects' },
          style: {
            backgroundColor: getEffectsCardBackground(0.65),
            backdropFilter: stainedGlass ? 'blur(5px)' : 'none',
            boxShadow: threeD ? theme.shadows[5] : 'none',
            border: `1px solid ${palette.divider}`,
            ':hover': {
              backgroundColor: stainedGlass ? getEffectsCardBackground(0.50) : alpha(getEffectsCardBackground(), 0.96),
            },
          },
        }],
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
        variants: MuiFabVariants(theme),
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
Final R&D: Brian Francis - 01/27/2022
 */
