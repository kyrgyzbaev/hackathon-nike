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
        <div position="static">
          <Toolbar className="toolbar">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}></IconButton>
            <div className="home">
              <div className="change-img">
                <div className="front-side-img">
                  <img
                    onClick={() => navigate("/")}
                    className="nike"
                    color="white"
                    width={"100px"}
                    height={"60px"}
                    src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbmUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMjIuMDM3NSw1Ny43OTQ2OWMtMTEuMTkzNDQsMTMuMTQxODggLTIyLjAzNzUsMjkuMDExNTYgLTIyLjAzNzUsNDEuNjI5MzhjMCw3LjI4MzEyIDYuMTI3NSwxNy41MjI1IDIxLjA5Njg4LDE3LjUyMjVjOC4wODkzNywwIDE2LjEyNSwtMy4yNTE4OCAyMi40MTM3NSwtNS43NjQ2OWMxMC42MDIxOSwtNC4yNDYyNSAxMjcuNzYzNzUsLTU1LjEyMDYzIDEyNy43NjM3NSwtNTUuMTIwNjNjMS4xMjg3NSwtMC41NjQzNyAwLjkyNzE5LC0xLjI3NjU2IC0wLjQ5NzE5LC0wLjkyNzE5Yy0wLjU2NDM3LDAuMTQ3ODEgLTEyNy41NDg3NSwzNC41NjEyNSAtMTI3LjU0ODc1LDM0LjU2MTI1Yy0yLjQ0NTYyLDAuNjg1MzEgLTQuOTQ1LDEuMDYxNTYgLTcuMzc3MTksMS4wNjE1NmMtMTAuOTc4NDQsMCAtMTguMzgyNSwtNS4yNjc1IC0xOC4zODI1LC0xNi43ODM0NGMwLC00LjQ2MTI1IDEuMzk3NSwtOS44NDk2OSA0LjU2ODc1LC0xNi4xNzg3NXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
                    alt=""
                  />
                </div>
              </div>
            </div>

            <p
              className="mens-p"
              onClick={() => navigate("/mens")}
              fontFamily={"-moz-initial"}
              variant="25px"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
              MENS
            </p>
            <p
              className="womens-p"
              onClick={() => navigate("/womens")}
              fontFamily={"-moz-initial"}
              variant="25px"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
              WOMENS
            </p>

            <div className="icons">
              <div className="account-icon">
                <AccountCircleIcon
                  onClick={() => navigate("/login")}></AccountCircleIcon>
              </div>

              <ShoppingCartIcon
                className="cart-icon"
                onClick={() => navigate("/cart")}></ShoppingCartIcon>
            </div>
          </Toolbar>
        </div>
      </Box>
    </div>
  );
}
