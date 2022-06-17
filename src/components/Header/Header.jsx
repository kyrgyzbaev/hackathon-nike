import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { createTheme } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const navigate = useNavigate();
  // const theme = createMuiTheme({
  //   typography: {
  //     fontFamily: [
  //       "-apple-system",
  //       "BlinkMacSystemFont",
  //       '"Segoe UI"',
  //       "Roboto",
  //       '"Helvetica Neue"',
  //       "Arial",
  //       "sans-serif",
  //       '"Apple Color Emoji"',
  //       '"Segoe UI Emoji"',
  //       '"Segoe UI Symbol"',
  //     ].join(","),
  //   },
  // });

  return (
    <div className="header">
      <Box className="appbar" sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography
              fontFamily={"-moz-initial"}
              className="home"
              onClick={() => navigate("/")}
              variant="h5"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
              HOME
            </Typography>

            <Typography
              onClick={() => navigate("/mens")}
              fontFamily={"-moz-initial"}
              variant="25px"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
              MENS
            </Typography>
            <Typography
              onClick={() => navigate("/womens")}
              fontFamily={"-moz-initial"}
              variant="25px"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
              WOMENS
            </Typography>
            <Typography
              fontFamily={"-moz-initial"}
              variant="25px"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
              SIZING CHART
            </Typography>

            <div className="icon-1">
              <AccountCircleIcon
                onClick={() => navigate("/login")}></AccountCircleIcon>
            </div>
            <div className="icon-2">
              <ShoppingCartIcon
                onClick={() => navigate("/cart")}></ShoppingCartIcon>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
