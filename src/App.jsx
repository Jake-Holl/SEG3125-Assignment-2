import { useState } from 'react'
import { Typography, Box } from '@mui/material'
import Stack from '@mui/system/Stack'
import Button from '@mui/material/Button'
import * as React from 'react';
import { NavLink, Link } from "react-router";
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


function App() {

  return (
    <>
    <Navbar />
      <Stack sx={{p: {md: 2, lg: 5}}} direction={{xs: 'column-reverse', md: 'column-reverse', lg: 'row'}} spacing={{md: 1, lg:10}}>
        <Box sx={{maxWidth: {md: 1, lg: 0.3}, p: 4}}>
          <Typography sx={{pb: 3}} variant="h3">Good Hair is the first thing people notice</Typography>
          <Typography sx={{pb: 7}} variant="h5">Let our experts help you make a good first impression. Every one of our barbers has at least 10 years of experience in the field, and they are here to make your experience as pleasant as possible.</Typography>
          <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Button component={NavLink} to="/book" size='large' variant='contained' color='primary' sx={{typography: 'h5'}}>Book with an Expert</Button>
          </Box>
        </Box>
        <Box sx={{maxWidth: {md: 1, lg: 0.6}, boxShadow: 4}}component='img' src='/img1.jpg' />
      </Stack>
      <Box sx={{pb:5}} bgcolor='tertiary.main'>
        <Typography sx={{display: 'flex', justifyContent: 'center', py: 5}} variant="h3">Our Experts</Typography>
        <Stack sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} direction={{xs: 'column', md: 'column', lg: 'row'}} spacing={18}>
            <Card sx={{width: 332, boxShadow: 4}}>
                <CardMedia sx={{height: 205, width: 332}}image='/card1.jpg'/>
                <CardContent sx={{height: 274}}>
                    <Typography sx={{pb: 4}} align='center' variant='h4'>Amal</Typography>
                    <Typography align='center' variant='h5'>Amal is a master barber and the owner of The Shop. He has been cutting hair for most of his life.</Typography>
                </CardContent>
            </Card>
            <Card sx={{width: 332, boxShadow: 4}}>
                <CardMedia sx={{height: 205, width: 332}}image='/card2.jpg'/>
                <CardContent sx={{height: 274}}>
                    <Typography sx={{pb: 4}} align='center' variant='h4'>Hamza</Typography>
                    <Typography align='center' variant='h5'>Hamza is one of the most experienced barbers in Ottawa, he understands how important a good hair cut is and does anything he can to leave a client satisfied.</Typography>
                </CardContent>
            </Card>
        </Stack>
      </Box>
      <Footer />
    </>
  )
}

export default App
