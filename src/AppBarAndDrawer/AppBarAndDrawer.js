import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import Avatar from "@material-ui/core/Avatar";
import LanguageIcon from '@material-ui/icons/Language';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Menu from '@material-ui/core//Menu';
import MenuItem from '@material-ui/core//MenuItem';
import AccountBox from '@material-ui/icons/AccountBox';
import Logout from '@material-ui/icons/ExitToApp';

export const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  logo: {
    color: "white",
    textDecoration: "none",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: `#340dcf`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      
    },
  },
  menuicon:{
    minWidth:36,
    "&:focus,&:hover,&$active": {
      color: "#d814c9",
       }
  },
  menutext:{
    "&:focus,&:hover,&$active": {
      color: "#d814c9",
       }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    marginTop: '64px',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  
  active: {
    backgroundColor: theme.palette.action.selected,
  },
}));

function ResponsiveDrawer(props) {
  const { container} = props;
  const classes = useStyles();
  const theme = useTheme();
  const { pathname } = useLocation();
  const isHome = false; 
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setTimeout(function(){var elements = document.getElementsByClassName('MuiPaper-root MuiMenu-paper MuiPopover-paper MuiPaper-elevation0 MuiPaper-rounded')
    elements[0].style.top='50px';elements[0].style.left='1113px'}, 100); 
    
  };
 
  const handleLogout = () => {
    localStorage.setItem("name","");
    localStorage.setItem("email","");
    localStorage.setItem("Description","");
  };

  const handleClose = () => {
   setAnchorEl(null);
  };
  const drawer = (
    <div>
      <List>
        {[
          { text: "Dashboard", icon: "home" },
          { text: "Shop", icon: "shoppingcart" },
          { text: "profile", icon: "person" },
          { text: "Inbox", icon: "drafts" }
         
        ].map(({ text, icon }, index) => (
          
          <ListItem 
            component={RouterLink}
            selected={pathname === `/${text}`}
            to={`/${text}`}
            button
            id={`${text}`}
            
            key={text}
          >
            
            <ListItemIcon >
              <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Menu
        anchorEl={anchorEl}
        open={open}
        id="menu"
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              
              ml: -0.5,
              backgroundColor: '#faf9f9',
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
             right: 14,
              width: 10,
              height: 10,

              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
       
       <MenuItem  component={RouterLink}  to={"/profile"}>
       <AccountBox />Profile
        </MenuItem>
         <MenuItem >
           <Logout  onClick={handleLogout} />Log Out
        </MenuItem>
      </Menu>
     
      <div
        style={{
          height: "64px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "contrast(75%)",
          backgroundImage: "url(/img/wallpaper.jpeg)",
          position: "absolute",
          top: "0px",
          width: "100%",
          zIndex: -2,
        }}
      />
      <AppBar position="fixed"  style={{backgroundColor:"#3821bd"}} className={isHome ? "" : ""}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            to={"/"}
            component={RouterLink}
            className={classes.logo}
          >
            Shopping
          </Typography>
          <div style={{ flexGrow: 1 }}></div>
          <LanguageIcon />
         
            <NotificationsIcon />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={(event) =>handleClick(event)}
          >
            
            <Avatar src="/img/driver.png" />
          </IconButton>
        </Toolbar>
      </AppBar>
      {isHome && !mobileOpen ? (
        <div />
      ) : (
        <nav aria-label="mailbox folders">
         <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, 
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open={isHome}
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      )}
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};

export default ResponsiveDrawer;
