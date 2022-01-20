import React from 'react'

import {
  AppBar, Avatar, Box, Card, CardContent, CardHeader, IconButton, Toolbar, Typography, useTheme,
} from '@mui/material'
import { Info as InfoIcon, Menu as MenuIcon, Settings as SettingsIcon } from '@mui/icons-material'

import { themePreviewBackgrounds } from '../../content/imgs'
import { themeText } from './themeText'

export default function AppSettingsPreview() {
  const theme = useTheme()

  return (
    <Box
      style={{
        width: '50%',
        height: '400px',
        objectFit: 'contain',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundImage: `url(${themePreviewBackgrounds[theme.name]})`,
        backgroundSize: 'cover',
      }}
    >
      <AppBar position="static" enableColorOnDark>
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Application
          </Typography>
          <IconButton
            size="small"
            edge="end"
            color="inherit"
          >
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <br />
      <Card sx={{ maxWidth: '50%', margin: 'auto' }} variant={theme.effects.stainedGlass ? 'stainedGlass' : undefined}>
        <CardHeader
          avatar={(
            <Avatar sx={{
              bgcolor: 'secondary.main', height: '35px', width: '35px', boxShadow: theme.shadows[10],
            }}
            >
              <InfoIcon size="small" sx={{ fontSize: theme.typography.h6 }} />
            </Avatar>
              )}
          title={`${theme.name} theme`}
          subheader={`${theme.palette.name} ${theme.palette.mode} Palette`}
        />
        <CardContent>
          { themeText[theme.name]}
        </CardContent>
      </Card>
    </Box>
  )
}

/*
Quality Checked: Brian Francis - 01/09/2021
 */
