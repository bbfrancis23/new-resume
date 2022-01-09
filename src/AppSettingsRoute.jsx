import React from 'react'
import PropTypes from 'prop-types'

import {
  Box, Button, Card, CardActions, CardContent, CardHeader, Grid,
  useTheme,
} from '@mui/material'
import {
  ArrowBackIosNew as BackIcon,
} from '@mui/icons-material'

import AppSettingsThemes from './content/settings-itmes/AppSettingsThemes'
import AppSettingsPalettes from './content/settings-itmes/AppSettingsPalettes'
import AppSettingsEffects from './content/settings-itmes/AppSettingsEffects'
import AppSettingsPreview from './content/settings-itmes/AppSettingsPreview'

export default function AppSettingsRoute(props) {
  const theme = useTheme()
  theme.name = theme.name ? theme.name : ''
  theme.effects = theme.effects ? theme.effects : ''
  const { updateTheme } = props

  return (
    <Box sx={{ pt: 1 }}>
      <Card
        sx={{
          m: 'auto',
          mt: 10,
          mb: 10,
          p: 2,
          width: {
            xs: '100%', md: '90%', lg: '70%', xl: '60%',
          },
        }}
        variant={theme.effects.stainedGlass ? 'stainedGlass' : undefined}
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
          <Button variant="contained" color="success" href="/" startIcon={<BackIcon />}>BACK</Button>
        </CardActions>
      </Card>
    </Box>
  )
}
AppSettingsRoute.propTypes = {
  updateTheme: PropTypes.func.isRequired,
}

/*
Quality Checked: Brian Francis - 01/09/2021
 */
