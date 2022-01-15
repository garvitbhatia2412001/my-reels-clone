import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { makeStyles } from '@mui/styles';
import insta from '../Assets/Instagram.jpg'
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import Avatar from '@mui/material/Avatar';

const useStyles = makeStyles({
    appb:{
        background : 'white'
    }
}) 

export default function Navbar({userData}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const history = useNavigate();
  const {logout} = React.useContext(AuthContext)

  const classes = useStyles()

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleprofile = () => {
    history(`/profile/${userData.userId}`)
  }

  const handlebannerclick = () => {
      history('/');
  }

  const handlelogout = async () => {
    await logout();
    history('/login');

  }

  const handleexplore = () => {
      let win = window.open('https://my-g-open-board.herokuapp.com/', '_blank');
      win.focus();
  }

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
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleprofile}><AccountCircleIcon/><p>&nbsp;&nbsp;</p>Profile</MenuItem>
      <MenuItem onClick={handlelogout}><ExitToAppIcon/><p>&nbsp;&nbsp;</p>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
        <MenuItem onClick={handleprofile}><AccountCircleIcon/><p>&nbsp;&nbsp;</p>Profile</MenuItem>
      <MenuItem onClick={handlelogout}><ExitToAppIcon/><p>&nbsp;&nbsp;</p>Logout</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{background:'white'}}> 
        <Toolbar>
          <div style={{marginLeft:'5%'}}>
              <img src={insta} style={{width:'20vh'}} onClick={handlebannerclick}/>
          </div>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex',color:'black',alignItems:'center',marginRight:'4rem' }}}>
            <HomeIcon onClick={handlebannerclick} style={{marginRight:'1.5rem',cursor:"pointer"}}/>
            <ExploreIcon onClick={handleexplore} style={{marginRight:'1rem',cursor:"pointer"}}/>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar src={userData?.profileUrl}  sx={{height:'3rem',width:'3rem'}}/>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>

            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <Avatar src={userData?.profileUrl}  sx={{height:'3rem',width:'3rem'}}/>
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
