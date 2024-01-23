import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SchoolIcon from '@mui/icons-material/School';
import Notifications from '../notificationpage/notifications';
import MoreIcon from '@mui/icons-material/More';
export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}><Link to="/profile">Profile</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><Link to="/">Sign Out</Link></MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" elevation={4} sx={{ backgroundColor: '#31304D' }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <b>Developer's Interactive Site</b>&nbsp;&nbsp;&nbsp;&nbsp;
          </Typography>
          <Link to="/home" style={{ color: '#F5F7F8', marginRight: '16px' }}>
            <HomeIcon /><b>HOME</b>
          </Link>
          <Link to="/search" style={{ color: '#F5F7F8', marginRight: '16px' }}>
            <SearchIcon /><b>SEARCH</b>
          </Link>
          <Link to="/learning" style={{ color: '#F5F7F8', marginRight: '16px' }}>
            <SchoolIcon /><b>LEARNING</b>
          </Link>
          <Link to="/news" style={{ color: '#F5F7F8', marginRight: '16px' }}>
            <NewspaperIcon /><b>NEWS</b>
          </Link>
          <Link to="/more" style={{ color: '#F5F7F8', marginRight: '16px' }}>
            <MoreIcon/><b> More</b>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/message" style={{ color: '#F5F7F8', marginRight: '16px' }}>
              <IconButton color="inherit">
                <MailIcon />
              </IconButton>
            </Link>
            <IconButton style={{ color: '#F5F7F8', marginRight: '16px' }}>
              <Notifications />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}

