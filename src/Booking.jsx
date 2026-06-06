import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Stack from '@mui/system/Stack'
import { Box, Select, InputLabel, FormControl, MenuItem, TextField, Button, Typography, Alert } from '@mui/material'
import * as React from 'react';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

function Booking() {

    const [showAlert, setShowAlert] = React.useState(false)

    const [type, setType] = React.useState('')

    const handleTypeChange = (event) => {
        setType(event.target.value)
    }

    const [barber, setBarber] = React.useState(1)

    const handleBarberChance = (event) => {
        setBarber(event.target.value)
    }

    const isClosedDay = (date) => {
        const day = date.day()

        return day === 1 || day === 2
    }

    const isClosedTime = (value, view) => view==='hours' && (value.hour() > 19 || value.hour() < 11)

    const defaultDateTime = dayjs().set('hour', 19).set('minute', 30).startOf('minute');

    return (
        <Box sx={{display:'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Navbar />
            <Box sx={{py:5}}>
                <Typography align='center' variant="h3">Booking online is reccommended</Typography>
                <Typography align='center' variant="h5">We are open:</Typography>
                <Typography align='center' variant="h5">Wed-Sun</Typography>
                <Typography align='center' variant="h5">11-8</Typography>
                <Typography align='center' variant="h5">123 Fake St.</Typography>
                <Typography align='center' variant="h5">Ottawa, On, A1B 2C3</Typography>
                <Typography align='center' variant="h5" sx={{mb:5}}>613-000-0000</Typography>
                <Typography align='center' variant="h3">Online Booking Form</Typography>
            </Box>
            <Stack direction={{xs: 'column-reverse', md: 'column-reverse', lg: 'row'}} sx={{alignItems:'center', justifyContent:'center'}}>
                <Stack sx={{alignItems:'center', justifyContent: 'center', p:5, width:400}} spacing={2}>
                    <FormControl fullWidth>
                    <InputLabel id="type">Haircut Type</InputLabel>
                    <Select value={type} onChange={handleTypeChange} labelId='type' label="Haircut Type">
                        <MenuItem value={1}>Standard Cut</MenuItem>
                        <MenuItem value={2}>Standard Cut + Beard</MenuItem>
                        <MenuItem value={3}>Standard Kids Cut</MenuItem>
                    </Select>
                    </FormControl>
                    <TextField sx={{width: 1}} label="Name"/>
                    <FormControl fullWidth>
                    <InputLabel id="type">Prefered Barber</InputLabel>
                    <Select value={barber} onChange={handleBarberChance} labelId='type' label="Prefered Barber" defaultValue={1}>
                        <MenuItem value={1}>No Preference</MenuItem>
                        <MenuItem value={2}>Amal</MenuItem>
                        <MenuItem value={3}>Hamza</MenuItem>
                    </Select>
                    </FormControl>
                    <TextField sx={{width: 1}} label="Special Requests" multiline minRows={3}/>
                    <Button onClick={() => setShowAlert(true)} variant='contained' color='primary' sx={{typography: 'h6'}}>Submit</Button>
                    {showAlert && <Alert>Submitted!</Alert>}
                </Stack>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StaticDateTimePicker defaultValue={defaultDateTime} disablePast shouldDisableDate={isClosedDay} shouldDisableTime={isClosedTime} slotProps={{ actionBar: { actions: [] } }}/>
                </LocalizationProvider>
            </Stack>
            <Footer />
        </Box>
    )
}

export default Booking