import React from 'react'
import PropTypes from 'prop-types'
import { Link, Route, Routes } from 'react-router-dom'
import {
  Box, Button, Card, CardActions, CardContent, CardHeader, Grid, useTheme,
} from '@mui/material'
import { ArrowBackIosNew as BackIcon } from '@mui/icons-material'
import { appConfig } from './appConfig'
import AppSettingsThemes from './settings/AppSettingsThemes'
import AppSettingsPalettes from './settings/AppSettingsPalettes'
import AppSettingsEffects from './settings/AppSettingsEffects'
import AppSettingsPreview from './settings/AppSettingsPreview'

function AppRoute() { return (<>{ appConfig.pageItems.map((item) => item.pageComponent) }</>) }

export function AppRoutes(props) {
  const { updateTheme } = props
  return (
    <Routes>
      <Route path="/" element={<AppRoute />} />
      <Route
        path="settings"
        element={<AppSettingsRoute updateTheme={(options) => updateTheme(options)} />}
      />
      <Route path="*" element={<AppRoute />} />
    </Routes>
  )
}
AppRoutes.propTypes = {
  updateTheme: PropTypes.func.isRequired,
}

export function AppSettingsRoute(props) {
  const theme = useTheme()
  const { updateTheme } = props

  return (
    <Box sx={{ pt: 1 }}>
      <Card
        sx={{
          m: 'auto',
          mt: 10,
          mb: 10,
          p: 2,
          width: theme.contentItems.width,
        }}
        variant="effects"
      >
        <CardHeader title="Application Settings" />
        <CardContent>
          <Grid container>
            <Grid item xs={4}><AppSettingsThemes updateTheme={(options) => updateTheme(options)} /></Grid>
            <Grid item xs={4}><AppSettingsPalettes updateTheme={updateTheme} /></Grid>
            <Grid item xs={4}><AppSettingsEffects updateTheme={updateTheme} /></Grid>
            <Grid item xs={12} width="100%"><AppSettingsPreview /></Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="success" component={Link} to="/" startIcon={<BackIcon />}>BACK</Button>
        </CardActions>
      </Card>
    </Box>
  )
}
AppSettingsRoute.propTypes = {
  updateTheme: PropTypes.func.isRequired,
}
/*
Final QA: Brian Francis - 01/14/2022
 */
