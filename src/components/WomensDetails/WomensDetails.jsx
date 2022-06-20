import {
  Box,
  Breadcrumbs,
  Container,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import { womensContext } from "../../contexts/womensContext";
import Loader from "../Loader/Loader";

const WomensDetails = () => {
  const { getOneWomen, oneWomen } = useContext(womensContext);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getOneWomen(id);
  }, []);
  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/womens">
          Womens
        </Link>
        <Typography color="text.primary">Info</Typography>
      </Breadcrumbs>

      {oneWomen ? (
        <Box className="w-d-box">
          <img
            className="womens-detail-img"
            src={oneWomen.image}
            width="100%"
            alt="product"
          />
          <div className="string-detail-img-2">
            <h1 className>{oneWomen.title}</h1>
            <p>{oneWomen.description}</p>
            <p variant="h4">{oneWomen.price}</p>
          </div>
        </Box>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default WomensDetails;
