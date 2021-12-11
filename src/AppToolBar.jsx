import * as React from 'react'
import PropTypes from 'prop-types'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import SettingsIcon from '@mui/icons-material/Settings'
import Tooltip from '@mui/material/Tooltip'
import styled from '@mui/material/styles/styled'
import { useTheme } from '@mui/material/styles'

import { appConfigPropType } from './AppConfig'

const ToolbarContent = styled('div')(({ theme }) => (
  { width: '90vw', maxWidth: theme.breakpoints.values.lg, display: 'flex' }))

export default function AppToolBar(props) {
  const { appConfig, settingsDialogOpen } = props
  const theme = useTheme()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="primary">
        <Toolbar sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <ToolbarContent>
            {
              appConfig.pageItems.map((item) => (
                <a href={`#${item.id}`} style={{ textDecoration: 'none' }} key={item.id}>
                  <Box sx={{ display: { xs: 'none', sm: 'block' }, paddingRight: theme.spacing(1) }}>
                    <Tooltip title={item.description} placement="right-end">
                      <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ lineHeight: 3, color: theme.palette.primary.contrastText }}
                      >
                        {item.label}
                      </Typography>
                    </Tooltip>
                  </Box>
                  <Box
                    sx={{ display: { xs: 'block', sm: 'none' }, lineHeight: 3, color: theme.palette.primary.contrastText }}
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
Quality Checked: Brian Francis - 12/9/2021
 */
