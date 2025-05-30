import { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Container,
    IconButton,
    Menu,
    MenuItem,
    InputBase,
    useMediaQuery
} from '@mui/material';
import { Menu as MenuIcon, Search, FavoriteBorder, AccountCircle } from '@mui/icons-material';
import { styled, useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const StyledAppBar = styled(AppBar)(() => ({
    backgroundColor: '#D4AF37',
    color: 'black',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    position: 'sticky',
    top: 0,
    zIndex: 1200,
}));

const CenterGroup = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(1.5),
    flex: 2,
    minWidth: 320,
    maxWidth: 600,
}));

const SearchBar = styled('form')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    background: '#f9f6e7',
    borderRadius: 20,
    padding: '2px 16px',
    boxShadow: 'none',
    minWidth: 220,
    maxWidth: 420,
    width: '100%',
    border: '2px solid #222',
    fontWeight: 500,
    marginBottom: theme.spacing(1),
}));

const NavLinksRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(5),
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
}));

const NavLink = styled(Button)(({ theme }) => ({
    color: 'black',
    fontWeight: 700,
    fontSize: 18,
    textTransform: 'none',
    background: 'none',
    minWidth: 0,
    padding: '6px 18px',
    position: 'relative',
    letterSpacing: 0.5,
    textShadow: '0 1px 2px #fff, 0 0 2px #fff',
    transition: 'color 0.2s',
    '&::after': {
        content: '""',
        position: 'absolute',
        left: '50%',
        bottom: 2,
        width: '0%',
        height: '2px',
        background: '#222',
        transition: 'all 0.3s cubic-bezier(.4,0,.2,1)',
        transform: 'translateX(-50%)',
    },
    '&:hover': {
        color: theme.palette.primary.main,
    },
    '&:hover::after': {
        width: '80%',
        background: theme.palette.primary.main,
    },
}));

const IconLabelBox = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mx: 1.5,
    minWidth: 48,
}));

