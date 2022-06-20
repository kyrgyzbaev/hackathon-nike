import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useNavigate } from "react-router-dom";
import { menscartContext } from "../../contexts/menscartContext";
import { authContext } from "../../contexts/authContext";
import { mensContext } from "../../contexts/mensContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const { deleteProduct } = useContext(mensContext);
  const { isAdmin } = useContext(authContext);
  const { addProductToCart, checkProductInCart } = useContext(menscartContext);
  const [checkProduct, setCheckProduct] = useState(checkProductInCart(item));

  // console.log(item);

  return (
    <div className="card">
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image={item.image}
      />
      <div className="card-2">
        <p className="p-1" component="div">
          {item.title}
        </p>
        <p className="p-2">
          {item.description.length > 20
            ? `${item.description.slice(0, 20)}...`
            : item.description}
        </p>
        <p className="p-3">{item.price}</p>
      </div>
      <CardActions>
        {isAdmin ? (
          <>
            <Button size="small" onClick={() => deleteProduct(item.id)}>
              <DeleteIcon className="delete-icon" />
            </Button>
            <Button
              size="small"
              onClick={() => navigate(`/edit-mens/${item.id}`)}>
              <EditIcon className="edit-icon" />
            </Button>
          </>
        ) : null}

        <Button
          onClick={() => {
            addProductToCart(item);
            setCheckProduct(checkProductInCart(item));
          }}
          size="small">
          {checkProduct ? (
            <img
              className="mens-cart-icon"
              src="https://img.icons8.com/material-sharp/344/shopping-cart-loaded.png"
              onClick={() => navigate("/cart")}
            />
          ) : (
            <img
              className="mens-cart-icon"
              src="https://img.icons8.com/material-sharp/344/favorite-cart.png"
              onClick={() => navigate("/cart")}
            />
          )}
        </Button>
        <Button size="small" onClick={() => navigate(`/mens/${item.id}`)}>
          <MoreHorizIcon className="more-icon" />
        </Button>
      </CardActions>
    </div>
  );
};

export default ProductCard;
