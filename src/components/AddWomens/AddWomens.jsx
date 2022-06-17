import React, { useContext, useState } from "react";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { womensContext } from "../../contexts/womensContext";

// title, description, price, image

const AddProductForm = () => {
  const { createProduct } = useContext(womensContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  function handleValues() {
    let newWomen = {
      title,
      description,
      price,
      //   price: +price,
      image,
    };
    if (!title.trim() || !description.trim() || !price || !image.trim()) {
      alert("заполните поля!");
      return;
    }
    createProduct(newWomen);
    navigate("/womens");
  }
  //   console.log(typeof price);
  return (
    <Container maxWidth="sm">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/womens">
          Womens
        </Link>
        <Typography color="text.primary">Add</Typography>
      </Breadcrumbs>
      <Box
        display={"flex"}
        flexDirection={"column"}
        padding={"30px"}
        textAlign={"center"}>
        <Typography fontFamily={"-moz-initial"} variant="h4" component="h2">
          Add new womens product
        </Typography>
        <TextField
          value={title}
          onChange={e => setTitle(e.target.value)}
          label="Title"
          variant="standard"
          style={{ margin: "10px" }}
        />
        <TextField
          value={description}
          onChange={e => setDescription(e.target.value)}
          label="Description"
          variant="standard"
          style={{ margin: "10px" }}
        />
        <TextField
          type="number"
          value={price}
          onChange={e => setPrice(+e.target.value)}
          label="Price"
          variant="standard"
          style={{ margin: "10px" }}
        />
        <TextField
          value={image}
          onChange={e => setImage(e.target.value)}
          id="standard-basic"
          label="Image"
          variant="standard"
          style={{ margin: "10px" }}
        />
        <Button
          onClick={handleValues}
          style={{ margin: "10px" }}
          variant="contained"
          color="success">
          Add womens product
        </Button>
      </Box>
    </Container>
  );
};

export default AddProductForm;
