import React from 'react';
//@ts-ignore
import logo from "../../Assets/logo.svg";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
//@ts-ignore
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
//@ts-ignore
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
//@ts-ignore
import AdbIcon from '@mui/icons-material/Adb';
import {NavLink} from "react-router-dom";

const pages = ['Exchange rate'];





const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };



    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters  sx={{display: "flex", justifyContent: "space-between"}}>
                    <AttachMoneyIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: "gold", fontSize: "24px" }}/>
                    <NavLink to={`/`} style={{display: "flex", fontFamily: "Poppins", fontWeight: "700", letterSpacing: ".3rem", textDecoration: "none", color: 'inherit'}}>AlConvert</NavLink>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <NavLink to={`${page.split(' ')[0]}`}  key={page} onClick={handleCloseNavMenu}>
                                    {page}
                                </NavLink>
                            ))}
                        </Menu>
                    </Box>
                    <AttachMoneyIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: "gold", fontSize: "24px" }}/>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        AlConvert
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <NavLink to={`${page.split(' ')[0]}`} className="to__page" style={{ fontWeight: "bold", fontSize: 18}} key={page} onClick={handleCloseNavMenu}>
                                {page}
                            </NavLink>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;