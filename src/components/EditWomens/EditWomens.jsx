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
import { womensContext } from "../../contexts/womensContext";

// title, description, price, image

const EditWomensForm = () => {
  const { getOneWomen, oneWomen, updateWomen } = useContext(womensContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  function handleValues() {
    let editedWomen = {
      title,
      description,
      price,
      image,
    };
    if (!title.trim() || !description.trim() || !price || !image.trim()) {
      alert("заполните поля!");
      return;
    }
    updateWomen(id, editedWomen);
    navigate("/womens");
  }
  useEffect(() => {
    getOneWomen(id);
  }, []);
  useEffect(() => {
    if (oneWomen) {
      setTitle(oneWomen.title);
      setPrice(oneWomen.price);
      setImage(oneWomen.image);
      setDescription(oneWomen.description);
    }
  }, [oneWomen]);
  return oneWomen ? (
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
          href="/womens">
          Womens
        </Link>
        <Typography fontFamily={"-moz-initial"} color="text.primary">
          Edit
        </Typography>
      </Breadcrumbs>
      <Box
        display={"flex"}
        flexDirection={"column"}
        padding={"30px"}
        textAlign={"center"}>
        <p className="edit-w-p">Edit womens</p>
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
        <button className="edit-w-btn" onClick={handleValues}>
          Save product
        </button>
      </Box>
    </Container>
  ) : (
    <Loader />
  );
};

export default EditWomensForm;
