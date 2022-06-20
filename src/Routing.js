import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AddMens from "./components/AddMens/AddMens";
import AddWomens from "./components/AddWomens/AddWomens";

import MensList from "./components/MensList/MensList";
import WomensList from "./components/WomensList/WomensList";
import EditMens from "./components/EditMens/EditMens";
import EditWomens from "./components/EditWomens/EditWomens";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import MensCart from "./components/MensCart/MensCart";
import { authContext } from "./contexts/authContext";
import MensDetails from "./components/MensDetails/MensDetails";
import WomensDetails from "./components/WomensDetails/WomensDetails";
import WomensCart from "./components/WomensCart/WomensCart";
import HomeList from "./components/HomeList/HomeList";
import OrderForm from "./components/OrderForm/OrderForm";
import Payment from "./components/Payment/Payment";

const Routing = () => {
  const { isAdmin } = useContext(authContext);
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/" element={<HomeList />} />
      <Route
        path="/add-mens"
        element={isAdmin ? <AddMens /> : <Navigate replace to="*" />}
      />
      <Route
        path="/add-womens"
        element={isAdmin ? <AddWomens /> : <Navigate replace to="*" />}
      />
      <Route
        path="/edit-mens/:id"
        element={isAdmin ? <EditMens /> : <Navigate replace to="*" />}
      />
      <Route
        path="/edit-womens/:id"
        element={isAdmin ? <EditWomens /> : <Navigate replace to="*" />}
      />

      <Route path="/mens" element={<MensList />} />
      <Route path="/womens" element={<WomensList />} />
      <Route path="/cart" element={<MensCart />} />
      <Route path="/cart" element={<WomensCart />} />
      <Route path="/mens/:id" element={<MensDetails />} />
      <Route path="/womens/:id" element={<WomensDetails />} />
      <Route path="/modal" element={<OrderForm />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
};

export default Routing;
