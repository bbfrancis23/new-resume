import React from 'react'
import PropTypes from 'prop-types'

import {
  AppBar,
  Avatar,
  Box, Button, Card, CardContent, CardHeader, Fab, Grid, IconButton, Stack, Toolbar, Typography, useTheme,
} from '@mui/material'
import {
  Help as HelpIcon, ArrowBackIosNew as BackIcon, Menu as MenuIcon, Settings as SettingsIcon, Info as InfoIcon,
} from '@mui/icons-material'
import AppSettings from './AppSettings'

import PageItem from './ui/PageItems'
import EfTooltip from './ui/effects-components/EfTooltip'
import AppSettingsPalettes from './content/settings-itmes/AppSettingsPalettes'

/* eslint-disable */

import { themePreviewBackgrounds, themeHeroes } from './content/imgs'

const themeText = {
  Arizona: <Typography variant={'span'} sx={{fontSize: '10px'}}>Well, I'm a standing on a corner in Winslow, Arizona
    And such a fine sight to see.
    It's a girl, my Lord, in a flatbed Ford.
    Slowin' down to take a look at me. Come on, baby, don't say maybe.
    I gotta know if your sweet love is gonna save me.
    We may lose, and we may win.
    Though we will never be here again.
    So open up, I'm climbin' in.
    So take it easy.</Typography>,
  Lush: `There is unrest in the forest.
Trouble with the trees.
For the maples want more sunlight.
And the oaks ignore their pleas.
The trouble with the maples.
(And they're quite convinced they're right)
They say the oaks are just too lofty.
And they grab up all the light.`,
  Corporate: `
  Have you heard that the world's gone crazy?
  There's people puttin' us down.
  I know they're sayin' that we've gone lazy.
  Don't need no fast buck lame duck profits for fun.
  Quick trick plans, take the money and run.
  We need long term, slow burn, getting it done.
  And some straight talking, hard working son of a gun.`,
  Pirate: `I set out to make my mark.
To forge a road despite the dark.
Though clouds of doubt have grayed the path.
I followed through and faced the wrath. My sword was cast in songs of light.
In sparks and waves, enchanted nights.
Crafting tales and magic spells.
Clever sounds in silent realms.`
}

export default function AppSettingsRoute(props) {
  const theme = useTheme()
  theme.name = theme.name ? theme.name : ''
  theme.effects = theme.effects ? theme.effects : ''
  const { updateTheme } = props

  return (
    <Box>

      <PageItem id="settings">
        <>
        <Grid container>
          <Grid item xs={4}>
            <AppSettings updateTheme={(options) => updateTheme(options)} />
          </Grid>
          <AppSettingsPalettes updateTheme={updateTheme} />
          <Grid item xs={4}>
            <Box>
              <EfTooltip
                title="Toggle Effects Off and On"
                placement="right"
                style={{ cursor: theme.effects.tooltips ? 'help' : 'default' }}
              >
                <span>Effects</span>
              </EfTooltip>
              <Box>
                <Stack direction="row" spacing={2} sx={{ p: 2 }}>
                  <Box>
                    <Typography>Stained Glass </Typography>
                    <Fab
                      color="secondary"
                      variant={theme.effects.stainedGlass ? 'stainedGlass' : ''}
                      onClick={() => updateTheme({ stainedGlass: !theme.effects.stainedGlass })}
                    />
                  </Box>
                  <Box>
                    <Typography>
                      Tooltips
                    </Typography>
                    <Fab
                      color="secondary"
                      variant={theme.effects.stainedGlass ? 'stainedGlass' : ''}
                      onClick={() => updateTheme({ tooltips: !theme.effects.tooltips })}
                    >
                      { theme.effects.tooltips && <HelpIcon size="large" />}
                    </Fab>
                  </Box>

                </Stack>
                <Fab
                  variant="stainedGlass"
                  sx={{
                    position: 'relative',
                    left: '16px',
                    bottom: '72px',
                    zIndex: -1,
                    backgroundImage:
                          `url(${themeHeroes[theme.name]})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                />
              </Box>

            </Box>
          </Grid>
          <Grid item xs={12} width="100%">
            <div
              style={{
                width: '50%',
                height: '400px',
                objectFit: 'contain',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                backgroundImage: 'url('+themePreviewBackgrounds[theme.name]+')',
                backgroundSize: 'cover'
              }}
            >
              <AppBar position="static" enableColorOnDark>
                <Toolbar>
                  <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Toolbar Title
                  </Typography>
                  <IconButton
                      size="large"
                      edge="end"
                      color="inherit"
                  >
                    <SettingsIcon />
                  </IconButton>
                </Toolbar>
              </AppBar>
              <br/>
            <Card sx={{maxWidth: '50%',  margin: 'auto', }} variant={theme.effects.stainedGlass ? 'stainedGlass' : 'none'}>
              <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: 'secondary.main', height: '35px', width: '35px'}} >
                      <InfoIcon />
                    </Avatar>
                  }

                  title={theme.name + ' theme'}
                  subheader={theme.palette.name + ' ' + theme.palette.mode + ' Palette'}
              />
              <CardContent>
                  { themeText[theme.name]}
              </CardContent>
            </Card>
            </div>
          </Grid>
        </Grid>
        <Button variant="contained" color="success" href="/" startIcon={<BackIcon />}>BACK</Button>
      </>
      </PageItem>

    </Box>
  )
}
AppSettingsRoute.propTypes = {
  updateTheme: PropTypes.func.isRequired,
}

/*
Quality Checked: Brian Francis - 01/05/2021
 */
