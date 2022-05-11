import React from 'react';

import {
    AppBar,
    Badge,
    Box,
    IconButton,
    Toolbar,
    Typography
} from '@mui/material';

import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';



export const Header = function () {

    return <>
        <AppBar position="fixed">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>

                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                    style={{
                        fontWeight: "bold"
                    }}
                >
                    상품 관리
                </Typography>

                <Box sx={{ flexGrow: 1 }} />

                <Box sx={{
                    display: {
                        xs: 'none',
                        md: 'flex'
                    }
                }} style={{
                    marginRight: 20
                }}>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="error">
                            <MailIcon />
                        </Badge>
                    </IconButton>

                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={17} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>

                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        // aria-controls={menuId}
                        aria-haspopup="true"
                        // onClick={handleProfileMenuOpen}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </Box>

                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <span style={{
                        fontSize: 16
                    }}>
                      {'로그인 후 이용해주세요.' }
                    </span>
                </Box>
            </Toolbar>
        </AppBar>

        <div style={{
            margin: 80
        }} />
    </>
};