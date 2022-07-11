import React from 'react';
//@ts-ignore
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
//@ts-ignore
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
//@ts-ignore
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import {NavLink} from "react-router-dom";
import QRCode from "react-qr-code";

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
                    <AttachMoneyIcon sx={{ display:'flex', mr: 1, color: "gold", fontSize: "24px" }}/>
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

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <NavLink to={`${page.split(' ')[0]}`} className="to__page" style={{ fontWeight: "bold", fontSize: 18}} key={page} onClick={handleCloseNavMenu}>
                                {page}
                            </NavLink>
                        ))}
                    </Box>
                    <Box sx={{display: "flex", alignItems: "center"}}>
                        <a href={"https://www.cbr.ru/currency_base/daily/"} rel="noreferrer" target={"_blank"} style={{display: "flex", alignItems: "center"}}>
                            <QRCode value={"https://www.cbr.ru/currency_base/daily/"} size={64}/>
                        </a>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;