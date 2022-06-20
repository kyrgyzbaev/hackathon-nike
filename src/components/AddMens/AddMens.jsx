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
import { mensContext } from "../../contexts/mensContext";

// title, description, price, image

const AddProductForm = () => {
  const { createProduct } = useContext(mensContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  function handleValues() {
    let newProduct = {
      title,
      description,
      price,
      //   price: +price,
      image,
    };
    if (!title.trim() || !description.trim() || !price || !image.trim()) {
      alert("fill in the fields!");
      return;
    }
    createProduct(newProduct);
    navigate("/mens");
  }
  //   console.log(typeof price);
  return (
    <Container maxWidth="sm">
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          fontFamily={"-moz-initial"}
          underline="hover"
          color="inherit"
          href="/mens">
          Mens
        </Link>
        <Typography fontFamily={"-moz-initial"} color="text.primary">
          Add
        </Typography>
      </Breadcrumbs>
      <Box
        display={"flex"}
        flexDirection={"column"}
        padding={"30px"}
        textAlign={"center"}>
        <p className="add-m-t">Add new mens product</p>
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
          type={"number"}
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

        <button
          className="add-mens-btn"
          onClick={handleValues}
          style={{ margin: "10px" }}
          variant="contained">
          Add mens product
        </button>
      </Box>
    </Container>
  );
};

export default AddProductForm;
