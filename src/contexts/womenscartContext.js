import React, { useReducer } from "react";

export const womenscartContext = React.createContext();

const INIT_STATE = {
  womenscart: null,
  count: 0,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_WOMENS_CART":
      return {
        ...state,
        womenscart: action.payload,
        count: action.payload.products.length,
      };
    default:
      return state;
  }
}

const WomensCartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function addWomenToCart(women) {
    let cart = JSON.parse(localStorage.getItem("womens-cart"));
    if (!cart) {
      cart = {
        womens: [],
        totalPrice: 0,
      };
    }
    let newWomen = {
      item: women,
      count: 1,
      subPrice: women.price,
    };
    let isWomenInCart = cart.products.some(item => item.item.id === women.id);
    // console.log(isProductInCart);
    if (isWomenInCart) {
      cart.womens = cart.womens.filter(item => item.item.id !== women.id);
    } else {
      cart.womens.push(newWomen);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    // console.log(cart);
    // console.log(product);
    getWomenCart();
  }

  function checkWomenInCart(women) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        womens: [],
        totalPrice: 0,
      };
    }
    // let isWomenInCart = cart.products.some(item => item.item.id === women.id);
    // return isWomenInCart;
  }
  function getWomenCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        womens: [],
        totalPrice: 0,
      };
    }
    cart.totalPrice = cart.womens.reduce((prev, curr) => {
      return prev + curr.subPrice;
    }, 0);

    // 0 + 1000 = 1000
    // 1000 + 2000 = 3000

    dispatch({
      type: "GET_WOMENS_CART",
      payload: cart,
    });
  }
  function changeWomenCount(count, id) {
    if (count <= 0) {
      count = 1;
    }
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.womens = cart.womens.map(item => {
      if (item.item.id === id) {
        item.count = count;
        item.subPrice = item.count * item.item.price;
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    getWomenCart();
  }
  function deleteFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.womens = cart.womens.filter(item => item.item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    getWomenCart();
  }
  return (
    <womenscartContext.Provider
      value={{
        womenscart: state.womenscart,
        count: state.count,
        addWomenToCart,
        checkWomenInCart,
        getWomenCart,
        changeWomenCount,
        deleteFromCart,
      }}>
      {children}
    </womenscartContext.Provider>
  );
};
export default WomensCartContextProvider;
