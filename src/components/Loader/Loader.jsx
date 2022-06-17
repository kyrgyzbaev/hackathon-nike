import React from "react";
import { CircularProgress, Stack } from "@mui/material";

const Loader = () => {
  return (
    <Stack
      display={"flex"}
      justifyContent={"center"}
      height={"80vh"}
      alignItems={"center"}
      sx={{ color: "grey.500" }}
      spacing={2}
      direction="row">
      <CircularProgress color="success" />
    </Stack>
  );
};

export default Loader;
