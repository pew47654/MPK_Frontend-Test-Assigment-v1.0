import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsIcon from "@mui/icons-material/Notifications";

const settings = ["Profile", "Account", "Logout"];

function TopNav() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#134B8A" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Avatar
              sx={{
                bgcolor: "white",
                px: 0.9,
                py: 0.9,
                width: 45,
                height: 40,
              }}
              variant="rounded"
              alt="Logo"
              src="/src/assets/logo/logo.png"
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}></Box>

          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <Tooltip>
              <IconButton sx={{ p: 0 }}>
                <Avatar src="/src/assets/profile_picture/user.png" />
              </IconButton>
            </Tooltip>
            <Typography variant="h7" sx={{ ml: 2 }}>
              Akkarapol
            </Typography>
            <Tooltip>
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, ml: 1, color: "inherit" }}
              >
                <KeyboardArrowDownIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default TopNav;
