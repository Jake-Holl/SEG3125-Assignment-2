import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Pricing from './Pricing.jsx'
import Booking from './Booking.jsx'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { BrowserRouter, Routes, Route } from "react-router";
import * as React from 'react';


const theme = createTheme({
  palette: {
    primary: {
      main: '#000'
    },
    secondary: {
      main: '#fff'
    },
    tertiary: {
      main: '#F6F6F6'
    }
  },
  typography: {
    fontFamily: [
      'Instrument Serif'
    ],
    h1: {
      fontSize: '2.5rem', // Default (Mobile/xs)
      '@media (min-width:600px)': {
        fontSize: '4rem', // Tablet (sm)
      },
      '@media (min-width:960px)': {
        fontSize: '5rem', // Desktop (md and up)
      },
    },
    h2: {
      fontSize: '1.75rem', // Default (Mobile/xs)
      '@media (min-width:600px)': {
        fontSize: '2.75rem', // Tablet (sm)
      },
      '@media (min-width:960px)': {
        fontSize: '3.75rem', // Desktop (md and up)
      },
    }
  }
  
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/book' element={<Booking />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
