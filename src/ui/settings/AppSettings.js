import {IconButton, ListItem, Tooltip} from "@mui/material"
import {themes} from "../../Themes"
import NightsStayIcon from "@mui/icons-material/NightsStay"
import WbSunnyIcon from "@mui/icons-material/WbSunny"
import React from "react"
import {useTheme} from "@mui/material/styles"
import List from "@mui/material/List"
import Fab from "@mui/material/Fab";

export default function AppSettings(props){

  const theme = useTheme()

  return (
    <div>
      <Tooltip title="Select two times to toggle between light and dark modes." placement="right" >
        <span>Select Theme</span>
      </Tooltip>
      <List sx={{display: 'flex'}}>
        {
          themes.map((t) =>{
            return (
              <ListItem>
                <Tooltip
                    title={
                      t.name === props.theme.name ?
                        (t.palette.mode === 'light' ? `${t.name} dark mode` : `${t.name} light mode`)  :
                        t.name
                    }
                    enterDelay={1000}>
                  <Fab
                      onClick={() => props.updateTheme(t.name, 'dark')}
                      sx={{':hover':{  opacity: '0.75' }}}
                      style={{

                        color: theme.palette.primary.contrastText,
                        background:
                          `linear-gradient(
                            -45deg, 
                            ${t.palette.primary.main} 35%, 
                            ${t.palette.secondary.main} 100%)`,

                      }}>
                    {
                      t.palette.mode === 'light' ?
                        <NightsStayIcon  style={{visibility: t.name === props.theme.name ? 'visible' : 'hidden'}}/> :
                        <WbSunnyIcon style={{visibility: t.name === props.theme.name ? 'visible' : 'hidden'}}/>
                    }
                  </Fab>
                </Tooltip>
              </ListItem>
            )
          })
        }
      </List>
    </div>
  )
}
