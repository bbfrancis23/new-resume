import React from 'react'
import PropTypes from 'prop-types'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import { styled, useTheme } from '@mui/material/styles'
import Drawer from '@mui/material/Drawer'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import Tooltip from '@mui/material/Tooltip'
import Fab from '@mui/material/Fab'
import { appConfigPropType } from './AppConfig'

const drawerWidth = 225

const Monogram = styled('div')(({ theme }) => ({
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

const SideNavButton = styled('div', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
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

export default function AppSideNav(props) {
  const theme = useTheme()

  const [open, setOpen] = React.useState(false)
  const handleToggleSideNav = () => { setOpen((!open)) }

  const { appConfig } = props

  return (
    <div>
      <SideNavButton open={open}>
        <Tooltip title="Menu">
          <Fab onClick={handleToggleSideNav} size="large" variant="stainedGlass">
            {open ? <CloseIcon /> : <MenuIcon />}
          </Fab>
        </Tooltip>
      </SideNavButton>
      <Drawer variant="persistent" open={open} transitionDuration={theme.transitions.duration.standard}>
        <div><Monogram>BF</Monogram></div>
        <List>
          {
            appConfig.pageItems.map((item) => (
              <a href={`#${item.id}`} style={{ textDecoration: 'none' }} key={item.id}>
                <ListItem>
                  <Tooltip title={item.description} placement="right-end">
                    <ListItemAvatar>
                      <Avatar>
                        {item.icon}
                      </Avatar>
                    </ListItemAvatar>
                  </Tooltip>
                  <ListItemText primary={item.label} />
                </ListItem>
              </a>
            ))
          }
        </List>
      </Drawer>
    </div>
  )
}
AppSideNav.propTypes = { appConfig: PropTypes.shape(appConfigPropType).isRequired }

/*
Quality Checked: Brian Francis - 12/9/2021
 */
