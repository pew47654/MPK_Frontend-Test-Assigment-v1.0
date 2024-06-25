import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import ListAltIcon from "@mui/icons-material/ListAlt";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const items = [{ text: "Place", link: "/" }];

function SideNav() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: isMobile ? 0 : 100,
            boxSizing: "border-box",
            borderTopRightRadius: 60,
            borderBottomRightRadius: 60,
            boxShadow: 5,
          },
        }}
        variant="permanent"
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar
            sx={{
              width: 60,
              height: 50,
              mt: 4,
            }}
            variant="rounded"
            alt="Logo"
            src="/src/assets/logo/logo.png"
          />
        </Toolbar>
        <Divider sx={{ marginTop: 3 }} />
        <List>
          {items.map((item, index) => (
            <ListItem button key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <ListAltIcon
                  sx={{
                    borderRadius: 3,
                    bgcolor: "#0F1E56",
                    color: "white",
                    width: 40,
                    height: 40,
                    padding: 1,
                  }}
                />
                <Typography variant="body1" fontWeight="bold">
                  {item.text}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ marginTop: 3 }} />
      </Drawer>
    </div>
  );
}

export default SideNav;
