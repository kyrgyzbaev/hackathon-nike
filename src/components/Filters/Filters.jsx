import React from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Slider } from "@mui/material";

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  border: "1px solid grey",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const Filters = ({ search, setSearch, price, setPrice }) => {
  return (
    <div>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          value={search}
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={e => setSearch(e.target.value)}
        />
      </Search>

      <Slider
        // getAriaLabel={() => "Temperature range"}
        value={price}
        onChange={(e, value) => setPrice(value)}
        valueLabelDisplay="auto"
        min={1}
        max={10000}
        step={100}
      />
    </div>
  );
};

export default Filters;
