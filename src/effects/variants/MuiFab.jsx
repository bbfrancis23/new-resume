import { alpha } from '@mui/material/styles'

export default function MuiFabVariants(theme) {
  const { palette, effects } = theme
  const { secondary, primary } = palette
  const { threeD, stainedGlass } = effects

  const getStyle = (color = palette.grey['300'], fade = false) => ({
    color: palette.getContrastText(color),
    backgroundColor: stainedGlass ? alpha(color, 0.25) : color,
    backdropFilter: stainedGlass ? 'blur(2px)' : 'none',
    transition: fade ? 'all 3s' : 'all 1s',
    boxShadow: threeD ? theme.shadows[5] : 'none',
  })

  return [
    {
      props: { color: '' },
      style: {
        backgroundColor: stainedGlass ? palette.grey['400'] : palette.grey['300'],
      },
    },
    {
      props: { variant: 'effects' },
      style: getStyle(),
    },
    {
      props: { variant: 'effects', fade: true },
      style: getStyle(palette.grey['300'], true),
    },
    {
      props: { variant: 'effects', color: 'primary' },
      style: getStyle(primary.main),
    },
    {
      props: { variant: 'effects', color: 'primary', fade: true },
      style: getStyle(primary.main, true),
    },
    {
      props: { variant: 'effects', color: 'secondary' },
      style: getStyle(secondary.main),
    },
    {
      props: { variant: 'effects', color: 'secondary', fade: true },
      style: getStyle(secondary.main, true),
    },
  ]
}
