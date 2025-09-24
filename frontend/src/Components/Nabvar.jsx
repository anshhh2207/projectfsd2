import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [role,setRole]=useState(null);
  const navigate=useNavigate();
  useEffect(()=>{
    const savedRole=sessionStorage.getItem('role');
    setRole(savedRole);
  },[])
  const handleLogout =()=>{
    sessionStorage.clear();
    navigate('/')
  }
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            myApp
          </Typography>
          <Button >
            <Link to={'/'} style={{textDecoration:'none', color:'white'}}>
           Login
            </Link>
         </Button>
         <Button >
            <Link to={'/sign'} style={{textDecoration:'none', color:'white'}}>
            Signup
            </Link>
         </Button>
         {role==="admin" && (
          <Button >
          <Link to={'/admin'} style={{textDecoration:'none', color:'white'}}>
          Abput US
          </Link> 
       </Button>
         )}
         <Button >
            <Link to={'/p'} style={{textDecoration:'none', color:'white'}}>
             Explore more
            </Link> 
         </Button>
        {role && (
          <Button onClick={handleLogout} color='inherit' >
          Logout
       </Button>
        )}  
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar