import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { Link } from 'react-router-dom'; 

export default function Footer() {
  const [value, setValue] = React.useState(0);

  const handleRefresh = () => {
    window.location.reload(); // Reloads the current page
  };
  return (
    <Box
      sx={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<LocationOnIcon />}
          component={Link} 
          to="/" 
        />
        <BottomNavigationAction
          label="Favorites"
          icon={<FavoriteIcon />}
          component={Link}
          to="/fav" 
        />
        <BottomNavigationAction
          label="Reload"
          icon={<RestoreIcon />}
          onClick={handleRefresh}
        />
      </BottomNavigation>
     <p style={{
        width: '100%',
        backgroundColor:"white",
        textAlign:"center"      }}>&copy; KIRTHIKA T</p>
    </Box>
  );
}
