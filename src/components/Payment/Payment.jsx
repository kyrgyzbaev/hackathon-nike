import { Box, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          // flexDirection: "column",
          justifyContent: "center",

          // width: "200px",
        }}>
        <div className="paynow">
          <TextField
            sx={{ marginTop: "20px" }}
            id="outlined-number"
            label="Card Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            sx={{ marginTop: "20px" }}
            required
            id="outlined-required"
            label="Card Name"
          />
          <TextField
            sx={{ marginTop: "20px" }}
            id="outlined-number"
            label="CVC"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            sx={{ marginTop: "20px" }}
            id="outlined-number"
            label="Expiry"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <button onClick={() => navigate("/")} className="pay-btn">
            Pay Now
          </button>
        </div>
      </Box>
    </Container>
  );
};

export default Payment;
