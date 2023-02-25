
import {useState} from 'react'

// MUI
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import { AppBar, Toolbar, Button, Typography, IconButton, CssBaseline } from '@mui/material';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Home from './Home';

let lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0C1C5C',
      contrastText: '#ffffff'
    },
    background: {
      default: "#fffff"
    }
  },
})

let darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: "#808080"
    }
  },

})


function App() {

  const [lightMode, setLightMode] = useState(true)

  return (
    <ThemeProvider theme={lightMode ? lightTheme: darkTheme}>
      <CssBaseline/>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            SKETCHIFY
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setLightMode(!lightMode)}
          >
            {
              !lightMode ? (
                <LightModeIcon/>
              ): (
                <DarkModeIcon/>
              )
            }
          </IconButton>
        </Toolbar>
      </AppBar>
      <Home/>
    </ThemeProvider>

  );
}

export default App;
