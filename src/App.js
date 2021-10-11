import React from 'react'
import {Grid} from "@mui/material";
import Header from "./ui/Header"

// import {themes} from "./Themes"

class App extends React.Component{

  initTheme(){
  }

  render() {
    return (
        <Grid container>
          <Grid item xs={12}>
            <Header  />
          </Grid>
          {/*<Grid item xs={12} style={{background: this.state.theme.palette.background.default, height: '100vh', width: '100vw', marginTop: '70px'}}>*/}
          {/*  <ItemForm></ItemForm>*/}

          {/*</Grid>*/}
        </Grid>
    )
  }
}

export default App;
