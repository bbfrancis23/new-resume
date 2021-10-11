
import {lightBlue, red, teal, yellow, brown, blueGrey, grey, green, lightGreen} from '@mui/material/colors';

export const cobraKai = {
  name: 'Cobra Kai',
  palette: {
    type: "light",
    primary: { main: yellow[600] },
    secondary: { main: red[900] },
  },
};

export const  hawaii ={
  name: 'Hawaii',
  palette: {
    type: "light",
    primary: { main: lightBlue[400] },
    secondary: { main: teal[900] },
  },
}

export const  arizona = {
  name: 'Arizona',
  palette: {
    type: "light",
    primary: { main: brown[400] },
    secondary: { main: teal[300] },
  },
}

export const  pirate = {
  name: 'Pirate',
  palette: {
    type: "light",
    primary: { main: grey[900] },
    secondary: { main: red[900] },
  },
}

export const  lush ={
  name: 'Lush',
  palette: {
    type: "light",
    primary: { main: green[800] },
    secondary: { main: lightGreen[300] },
  },
};

export const  corporate = {
  name: 'Corporate',
  palette: {
    type: "light",
    primary: { main: blueGrey[500] },
    secondary: { main: grey[400] },
  },
}

export const themes = [ cobraKai, hawaii, arizona, pirate, lush, corporate]
