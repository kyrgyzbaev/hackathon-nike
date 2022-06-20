import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { mensContext } from "../../contexts/mensContext";

// title, description, price, image

const EditProductForm = () => {
  const { getOneProduct, oneProduct, updateProduct } = useContext(mensContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  function handleValues() {
    let editedProduct = {
      title,
      description,
      price,
      image,
    };
    if (!title.trim() || !description.trim() || !price || !image.trim()) {
      alert("заполните поля!");
      return;
    }
    updateProduct(id, editedProduct);
    navigate("/mens");
  }
  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setPrice(oneProduct.price);
      setImage(oneProduct.image);
      setDescription(oneProduct.description);
    }
  }, [oneProduct]);
  return oneProduct ? (
    <Container maxWidth="sm">
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          fontFamily={"-moz-initial"}
          underline="hover"
          color="inherit"
          href="/">
          Shop
        </Link>
        <Link
          fontFamily={"-moz-initial"}
          underline="hover"
          color="inherit"
          href="/mens">
          Mens
        </Link>
        <Typography fontFamily={"-moz-initial"} color="text.primary">
          Edit
        </Typography>
      </Breadcrumbs>
      <Box
        fontFamily={"-moz-initial"}
        display={"flex"}
        flexDirection={"column"}
        padding={"30px"}
        textAlign={"center"}>
        <p className="edit-m-p">Edit mens</p>
        <TextField
          value={title}
          onChange={e => setTitle(e.target.value)}
          id="standard-basic"
          label="Title"
          variant="standard"
          style={{ margin: "10px" }}
        />
        <TextField
          value={description}
          onChange={e => setDescription(e.target.value)}
          id="standard-basic"
          label="Description"
          variant="standard"
          style={{ margin: "10px" }}
        />
        <TextField
          type="number"
          value={price}
          onChange={e => setPrice(+e.target.value)}
          id="standard-basic"
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
        <button className="edit-m-btn" onClick={handleValues}>
          Save product
        </button>
      </Box>
    </Container>
  ) : (
    <Loader />
  );
};

export default EditProductForm;
