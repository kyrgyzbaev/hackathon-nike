import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import AuthContextProvider from "./contexts/authContext";
import ProductsContextProvider from "./contexts/mensContext";
import CartContextProvider from "./contexts/cartContext";
import Routing from "./Routing";
import WomensContextProvider from "./contexts/womensContext";

const App = () => {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <WomensContextProvider>
          <CartContextProvider>
            <BrowserRouter>
              <Header />
              <Routing />
            </BrowserRouter>
          </CartContextProvider>
        </WomensContextProvider>
      </ProductsContextProvider>
    </AuthContextProvider>
  );
};

export default App;
