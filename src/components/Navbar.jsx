import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  IconButton,
  Menu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
          sx={{ marginRight: "1rem" }}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          color="inherit"
          sx={{ flexGrow: 1 }}
        >
          Stack-Overflood
        </Typography>
        <Typography variant="h6" component={Link} to="/login" marginLeft="auto">
          Login
        </Typography>
        <Typography
          variant="h6"
          component={Link}
          to="/register"
          marginLeft="2rem"
        >
          Register
        </Typography>
        <Typography
          variant="h6"
          component={Link}
          to="/ask"
          color="inherit"
          marginLeft="2rem"
        >
          Ask Question?
        </Typography>

        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={menuOpen}
          onClose={handleMenuClose}
          getContentAnchorEl={null}
          elevation={0}
        >
          <MenuItem component={Link} to="/questions" onClick={handleMenuClose}>
            Questions
          </MenuItem>
          <MenuItem component={Link} to="/tags" onClick={handleMenuClose}>
            Tags
          </MenuItem>
          <MenuItem component={Link} to="/users" onClick={handleMenuClose}>
            Users
          </MenuItem>
          <MenuItem component={Link} to="/company" onClick={handleMenuClose}>
            Company
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
