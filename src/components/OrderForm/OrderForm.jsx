import * as React from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import { Container, TextField } from "@mui/material";
import { menscartContext } from "../../contexts/menscartContext";

export default function ServerModal() {
  const rootRef = React.useRef(null);

  const { cart } = React.useContext(menscartContext);

  const navigate = useNavigate();

  return (
    <Container>
      <div className="order-p">
        <p className="o-p" onClick={() => navigate("/")}>
          Shop /{" "}
        </p>
        <p>Order Form</p>
      </div>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
          marginBottom: "100px",
          // maxWidth: "400px",
          // marginRight: "30px",
        }}
        className="modal-order">
        <div className="text-f">
          <TextField
            sx={{ marginRight: "35px", marginTop: "20px" }}
            id="standard-search"
            label="First Name "
            type=""
            variant="standard"
          />
          <TextField
            sx={{ marginTop: "20px" }}
            id="standard-search"
            label="Last  Name"
            type="search"
            variant="standard"
          />
          <TextField
            sx={{ marginRight: "35px", marginTop: "20px" }}
            id="standard-search"
            label="Address line 1"
            type="search"
            variant="standard"
          />
          <TextField
            sx={{ marginTop: "20px" }}
            id="standard-search"
            label="Address line 1"
            type="search"
            variant="standard"
          />
          <TextField
            sx={{ marginRight: "35px", marginTop: "20px" }}
            id="standard-search"
            label="City"
            type="search"
            variant="standard"
          />
          <TextField
            sx={{ marginTop: "20px" }}
            id="standard-search"
            label="State/Province/Region"
            type="search"
            variant="standard"
          />
          <TextField
            sx={{ marginRight: "35px", marginTop: "20px" }}
            id="standard-search"
            label="Zip/Postal code*"
            type="search"
            variant="standard"
          />
          <TextField
            sx={{ marginTop: "20px" }}
            id="standard-search"
            label="Country"
            type="search"
            variant="standard"
          />
          <div className="total">
            <Typography
              sx={{ marginTop: "20px" }}
              fontFamily={"-moz-initial"}
              variant="h4"
              component="h2">
              Total: {cart && cart?.totalPrice}
            </Typography>
          </div>
          <div className="next">
            <button onClick={() => navigate("/payment")} className="next-btn">
              Next
            </button>
          </div>
        </div>
      </Box>
    </Container>
  );
}
