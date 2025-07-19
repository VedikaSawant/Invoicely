import React from 'react';
import { AppBar, Toolbar } from '@mui/material';

const Header = () => {
     const logo = "https://dashboard.getinvoice.co/dboard/img/logo.png"
    return (
        <AppBar 
            style={{ 
                 
                padding: '10px 20px', 
                boxShadow: 'none', 
                position: 'static', 
                top: 0, 
                left: 0, 
                right: 0 
            }}
        >
            <Toolbar style={{ justifyContent: 'center' }}>
                <img 
                     src={logo} 
                    style={{ 
                        maxHeight: '60px', 
                        width: 'auto', 
                        objectFit: 'contain' 
                    }} 
                    alt="logo" 
                />  
            </Toolbar>
        </AppBar>
    );
}

export default Header;
