import { alpha, Box, styled } from '@mui/material'

export const drawerWidth = 225

export const Monogram = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  outline: `${theme.palette.primary.contrastText} solid 10px`,
  height: drawerWidth,
  width: drawerWidth,
  lineHeight: '300%',
  verticalAlign: 'middle',
  textAlign: 'center',
  fontSize: '75px',
  outlineOffset: '-40px',
}))

export const SideNavButton = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  position: 'fixed',
  top: theme.spacing(3),
  left: theme.spacing(3),
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.standard,
  }),
  ...(open && {
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.standard,
    }),
  }),
}))

export const DrawerContainer = styled(Box)(() => ({
  height: '100vh', width: drawerWidth,
}))

export const DrawerBackgroundLayer = styled(Box)(() => ({
  width: drawerWidth, position: 'absolute', height: '100%', overflow: 'hidden',
}))

export const MonogramSpacer = styled(Box)(() => ({
  height: drawerWidth,
}))

export const DrawerContentLayer = styled(Box)(() => ({
  width: drawerWidth, position: 'absolute', backgroundColor: alpha('#ffffff', 0.00), height: '100%',
}))

/*
Final R&D: Brian Francis - 01/19/2022
 */
