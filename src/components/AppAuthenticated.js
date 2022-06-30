import React from 'react'
import { AppBar, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import { CssBaseline, List, ListItemButton, ListItemText, Typography, Divider, Drawer} from "@mui/material";
import ERC20App from './ERC20/ERC20App';


function AppAuthenticated() {
  
  const drawerWidth = 240;

  return (
    <Box sx={{ display: "flex" }}>
      
      <CssBaseline />

      <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Ethereum ERC's Demo
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer sx={{ width: drawerWidth, flexShrink: 0, "& .MuiDrawer-paper": {width: drawerWidth,boxSizing: "border-box",},}}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
            <ListItemButton >
                <ListItemText primary="ERC-20" /> 
            </ListItemButton>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p:3}}>
          <Toolbar />
          <ERC20App />
      </Box>

    </Box>
  );
}

export default AppAuthenticated