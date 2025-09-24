import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, TextField, InputAdornment, IconButton } from '@mui/material';
import { Link } from 'react-router-dom'; 
import SearchIcon from '@mui/icons-material/Search';


const backgroundImages = [
    'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop',
    'https://images.unsplash.com/photo-1652460816777-a58bf8ed1f08?auto=format&fit=crop', 
    'https://images.unsplash.com/photo-1595433306946-233f47e4af3a?auto=format&fit=crop', 
    'https://images.unsplash.com/photo-1750780592182-76cef9f23b20?auto=format&fit=crop'  
];

const HomePage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        }, 5000); 

        return () => clearInterval(timer); 
    }, []);

    return (
        <Box sx={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden' }}>
            {/* Background Image Slider */}
            {backgroundImages.map((image, index) => (
                <Box
                    key={index}
                    component="div"
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: index === currentImageIndex ? 1 : 0,
                        transition: 'opacity 1s ease-in-out', 
                        '&::before': { 
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }
                    }}
                />
            ))}

            {/* Navigation Bar */}
            <AppBar position="absolute" color="transparent" elevation={0} sx={{ top: 0 }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                        Soul of India
                    </Typography>
                    <Button color="inherit" component={Link} to="/destinations">Destinations</Button>
                    <Button color="inherit" component={Link} to="/about">About</Button>
                    <Button color="inherit" component={Link} to="/login">Login</Button>
                    <Button 
                        variant="outlined" 
                        color="inherit" 
                        component={Link} 
                        to="/signup"
                        sx={{ ml: 2, borderColor: 'rgba(255, 255, 255, 0.5)', '&:hover': { borderColor: '#fff' } }}
                    >
                        Sign Up
                    </Button>
                </Toolbar>
            </AppBar>

            {/* Hero Content */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    color: 'white',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 3
                }}
            >
                <Typography variant="h2" component="h1" fontWeight={700} sx={{ mb: 2 }}>
                    Discover Your Next Adventure
                </Typography>
                <Typography variant="h6" component="p" sx={{ mb: 4, maxWidth: '600px' }}>
                    Journey through the heart of India. Unforgettable experiences are waiting for you.
                </Typography>

                {/* Interactive Search Bar */}
                <TextField
                    placeholder="Search for destinations (e.g., Goa, Delhi...)"
                    variant="outlined"
                    sx={{
                        width: '100%',
                        maxWidth: '550px',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: 'transparent' },
                            '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                            '&.Mui-focused fieldset': { borderColor: 'white' },
                        },
                        '& .MuiInputBase-input': { color: 'white' },
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: 'white' }} />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
        </Box>
    );
};

export default HomePage;