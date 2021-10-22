import * as React from 'react';

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from '@mui/icons-material/Search';
import AccountIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';

import styled from '@mui/material/styles/styled';

import SettingsDialog from "./dialogs/settings/AppSettingsDialog";
const ToolbarContent = styled('div')(({ theme}) => (
    { width: '90vw', maxWidth: theme.breakpoints.values.lg, display: 'flex' })
);

export default function Header(props){

  const [appSettingsDialogOpen, setAppSettingsDialogOpen] = React.useState(false)
  const handleSettingsDialogOpen = () => setAppSettingsDialogOpen(true)
  const handleSettingsDialogClose = () => setAppSettingsDialogOpen(false)

  return(
    <Box sx={{ flexGrow: 1}}>
      <AppBar position={'fixed'} color={"primary"} >
        <Toolbar sx={{  display: 'flex', justifyContent: 'center', width: '100%'}}>
          <ToolbarContent>
            <Typography variant="h6" noWrap component="div" sx={{lineHeight: 3}} >
              Standards & Strategies
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton size="large"  color="inherit" >
              <SearchIcon />
            </IconButton>
            <IconButton size="large" color="inherit" >
              <AccountIcon />
            </IconButton>
            <IconButton size="large"  color="inherit" onClick={handleSettingsDialogOpen}>
              <SettingsIcon />
            </IconButton>
          </ToolbarContent>
        </Toolbar>
      </AppBar>
      <SettingsDialog close={() =>handleSettingsDialogClose()} open={appSettingsDialogOpen} updateTheme={props.updateTheme} theme={props.theme}/>
    </Box>
  )
}
