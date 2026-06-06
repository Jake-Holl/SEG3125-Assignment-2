import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { NavLink, Link } from "react-router";
import Stack from '@mui/system/Stack'
import { Typography, Box } from '@mui/material'
import Button from '@mui/material/Button'

function Pricing(){

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Navbar />
            <Stack sx={{width: 'fit-content', mx: 'auto', justifyContent: 'center', alignItems: 'stretch', p: 5}}  spacing={2} direction='column'>
                <Stack direction='row' useFlexGap sx={{p:4, bgcolor:'tertiary.main', alignItems: 'center'}}>
                    <Box>
                        <Typography variant='h4'>Standard Cut</Typography>
                        <Typography variant='h5'>Follows our standard Wash, Cut, Style procedure</Typography>
                    </Box>
                    <Typography sx={{pl: 4, ml: 'auto'}} variant='h4'>$34</Typography>
                </Stack>
                <Stack direction='row' useFlexGap sx={{p:4, bgcolor:'tertiary.main', alignItems: 'center'}}>
                    <Box>
                        <Typography variant='h4'>Standard Cut + Beard</Typography>
                        <Typography variant='h5'>Follows our standard Wash, Cut, Style procedure + a beard trim</Typography>
                    </Box>
                    <Typography sx={{pl: 4, ml: 'auto'}} variant='h4'>$40</Typography>
                </Stack>
                <Stack direction='row' useFlexGap sx={{p:4, bgcolor:'tertiary.main', alignItems: 'center'}}>
                    <Box>
                        <Typography variant='h4'>Standard Kids Cut</Typography>
                        <Typography variant='h5'>Follows our standard Wash, Cut, Style procedure</Typography>
                    </Box>
                    <Typography sx={{pl: 4, ml: 'auto'}} variant='h4'>$26</Typography>
                </Stack>
            </Stack>

            <Box sx={{display: 'flex', justifyContent: 'center', mb:5}}>
                <Button component={NavLink} to="/book" size='large' variant='contained' color='primary' sx={{typography: 'h5'}}>Book with an Expert</Button>
            </Box>
            <Footer />
        </Box>
    )

}

export default Pricing