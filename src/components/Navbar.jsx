import { Typography, Box, AppBar } from '@mui/material'
import Stack from '@mui/system/Stack'
import * as React from 'react';
import { NavLink, Link } from "react-router";
import { useLocation } from 'react-router';


function Navbar(){
    const [variants, setVariants] = React.useState(['h1', 'h2', 'h2'])
    const pages = ["/", "/pricing", "/book"]
    const location = useLocation()

    React.useEffect(() => {
        let temp = ['h2', 'h2', 'h2']
        for(let i = 0; i < pages.length; i++){
            if(location.pathname==pages[i]){
                temp[i] = 'h1'
            }
        }
        setVariants(temp)
    }, [location])

    return (
        <AppBar sx={{py: 2}} color='secondary' position='sticky'>
            <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} direction="row" spacing={{xs: 2, md: 2, lg: 8}}>
                <Typography component={NavLink} to="/" color='primary' sx={{textDecoration: 'none'}} variant={variants[0]}>The Shop</Typography>
                <Typography component={NavLink} to="/pricing" color='primary' sx={{textDecoration: 'none'}} variant={variants[1]}>Pricing</Typography>
                <Typography component={NavLink} to="/book" color='primary' sx={{textDecoration: 'none'}} variant={variants[2]}>Booking</Typography>
            </Stack>
        </AppBar>
    )
}

export default Navbar