import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Box,
    InputBase,
    Paper,
    Divider
} from '@mui/material';
import {
    AccountCircle,
    FavoriteBorder,
    Search
} from '@mui/icons-material';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" sx={{
            backgroundColor: '#D4AF37',
            color: 'black',
            boxShadow: 'none',
            opacity: 0.6
        }}>
            <Toolbar sx={{ flexDirection: 'column', alignItems: 'stretch', minHeight: '110px !important', px: { xs: 1, md: 6 } }}>
                {/* Top Row - Logo, Search, Icons */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    mb: 1
                }}>
                    {/* Logo */}
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontFamily: 'serif', fontSize: { xs: 22, md: 28 } }}>
                        Explore EGYPT
                    </Typography>

                    {/* Search Bar */}
                    <Paper
                        component="form"
                        sx={{
                            p: '2px 4px',
                            display: 'flex',
                            alignItems: 'center',
                            width: { xs: 180, sm: 300, md: 400 },
                            border: '1px solid #ccc',
                            boxShadow: 'none',
                            background: 'white',
                            opacity: 1
                        }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Enter desired destination"
                            inputProps={{ 'aria-label': 'search tours' }}
                        />
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <Search />
                        </IconButton>
                    </Paper>

                    {/* Icons */}
                    <Box>
                        <IconButton color="inherit" sx={{ mr: 1 }}>
                            <FavoriteBorder />
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Sign Up</MenuItem>
                            <MenuItem onClick={handleClose}>Login</MenuItem>
                        </Menu>
                    </Box>
                </Box>

                {/* Bottom Row - Navigation Links */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 4,
                    width: '100%'
                }}>
                    <Button color="inherit" sx={{ fontWeight: 400, fontSize: 16 }}>Home</Button>
                    <Button color="inherit" sx={{ fontWeight: 400, fontSize: 16 }}>Your Tours</Button>
                    <Button color="inherit" sx={{ fontWeight: 400, fontSize: 16 }}>Explore</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;