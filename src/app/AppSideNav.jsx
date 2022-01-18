import React from 'react'
import PropTypes from 'prop-types'

/* eslint-disable */
import {
  List, ListItem, ListItemText, ListItemAvatar, Avatar, styled, useTheme, Drawer, Fab, Box,
} from '@mui/material'

import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material'

import { appConfigPropType } from './appConfig'
import EfTooltip from '../ui/EfTooltip'
import {themeSidebarBackgrounds} from "../content/imgs";
import {alpha} from "@mui/material/styles";
import ImageCrossFader from "../ui/ImageCrossFader";

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
  theme.effects ||= ''

  const [open, setOpen] = React.useState(false)
  const handleToggleSideNav = () => { setOpen((!open)) }

  const { appConfig } = props

  return (
    <div>
      <SideNavButton open={open}>
        <EfTooltip title="Menu">
          <Fab
            onClick={handleToggleSideNav}
            size="large"
            color="secondary"
            variant="effects"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </Fab>
        </EfTooltip>
      </SideNavButton>
      <Drawer
        variant="persistent"
        open={open}
        transitionDuration={theme.transitions.duration.standard}
      >
        <Box sx={{
            height: '100vh', width: drawerWidth,
        }}
        >
            <Box sx={{ width: drawerWidth, position: 'absolute',  height: '100%', overflow: 'hidden'}}>
              <div style={{height: drawerWidth}} />
              <ImageCrossFader
                  imgs={themeSidebarBackgrounds}
                  selectedId={theme.name}
              />
            </Box>




          <Box sx={{ width: drawerWidth, position: 'absolute', backgroundColor: alpha('#ffffff', 0.00), height: '100%', }} >
              <div><Monogram>BF</Monogram></div>
              <List>
                {
                  appConfig.pageItems.map((item) => (
                    <a href={`/#${item.id}`} style={{ textDecoration: 'none' }} key={item.id}>
                      <ListItem>
                        <EfTooltip title={item.description} placement="right-end">
                          <ListItemAvatar>
                            <Avatar>
                              {item.icon}
                            </Avatar>
                          </ListItemAvatar>
                        </EfTooltip>
                        <ListItemText primary={item.label} />
                      </ListItem>
                    </a>
                  ))
                }
              </List>
          </Box>
        </Box>


      </Drawer>
    </div>
  )
}
AppSideNav.propTypes = { appConfig: PropTypes.shape(appConfigPropType).isRequired }

/*
Final QA: Brian Francis - 01/14/2022
 */
