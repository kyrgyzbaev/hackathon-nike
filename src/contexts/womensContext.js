import React, { useReducer } from "react";
import axios from "axios";

export const womensContext = React.createContext();

const API = " http://localhost:8001/womens";

const INIT_STATE = {
  womens: [],
  oneWomen: null,
  pages: 0,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_WOMENS":
      return {
        ...state,
        womens: action.payload.data,
        pages: Math.ceil(action.payload.headers["x-total-count"] / 3),
      };
    case "GET_ONE_WOMEN":
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
}

const WomensContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createProduct(newWomen) {
    await axios.post(API, newWomen);
  }

  async function getWomens() {
    // console.log(`${API}${window.location.search}`);
    let res = await axios(`${API}${window.location.search}`);
    // console.log(res);
    dispatch({
      type: "GET_WOMENS",
      payload: res,
    });
  }
  //   console.log(state.pages);
  async function deleteWomen(id) {
    await axios.delete(`${API}/${id}`);
    getWomens();
  }

  async function getOneWomen(id) {
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_WOMEN",
      payload: res.data,
    });
  }
  async function updateWomen(id, editedWomen) {
    await axios.patch(`${API}/${id}`, editedWomen);
  }
  return (
    <womensContext.Provider
      value={{
        womens: state.womens,
        oneWomen: state.oneWomen,
        pages: state.pages,
        createProduct,
        getWomens,
        deleteWomen,
        getOneWomen,
        updateWomen,
      }}>
      {children}
    </womensContext.Provider>
  );
};
export default WomensContextProvider;
