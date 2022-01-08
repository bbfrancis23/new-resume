import * as React from 'react'
import PropTypes from 'prop-types'

import {
  AppBar, Box, Toolbar, Typography, styled, useTheme, IconButton,
} from '@mui/material'

import SettingsIcon from '@mui/icons-material/Settings'

import { appConfigPropType } from './AppConfig'
import EfTooltip from './ui/effects-components/EfTooltip'

const ToolbarContent = styled('div')(({ theme }) => (
  { width: '90vw', maxWidth: theme.breakpoints.values.lg, display: 'flex' }))

export default function AppToolBar(props) {
  const { appConfig, settingsDialogOpen } = props
  const theme = useTheme()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="primary" enableColorOnDark>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <ToolbarContent>
            {
              appConfig.pageItems.map((item) => (
                <a href={`#${item.id}`} style={{ textDecoration: 'none' }} key={item.id}>
                  <Box sx={{ display: { xs: 'none', sm: 'block' }, paddingRight: theme.spacing(1) }}>
                    <EfTooltip title={item.description} placement="right-end">
                      <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ lineHeight: 3, color: 'primary.contrastText' }}
                      >
                        {item.label}
                      </Typography>
                    </EfTooltip>
                  </Box>
                  <Box
                    sx={{ display: { xs: 'block', sm: 'none' }, lineHeight: 3, color: 'primary.contrastText' }}
                  >
                    <IconButton size="large" color="inherit">
                      {item.icon}
                    </IconButton>
                  </Box>

                </a>
              ))
            }
            <Box sx={{ flexGrow: 1 }} />
            <IconButton size="large" color="inherit" onClick={settingsDialogOpen}>
              <SettingsIcon />
            </IconButton>
          </ToolbarContent>
        </Toolbar>
      </AppBar>

    </Box>
  )
}

AppToolBar.propTypes = {
  appConfig: PropTypes.shape(appConfigPropType).isRequired,
  settingsDialogOpen: PropTypes.func.isRequired,
}

/*
Quality Checked: Brian Francis - 12/18/2021
 */
