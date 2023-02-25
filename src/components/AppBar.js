import * as React from "react";
import { Button, Grid, useMediaQuery, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./assets/logo.jpg";

function AppBar() {
  const logoStyle = {
    maxHeight: 300,
    maxWidth: 200,
  };

  const isSmallScreen = useMediaQuery("(max-width: 800px)");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid
      container
      spacing={3}
      direction="row"
      justifyContent="center"
      alignItems="center"
      xs={12}
      sm={12}
      style={{ backgroundColor: "white" }}
    >
      <Grid item xs={2}>
        {isSmallScreen ? (
          <Button onClick={handleClick}>
            <MenuIcon />
          </Button>
        ) : (
          <Button>
            <MenuIcon />
          </Button>
        )}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Home</MenuItem>
          <MenuItem onClick={handleClose}>About</MenuItem>
          <MenuItem onClick={handleClose}>Reservation</MenuItem>
          <MenuItem onClick={handleClose}>Login</MenuItem>
          <MenuItem onClick={handleClose}>Sign Up</MenuItem>
        </Menu>
      </Grid>
      <Grid item xs={4}>
        <img src={logo} alt="logo" style={logoStyle} />
      </Grid>
      {!isSmallScreen && (
        <Grid
          item
          container
          xs={6}
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Button size="large">Home</Button>
          <Button size="large">About</Button>
          <Button size="large" style={{ backgroundColor: "yellow" }}>
            Reservation
          </Button>
          <Button size="large">Login</Button>
          <Button size="large">Sign Up</Button>
        </Grid>
      )}
    </Grid>
  );
}

export default AppBar;
