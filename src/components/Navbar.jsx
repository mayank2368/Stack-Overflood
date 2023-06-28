import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  IconButton,
  Box,
  Menu,
  InputBase,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo_transparent from "../logo_transparent.png";
import SearchIcon from "@mui/icons-material/Search";

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
          variant="h7"
          component={Link}
          to="/"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            src={logo_transparent}
            alt="Logo"
            style={{ height: "50px", marginRight: "0.01rem" }}
          />
        </Typography>

        <Typography
          variant="h7"
          component={Link}
          to="/about"
          sx={{
            marginLeft: "2rem",
            marginRight: "2rem",
          }}
        >
          About
        </Typography>
        <Typography
          variant="h7"
          component={Link}
          to="/about"
          sx={{
            marginLeft: "2rem",
            marginRight: "2rem",
          }}
        >
          Products
        </Typography>
        <Typography
          variant="h7"
          component={Link}
          to="/about"
          sx={{
            marginLeft: "2rem",
            marginRight: "2rem",
          }}
        >
          For teams
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginRight: "2rem",
            marginLeft: "0.1rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "1px",
            width: "600px",
          }}
        >
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
            sx={{
              color: "inherit",
              border: "none",
              marginLeft: "4px",
            }}
          />
        </Box>

        <Typography variant="h7" component={Link} to="/login" marginLeft="auto">
          Login
        </Typography>
        <Typography
          variant="h7"
          component={Link}
          to="/register"
          marginLeft="4rem"
        >
          Register
        </Typography>
        <Typography
          variant="h7"
          component={Link}
          to="/askquestion"
          color="inherit"
          marginLeft="4rem"
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
