import React from 'react'
import PropTypes from 'prop-types'

import {
  List, ListItemText, useTheme, Drawer, Fab, Box, ListItemIcon, ListItemButton,
} from '@mui/material'
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material'
import { HashLink } from 'react-router-hash-link'
import { appConfigPropType } from '../appConfig'

import EfTooltip from '../../ui/EfTooltip'
import ImageCrossFader from '../../ui/ImageCrossFader'

import { themeSidebarBackgrounds } from '../../content/imgs'

import {
  SideNavButton, Monogram, DrawerBackgroundLayer, MonogramSpacer, DrawerContentLayer, DrawerContainer,
} from './AppSideNavUI'

export default function AppSideNav(props) {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const handleToggleSideNav = () => { setOpen((!open)) }
  const { appConfig } = props

  return (
    <Box>
      <SideNavButton open={open}>
        <EfTooltip title="Menu">
          <Fab onClick={handleToggleSideNav} variant="effects">
            {open ? <CloseIcon /> : <MenuIcon />}
          </Fab>
        </EfTooltip>
      </SideNavButton>
      <Drawer
        variant="persistent"
        open={open}
        transitionDuration={theme.transitions.duration.standard}

      >
        <DrawerContainer>
          <DrawerBackgroundLayer>
            <MonogramSpacer />
            <ImageCrossFader
              imgs={themeSidebarBackgrounds}
              selectedId={theme.name}
            />
          </DrawerBackgroundLayer>
          <DrawerContentLayer>
            <Monogram>BF</Monogram>
            <List sx={{ margin: '8px 16px 0 16px' }}>
              {
                appConfig.pageItems.map((item) => (
                  <EfTooltip title={item.description} placement="right" key={item.id}>
                    <ListItemButton
                      variant="effects"
                      component={HashLink}
                      smooth
                      to={`/#${item.id}`}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  </EfTooltip>
                ))
              }
            </List>
          </DrawerContentLayer>
        </DrawerContainer>
      </Drawer>
    </Box>
  )
}
AppSideNav.propTypes = { appConfig: PropTypes.shape(appConfigPropType).isRequired }

/*
Final R&D: Brian Francis - 01/19/2022
 */
