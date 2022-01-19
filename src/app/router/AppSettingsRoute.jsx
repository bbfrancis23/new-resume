import React from 'react'
import PropTypes from 'prop-types'

import {
  Box, Button, Card, CardActions, CardContent, CardHeader, Grid,
  useTheme,
} from '@mui/material'
import {
  ArrowBackIosNew as BackIcon,
} from '@mui/icons-material'

import { Link } from 'react-router-dom'
import AppSettingsThemes from '../../content/settings-itmes/AppSettingsThemes'
import AppSettingsPalettes from '../../content/settings-itmes/AppSettingsPalettes'
import AppSettingsEffects from '../../content/settings-itmes/AppSettingsEffects'
import AppSettingsPreview from '../../content/settings-itmes/AppSettingsPreview'

export default function AppSettingsRoute(props) {
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
