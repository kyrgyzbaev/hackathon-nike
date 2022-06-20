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
import { authContext } from "../../contexts/authContext";
import { womensContext } from "../../contexts/womensContext";
import { womenscartContext } from "../../contexts/womenscartContext";

const WomensCard = ({ item }) => {
  const navigate = useNavigate();
  const { deleteWomen } = useContext(womensContext);
  const { isAdmin } = useContext(authContext);
  const { addWomenToCart, checkWomenInCart } = useContext(womenscartContext);
  const [checkWomen, setCheckWomen] = useState(checkWomenInCart(item));
  // console.log(item);

  return (
    <div className="womens-card">
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={item.image}
      />
      <div className="womens-card-2">
        <p className="p-w-1">{item.title}</p>
        <p className="p-w-2">
          {item.description.length > 20
            ? `${item.description.slice(0, 20)}...`
            : item.description}
        </p>
        <p className="p-w-3">{item.price}</p>
      </div>
      <CardActions>
        {isAdmin ? (
          <>
            <Button size="small" onClick={() => deleteWomen(item.id)}>
              <DeleteIcon className="delete-icon-w" />
            </Button>
            <Button
              size="small"
              onClick={() => navigate(`/edit-womens/${item.id}`)}>
              <EditIcon className="edit-icon-w" />
            </Button>
          </>
        ) : null}

        <Button
          onClick={() => {
            addWomenToCart(item);
            setCheckWomen(checkWomenInCart(item));
          }}
          size="small">
          {checkWomen ? (
            <img
              className="mens-cart-icon"
              src="https://img.icons8.com/material-sharp/344/shopping-cart-loaded.png"
              onClick={() => navigate("/womens-cart")}
            />
          ) : (
            <img
              className="mens-cart-icon"
              src="https://img.icons8.com/material-sharp/344/favorite-cart.png"
              onClick={() => navigate("/cart")}
            />
          )}
        </Button>
        <Button size="small" onClick={() => navigate(`/womens/${item.id}`)}>
          <MoreHorizIcon className="more-icon-w" />
        </Button>
      </CardActions>
    </div>
  );
};

export default WomensCard;
