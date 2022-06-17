import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AddMens from "./components/AddMens/AddMens";
import AddWomens from "./components/AddWomens/AddWomens";
import MensList from "./components/MensList/MensList";
import WomensList from "./components/WomensList/WomensList";
import EditMens from "./components/EditMens/EditMens";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Cart from "./components/Cart/Cart";
import { authContext } from "./contexts/authContext";
import MensDetails from "./components/MensDetails/MensDetails";

const Routing = () => {
  const { isAdmin } = useContext(authContext);
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route
        path="/add-mens"
        element={isAdmin ? <AddMens /> : <Navigate replace to="*" />}
      />
      <Route
        path="/add-womens"
        element={isAdmin ? <AddWomens /> : <Navigate replace to="*" />}
      />
      <Route
        path="/edit/:id"
        element={isAdmin ? <EditMens /> : <Navigate replace to="*" />}
      />
      <Route path="/mens" element={<MensList />} />
      <Route path="/womens" element={<WomensList />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/mens/:id" element={<MensDetails />} />
    </Routes>
  );
};

export default Routing;