const Navbar = () => {
    const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(null);
    const [exploreAnchor, setExploreAnchor] = useState<null | HTMLElement>(null);
    const [exploreMenuOpen, setExploreMenuOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [profileAnchorEl, setProfileAnchorEl] = useState<null | HTMLElement>(null);
    const isProfileMenuOpen = Boolean(profileAnchorEl);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('user') === 'true');
    }, []);

   
    const handleNavigate = (path: string) => {
        navigate(path);
        handleMenuClose();
        handleProfileMenuClose();
    };

    const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
        setProfileAnchorEl(event.currentTarget);
    };

    const handleProfileMenuClose = () => {
        setProfileAnchorEl(null);
    };

    const handleExploreClick = (event: React.MouseEvent<HTMLElement>) => {
        if (exploreMenuOpen) {
            setExploreAnchor(null);
            setExploreMenuOpen(false);
        } else {
            setExploreAnchor(event.currentTarget);
            setExploreMenuOpen(true);
        }
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMenuAnchor(event.currentTarget);
    };

    const handleMenuClose = () => {
        setMobileMenuAnchor(null);
        setExploreMenuOpen(false);
        setExploreAnchor(null);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        handleProfileMenuClose();
        navigate('/login');
    };

    return (
        <StyledAppBar>
            <Container maxWidth="xl" sx={{ position: 'relative', px: { xs: 1, md: 4 } }}>
                <Toolbar disableGutters sx={{ minHeight: 72, px: 0 }}>
                    {/* Logo as link to Home */}
                    <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 'bold',
                                fontFamily: 'serif',
                                fontSize: { xs: 20, md: 28 },
                                textDecoration: 'none',
                                color: 'black',
                                cursor: 'pointer',
                                '&:hover': {
                                    color: theme.palette.primary.main,
                                },
                            }}
                            onClick={() => handleNavigate('/')}
                        >
                            Explore EGYPT
                        </Typography>
                    </Box>

                    {/* Centered group */}
                    {!isMobile && (
                        <CenterGroup>
                            <SearchBar>
                                <InputBase
                                    sx={{ ml: 1, flex: 1, fontSize: 16, fontWeight: 500 }}
                                    placeholder="Enter desired destination"
                                    inputProps={{ 'aria-label': 'search tours' }}
                                />
                                <IconButton type="submit" sx={{ p: '6px' }} aria-label="search">
                                    <Search />
                                </IconButton>
                            </SearchBar>
                            <NavLinksRow>
                                <NavLink onClick={() => handleNavigate('/')}>Home</NavLink>
                                <NavLink onClick={() => handleNavigate('/ourtours')}>Our Tours</NavLink>
                                <NavLink
                                    onClick={handleExploreClick}
                                    aria-controls={exploreMenuOpen ? 'explore-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={exploreMenuOpen ? 'true' : undefined}
                                    sx={{ cursor: 'pointer' }}
                                >
                                    Explore
                                </NavLink>
                                <Menu
                                    id="explore-menu"
                                    anchorEl={exploreAnchor}
                                    open={exploreMenuOpen}
                                    onClose={handleMenuClose}
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                                    transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                                    disableAutoFocusItem
                                >
                                    <MenuItem onClick={() => { handleNavigate('/Giza'); }}>Giza</MenuItem>
                                    <MenuItem onClick={() => { handleNavigate('/Sohage'); }}>Sohage</MenuItem>
                                    <MenuItem onClick={() => { handleNavigate('/Fayoum'); }}>Fayoum</MenuItem>
                                    <MenuItem onClick={() => { handleNavigate('/Aswan'); }}>Aswan</MenuItem>
                                </Menu>
                            </NavLinksRow>
                        </CenterGroup>
                    )}

                    {/* Icons right */}
                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 2 }}>
                        {!isMobile && (
                            <>
                                <IconLabelBox>
                                    <IconButton color="inherit" onClick={() => handleNavigate('/wishlist')}>
                                        <FavoriteBorder fontSize="medium" />
                                    </IconButton>
                                    <Typography variant="caption" sx={{ fontWeight: 500, fontSize: 13, mt: -0.5 }}>
                                        Wishlist
                                    </Typography>
                                </IconLabelBox>
                                <IconLabelBox>
                                    <IconButton color="inherit" onClick={handleProfileClick}>
                                        <AccountCircle fontSize="medium" />
                                    </IconButton>
                                    <Typography variant="caption" sx={{ fontWeight: 500, fontSize: 13, mt: -0.5 }}>
                                        Profile
                                    </Typography>
                                </IconLabelBox>
                            </>
                        )}
                        {isMobile && (
                            <IconButton size="large" onClick={handleMobileMenuOpen} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                        )}
                    </Box>
                </Toolbar>

                {/* Mobile Search Bar */}
                {isMobile && (
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', pb: 1 }}>
                        <SearchBar sx={{ width: '100%' }}>
                            <InputBase
                                sx={{ ml: 1, flex: 1, fontSize: 15 }}
                                placeholder="Enter desired destination"
                                inputProps={{ 'aria-label': 'search tours' }}
                            />
                            <IconButton type="submit" sx={{ p: '6px' }} aria-label="search">
                                <Search />
                            </IconButton>
                        </SearchBar>
                    </Box>
                )}

                {/* Mobile Menu */}
                <Menu
                    anchorEl={mobileMenuAnchor}
                    open={Boolean(mobileMenuAnchor)}
                    onClose={handleMenuClose}
                    sx={{ display: { xs: 'block', md: 'none' } }}
                >
                    <MenuItem onClick={() => handleNavigate('/')}>Home</MenuItem>
                    <MenuItem onClick={() => handleNavigate('/ourtours')}>Our Tours</MenuItem>
                    <MenuItem onClick={handleExploreClick}>Explore</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Wishlist</MenuItem>
                    <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
                </Menu>

                {/* Profile Menu */}
                <Menu
                    anchorEl={profileAnchorEl}
                    open={isProfileMenuOpen}
                    onClose={handleProfileMenuClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    {!isLoggedIn && <MenuItem onClick={() => handleNavigate('/login')}>Login</MenuItem>}
                    {!isLoggedIn && <MenuItem onClick={() => handleNavigate('/SignUp')}>Sign Up</MenuItem>}
                    <MenuItem onClick={() => handleNavigate('/contact-us')}>Contact Us</MenuItem>
                    {isLoggedIn && <MenuItem onClick={handleLogout}>Logout</MenuItem>}
                </Menu>
            </Container>
        </StyledAppBar>
    );
};

export default Navbar;
