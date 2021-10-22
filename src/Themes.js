
import {lightBlue, red, teal, brown, blueGrey, grey, green, lightGreen, deepPurple, indigo} from '@mui/material/colors';

export const themeComponents = {
  MuiTooltip:{
    defaultProps:{
      enterDelay: 1000
    }
  }
}

export const midnight ={
  name: 'Midnight',
  palette:{
    primary: {main: deepPurple[800]},
    secondary: { main: indigo[500] },
  }
}

export const  hawaii ={
  name: 'Hawaii',
  palette: {
    primary: { main: teal[900]  },
    secondary: { main: lightBlue[400] },
  },
}

export const  arizona = {
  name: 'Arizona',
  palette: {
    primary: { main: brown[400] },
    secondary: { main: teal[300] },
  },
}

export const  pirate = {
  name: 'Pirate',
  palette: {
    primary: { main: grey[900] },
    secondary: { main: red[900] },
  },
}

export const  lush ={
  name: 'Lush',
  palette: {
    primary: { main: green[800] },
    secondary: { main: lightGreen[300] },
  },
};

export const  corporate = {
  name: 'Corporate',
  palette: {
    primary: { main: blueGrey[500] },
    secondary: { main: grey[400] },
  },
}

export const themes = [ midnight, hawaii, arizona, pirate, lush, corporate]
