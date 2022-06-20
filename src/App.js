import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import AuthContextProvider from "./contexts/authContext";
import ProductsContextProvider from "./contexts/mensContext";
import Routing from "./Routing";
import WomensContextProvider from "./contexts/womensContext";
import MensCartContextProvider from "./contexts/menscartContext";
import WomensCartContextProvider from "./contexts/womenscartContext";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <WomensContextProvider>
          <MensCartContextProvider>
            <WomensCartContextProvider>
              <BrowserRouter>
                <Header />
                <Routing />
                <Footer />
              </BrowserRouter>
            </WomensCartContextProvider>
          </MensCartContextProvider>
        </WomensContextProvider>
      </ProductsContextProvider>
    </AuthContextProvider>
  );
};

export default App;
